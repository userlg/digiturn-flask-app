from app import *
from .models import Cliente
from .models import Vendedor

@app.route('/',methods=['GET'])
def home():
    valor=[1,2,3,4]
    return render_template('index.html',valor=valor)

@app.route('/sellers_view',methods=['GET'])
def sellers_view():
    return render_template('sellers_view.html')

