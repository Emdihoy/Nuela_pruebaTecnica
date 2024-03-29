"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Asignaturas,Tipo, Curso, Grupo, Horas, Espacio, Cuadrante
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/asignaturas', methods=['GET'])
def get_user():

    todas_asignaturas = Asignaturas.query.all()
    results= list( map( lambda asignaturas:asignaturas.serialize(), todas_asignaturas ))
  
    return jsonify( results), 200

@api.route('/tipo', methods=['GET'])
def get_tipo():

    todos_tipo = Tipo.query.all()
    results= list( map( lambda tipo:tipo.serialize(), todos_tipo ))
  
    return jsonify( results), 200

@api.route('/curso', methods=['GET'])
def get_curso():

    todos_curso = Curso.query.all()
    results= list( map( lambda curso:curso.serialize(), todos_curso ))
  
    return jsonify( results), 200

@api.route('/grupo', methods=['GET'])
def get_grupo():

    todos_grupo = Grupo.query.all()
    results= list( map( lambda grupo:grupo.serialize(), todos_grupo ))
  
    return jsonify( results), 200

@api.route('/horas', methods=['GET'])
def get_horas():

    todos_horas = Horas.query.all()
    results= list( map( lambda horas:horas.serialize(), todos_horas ))
  
    return jsonify( results), 200

@api.route('/espacio', methods=['GET'])
def get_espacio():

    todos_espacios = Espacio.query.all()
    results= list( map( lambda espacio:espacio.serialize(), todos_espacios ))
  
    return jsonify( results), 200

@api.route('/cuadrante', methods=['POST'])
def post_linea():
    request_body_fila = request.get_json()

    nueva_fila = Cuadrante(    
        asignatura=request_body_fila["asignatura"],
        tipo=request_body_fila["tipo"],
        curso=request_body_fila["curso"],
        grupo=request_body_fila["grupo"],
        horas=request_body_fila["horas"],
        espacio=request_body_fila["espacio"]
            )

    db.session.add(nueva_fila)
    db.session.commit()
  
    return jsonify(request_body_fila), 200

