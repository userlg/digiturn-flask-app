from operator import ge
from os import name
from app import *
from .models import Cliente
from .models import Vendedor
from .models import Turns
import datetime
import json
import random

@app.route('/',methods=['GET'])
def home():
    sellers = Vendedor.query.all()
    quantify = Vendedor.query.count()
    return render_template('index.html',quantify=quantify, sellers=sellers)

@app.route('/sellers_view',methods=['GET'])
def sellers_view():
    
    sellers = Vendedor.query.all();
    return render_template('sellers_view.html',sellers=sellers)

@app.route('/process', methods=['GET'])
def process():
    
    result = Vendedor.query.all()
    lista = []

    for seller in result:
        data = {'id':seller.id,
            'name':seller.name,'last_name':seller.last_name,'status':seller.status
            }
        lista.append(data)
    #print(lista)
       
    sellers = {'vendedores':lista}  
       
    print(datetime.datetime.now())
    if sellers:
      response = json.dumps(sellers,indent=4)
      return jsonify(response)
    msg = {'msg':'No hay vendedores registrados en el sistema'}
    response = msg
    return jsonify(response,charset='utf-8')

#This method generate the ticket
@app.route('/get_ticket',methods=['GET'])
def get_ticket():
    
    result = Vendedor.query.all()
    list = []
    cont = 0
    for seller in result:
       if seller.status == True:
           cont += 1
           list.append(seller.id)
           
    if cont > 0: 
        generated_seller = random.randint(0,cont-1)
        id =  list[generated_seller]
        print('Seller Status Changed: ' + str(id))
        result = Vendedor.query.filter_by(id = (id)).first()
        result.status = False
        db.session.add(result)
        db.session.commit()
        return jsonify({'message': 'generated','seller':list[generated_seller],' count':cont,'status':200})
    return jsonify({'message':'No hay vendedores Disponibles','status':400})
