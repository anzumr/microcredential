from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
"""
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:7208@localhost/demoDB'
db = SQLAlchemy(app)
#define db model table in our database
class Data(db.Model):
    __tablename__ = 'customer_email'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column (db.String(120), unique = True)
    height = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    
    def __init__(self, email, height, weight):
        self.email = email_
        self.height = height_
        self.weight 
   
"""
@app.route("/")
def index():
    return render_template("activity19.html")

@app.route("/", methods=['post'])
def thankyou():
    if request.method=='post':
        email = request.form["email_address"]
        height = request.form["height_name"]
        weight = request.form["weight_name"]
    return render_template('thankyou.html')

if __name__ == "__main__":
    app.debug = True 
    app.run()
