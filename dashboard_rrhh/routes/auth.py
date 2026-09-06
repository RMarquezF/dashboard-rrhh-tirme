from extensions import db
from flask import Blueprint, jsonify, request

# Creamos el blueprint con el prefijo /api para que coincida con Angular
auth_bp = Blueprint('auth', __name__, url_prefix='/api')


@auth_bp.route('/get-roles', methods=['POST'])
def get_roles():
  data = request.get_json() or {}
  email = data.get('email')

  if not email:
    return jsonify({'message': 'El correo es obligatorio'}), 400

  # TODO: Reemplaza esto con tu consulta real a la base de datos usando SQLAlchemy
  # Ejemplo:
  # usuario = Usuario.query.filter_by(email=email).first()
  # if not usuario:
  #     return jsonify({'message': 'Correo no encontrado'}), 404
  # roles_usuario = [rol.nombre for rol in usuario.roles]

  # Simulación temporal (asegúrate de que devuelva al menos 'empleado')
  roles_usuario = ['empleado', 'hr']

  return jsonify({'success': True, 'roles': roles_usuario}), 200


@auth_bp.route('/login', methods=['POST'])
def login():
  data = request.get_json() or {}
  email = data.get('email')
  password = data.get('password')
  rol_seleccionado = data.get('rol', 'empleado')

  if not email or not password:
    return jsonify({'message': 'Faltan credenciales obligatorias'}), 400

  # TODO: Validar contraseña (ej. check_password_hash) y comprobar
  # que el usuario efectivamente tiene asignado el rol_seleccionado en la BDD.

  return jsonify({
      'success': True,
      'user': {
          'email': email,
          'rolActivo': rol_seleccionado,
      },
  }), 200