from app import *
from datetime import datetime

class Vendedor(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(60))
  last_name = db.Column(db.String(60))
  status = db.Column(db.Boolean)
  created = db.Column(db.DateTime)
  
  def __init__(self,name,last_name,status,) :
    super().__init__()
    self.name = name
    self.last_name = last_name
    self.status = status
    self.created= datetime.now()

class Cliente(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(60))
  last_name = db.Column(db.String(60))
  email = db.Column(db.String(70), unique=True)
  cliente_type = db.Column(db.String(15)) #Regular o Preferencial o CLiente Vendedor
  
  def __init__(self,name,last_name,email,cliente_type) :
    super().__init__()
    self.name = name
    self.last_name = last_name
    self.email = email
    self.cliente_type = cliente_type
    

class Turns(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  id_vendedor = db.Column(db.String(60))
  seller_name = db.Column(db.String(60))
  seller_last_name = db.Column(db.String(60))
  status = db.Column(db.Boolean)
  
  def __init__(self,seller_name,seller_last_name,id_vendedor,status) :
    super().__init__()
    self.id_vendedor = id_vendedor
    self.seller_last_name = seller_last_name
    self.seller_name = seller_name
    self.status = status
  
 #Regular o 
  
  #task = Task.query.filter_by(id=int(id)).first()

#task = Task.query.filter_by(id=int(id)).delete()

#   task = Task(content=content,done=False)
      #db.session.add(task)
     # db.session.commit()
# tasks = Task.query.all()
