from app import *
from .models import Cliente
from .models import Vendedor
import datetime

@app.route('/',methods=['GET'])
def home():
    valor=[1,2,3,4]
    sellers = Vendedor.query.all()
    return render_template('index.html',valor=valor, sellers=sellers)

@app.route('/sellers_view',methods=['GET'])
def sellers_view():
    
    sellers = Vendedor.query.all();
    return render_template('sellers_view.html',sellers=sellers)

@app.route('/process', methods=['GET'])
def process():
    sellers = {}
    index = 1
    result = Vendedor.query.all()
    for seller in result:
        sellers[index] = seller.name
        index += 1
    print(datetime.datetime.now())
    if sellers:
      return jsonify(sellers)
    msg = {'msg':'No hay vendedores registrados en el sistema'}
    return jsonify(msg)

