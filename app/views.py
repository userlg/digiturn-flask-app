from app import *
from .models import Cliente
from .models import Vendedor

@app.route('/',methods=['GET'])
def home():
    valor=[1,2,3,4]
    return render_template('index.html',valor=valor)

