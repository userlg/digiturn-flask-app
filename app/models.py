from app import *

class Task(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String(150))
  done = db.Column(db.Boolean)
  
  def __init__(self,content,done) :
    super().__init__()
    self.content = content
    self.done = done
  
  
  #task = Task.query.filter_by(id=int(id)).first()

#task = Task.query.filter_by(id=int(id)).delete()

#   task = Task(content=content,done=False)
      #db.session.add(task)
     # db.session.commit()
# tasks = Task.query.all()
