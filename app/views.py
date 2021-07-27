from app import *
from .models import Cliente
from .models import Vendedor

@app.route('/',methods=['GET'])
def home():
    valor=[1,2,3,4]
    sellers = Vendedor.query.all()
    return render_template('index.html',valor=valor, sellers=sellers)

@app.route('/sellers_view',methods=['GET'])
def sellers_view():
    
    sellers = Vendedor.query.all();
    return render_template('sellers_view.html',sellers=sellers)

