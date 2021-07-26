from app import *
from .models import Cliente
from .models import Vendedor


@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')

