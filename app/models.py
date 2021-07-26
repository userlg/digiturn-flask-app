from app import *

class Vendedor(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(60))
  last_name = db.Column(db.String(60))
  status = db.Column(db.Boolean)
  
  def __init__(self,name,last_name,status) :
    super().__init__()
    self.name = name
    self.last_name = last_name
    self.status = status

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
  
  #task = Task.query.filter_by(id=int(id)).first()

#task = Task.query.filter_by(id=int(id)).delete()

#   task = Task(content=content,done=False)
      #db.session.add(task)
     # db.session.commit()
# tasks = Task.query.all()
