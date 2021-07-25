from app import *


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return '<h1> This is about route </h1>'
