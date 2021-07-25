from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.env = 'production'
app.debug = False
app.secret_key='Greenkey'
port = 7000
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/task.db'
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#db = SQLAlchemy(app)

from app import views

from app import admin_views
