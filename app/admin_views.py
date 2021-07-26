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
    name = request.form['name']
    last_name = request.form['last_name']
    email = request.form['email']
    type_client = request.form['type']
    if name and last_name and email and type_client:
       new_client = Cliente(name, last_name, email, type_client)
       db.session.add(new_client)
       db.session.commit()
       return redirect(url_for('admin_dashboard'))

@app.route('/admin/add_seller',methods=['POST'])
def add_seller():
     name = request.form['name']
     last_name = request.form['last_name']
     if name and last_name:
       new_seller = Vendedor(name, last_name,True)
       db.session.add(new_seller)
       db.session.commit()
     return redirect(url_for('admin_dashboard'))
