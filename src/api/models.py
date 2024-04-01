from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profesor(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(120), nullable=True)
    correo = db.Column(db.String(120), unique=True, nullable=True)
    numero = db.Column(db.Integer, unique=True, nullable=True)

    def __repr__(self):
        return f'{self.nombre}'

    def serialize(self):
        return {
            "id": self.id,
            "Profesor": self.nombre,
        }
class Asignatura(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(120), nullable=True)
    asignatura_relation = db.relationship('Cuadrante', backref=db.backref('asignatura', lazy=True))

    def __repr__(self):
        return f'{self.nombre}'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }
class Tipo(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    tipo_de_asignatura = db.Column(db.String(120), nullable=True)
    tipo_relation = db.relationship('Cuadrante', backref=db.backref('tipo', lazy=True))

    def __repr__(self):
        return f'{self.tipo_de_asignatura}'

    def serialize(self):
        return {
            "id": self.id,
            "tipo_de_asignatura": self.tipo_de_asignatura
        }
class Curso(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    curso_escolar = db.Column(db.String(120), nullable=True)
    curso_relation = db.relationship('Cuadrante', backref=db.backref('curso', lazy=True))

    def __repr__(self):
        return f'{self.curso_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "curso_escolar": self.curso_escolar
        }
class Grupo(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    grupo_escolar = db.Column(db.String(120), nullable=True)
    grupo_relation = db.relationship('Cuadrante', backref=db.backref('grupo', lazy=True))

    def __repr__(self):
        return f'{self.grupo_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "grupo": self.grupo_escolar
        }
class Hora(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    hora_lectivas = db.Column(db.String(120), nullable=True)
    hora_relation = db.relationship('Cuadrante', backref=db.backref('hora', lazy=True))

    def __repr__(self):
        return f'{self.hora_lectivas}'

    def serialize(self):
        return {
            "id": self.id,
            "hora": self.hora_lectivas
        }
class Espacio(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    espacio_escolar = db.Column(db.String(120), nullable=True)
    espacio_relation = db.relationship('Cuadrante', backref=db.backref('espacio', lazy=True))

    def __repr__(self):
        return f'{self.espacio_escolar}'

    def serialize(self):
        return {
            "id": self.id,
            "espacio": self.espacio_escolar
        }
class Cuadrante(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    asignaturaId = db.Column(db.Integer, db.ForeignKey('asignatura.id'), nullable=False)
    tipoId = db.Column(db.Integer, db.ForeignKey('tipo.id'), nullable=False)
    cursoId = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    grupoId = db.Column(db.Integer, db.ForeignKey('grupo.id'), nullable=False)
    horaId = db.Column(db.Integer, db.ForeignKey('hora.id'), nullable=False)
    espacioId = db.Column(db.Integer, db.ForeignKey('espacio.id'), nullable=False)

    def __repr__(self):
        return f'{id}'

    def serialize(self):
        return {
            "id": self.id,
            "asignatura": self.asignatura.nombre,
            "tipo": self.tipo.tipo_de_asignatura,
            "curso": self.curso.curso_escolar,
            "grupo": self.grupo.grupo_escolar,
            "hora": self.hora.hora_lectivas,
            "espacio": self.espacio.espacio_escolar
        }
    
