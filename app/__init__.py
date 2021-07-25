from flask import Flask

app = Flask(__name__)
app.env = 'development'
app.debug = True
port = 7000

from app import views

from app import admin_views
