from app import *


@app.route('/')
def home():
    return '<h1> Welcome to the digiturn app </h1>'


@app.route('/about')
def about():
    return '<h1> This is about route </h1>'
