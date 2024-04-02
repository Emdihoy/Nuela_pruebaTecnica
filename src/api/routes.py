"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Asignatura,Tipo, Curso, Grupo, Hora, Espacio, Cuadrante
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/asignatura', methods=['GET'])
def get_user():

    todas_asignatura = Asignatura.query.all()
    results= list( map( lambda asignatura:asignatura.serialize(), todas_asignatura ))
  
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

@api.route('/hora', methods=['GET'])
def get_hora():

    todos_hora = Hora.query.all()
    results= list( map( lambda hora:hora.serialize(), todos_hora ))
  
    return jsonify( results), 200

@api.route('/espacio', methods=['GET'])
def get_espacio():
    todos_espacios = Espacio.query.all()
    results= list( map( lambda espacio:espacio.serialize(), todos_espacios ))
    return jsonify( results), 200

@api.route('/cuadrante', methods=['GET'])
def get_cuadrante():
    todos_cuadrante = Cuadrante.query.all()
    results= list( map( lambda cuadrante:cuadrante.serialize(), todos_cuadrante ))
    return jsonify( results), 200

@api.route('/cuadrante', methods=['POST'])
def post_linea():
    request_body_fila = request.get_json()
    if not request_body_fila:
        return jsonify({'error': 'Missing data'}), 400
    nueva_fila = Cuadrante(    
    asignaturaId=request_body_fila["asignaturaId"],
    tipoId=request_body_fila["tipoId"],
        cursoId=request_body_fila["cursoId"],
        grupoId=request_body_fila["grupoId"],
        horaId=request_body_fila["horaId"],
        espacioId=request_body_fila["espacioId"]
        )
    db.session.add(nueva_fila)
    db.session.commit()
    return jsonify(nueva_fila.serialize()), 200

@api.route('/cuadrante/<int:cuadrante_id>', methods=['DELETE'])
def delete_cuadrante(cuadrante_id):
    fila = Cuadrante.query.get(cuadrante_id)

    if not fila:
        return jsonify({'message': 'fila no encontrada'}), 404

    db.session.delete(fila)
    db.session.commit()

    return jsonify({'Mensaje': f'Fila eliminada exitosamente'}), 200


