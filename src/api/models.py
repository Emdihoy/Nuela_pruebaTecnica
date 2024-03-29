from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profesor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    correo = db.Column(db.String(120), unique=False, nullable=False)
    numero = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'{self.nombre}'

    def serialize(self):
        return {
            "id": self.id,
            "Profesor": self.nombre,
        }
class Asignaturas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    asignatura_relation = db.relationship('Cuadrante', backref=db.backref('asignatura', lazy=True))

    def __repr__(self):
        return f'{self.nombre}'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }
class Tipo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tipo_de_asignatura = db.Column(db.String(120), unique=False, nullable=False)
    tipo_relation = db.relationship('Cuadrante', backref=db.backref('tipo', lazy=True))

    def __repr__(self):
        return f'{self.tipo_de_asignatura}'

    def serialize(self):
        return {
            "id": self.id,
            "tipo_de_asignatura": self.tipo_de_asignatura
        }
class Curso(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    curso_escolar = db.Column(db.String(120), unique=False, nullable=False)
    curso_relation = db.relationship('Cuadrante', backref=db.backref('curso', lazy=True))

    def __repr__(self):
        return f'{self.curso_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "curso_escolar": self.curso_escolar
        }
class Grupo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    grupo_escolar = db.Column(db.String(120), unique=False, nullable=False)
    grupo_relation = db.relationship('Cuadrante', backref=db.backref('grupo', lazy=True))

    def __repr__(self):
        return f'{self.grupo_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "grupo": self.grupo
        }
class Horas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    horas_lectivas = db.Column(db.String(120), unique=False, nullable=False)
    horas_relation = db.relationship('Cuadrante', backref=db.backref('horas', lazy=True))

    def __repr__(self):
        return f'{self.horas_lectivas}'

    def serialize(self):
        return {
            "id": self.id,
            "horas": self.horas
        }
class Espacio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    espacio_escolar = db.Column(db.String(120), unique=False, nullable=False)
    espacio_relation = db.relationship('Cuadrante', backref=db.backref('espacio', lazy=True))

    def __repr__(self):
        return f'{self.espacio_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "espacio": self.espacio
        }
class Cuadrante(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Asignatura = db.Column(db.Integer, db.ForeignKey('asignaturas.id'), nullable=False)
    Tipo = db.Column(db.Integer, db.ForeignKey('tipo.id'), nullable=False)
    Curso = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    Grupo = db.Column(db.Integer, db.ForeignKey('grupo.id'), nullable=False)
    Horas = db.Column(db.Integer, db.ForeignKey('horas.id'), nullable=False)
    Espacio = db.Column(db.Integer, db.ForeignKey('espacio.id'), nullable=False)

    def __repr__(self):
        return f'{id}'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "tipo": self.tipo,
            "curso": self.curso,
            "grupo": self.grupo,
            "horas": self.horas,
            "espacio": self.espacio
        }
    
