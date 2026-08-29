from flask import Flask, jsonify

from config import Config
from extensions import db, ma
from routes.partes import partes_bp

app = Flask(__name__)
app.config.from_object(Config)

# Inicializar extensiones
db.init_app(app)
ma.init_app(app)

# Registrar Blueprints (Rutas)
app.register_blueprint(partes_bp)

@app.route('/')
def index():
    return jsonify({
        "status": "online",
        "message": "Dashboard RRHH API - Modulo de Partes de Horas Activo"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)