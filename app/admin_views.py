from app import *
from .models import Cliente
from .models import Vendedor


@app.route('/admin/dashboard')
def admin_dashboard():
    return render_template('admin_view.html')


@app.route('/admin/profile')
def admin_profile():
    return 'Admin profile'

@app.route('/admin/view_seller')
def view_seller():
    return render_template('form_seller.html')

@app.route('/admin/view_client')
def view_client():
    return render_template('form_client.html')

@app.route('/admin/add_client',methods=['POST'])
def add_client():
    return 'Cliente Añadido'

@app.route('/admin/add_seller',methods=['POST'])
def add_seller():
    return 'Vendedor Añadido'
