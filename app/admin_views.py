from app import *
from .models import Cliente
from .models import Vendedor


@app.route('/admin/dashboard')
def admin_dashboard():
    return render_template('admin_view.html')


@app.route('/admin/profile')
def admin_profile():
    return 'Admin profile'

@app.route('/admin/add_seller')
def add_seller():
    return render_template('form_seller.html')
