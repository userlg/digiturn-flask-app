from app import *
from .models import Cliente
from .models import Vendedor


@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return '<h1> This is about route </h1>'
