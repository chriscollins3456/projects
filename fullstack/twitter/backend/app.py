from flask import Flask, render_template, request, redirect, url_for, jsonify
import json
from flask_cors import CORS
import time
import random, string
from peewee import *
from playhouse.sqlite_ext import SqliteExtDatabase
import datetime

app = Flask(__name__)
app.config.from_object(__name__)
CORS(app)

db = SqliteExtDatabase("twitter.db")

class BaseModel(Model):
	class Meta:
		database = db

class User(BaseModel):
	username = CharField(unique=True)
	password = CharField()
	handle = CharField()
	token = CharField()

class Tweet(BaseModel):
	user = ForeignKeyField(User, related_name='tweets')
	text = CharField()
	date = DateTimeField(default=datetime.datetime.now)

	def serialize(self):
		return {
			"id": self.id,
			"text": self.text,
			"date": self.date,
			"username": self.user.username,
			"handle": self.user.handle
			}

db.connect()
#db.create_tables([User, Tweet])

#chris = User.create(username='chris', password='pass', handle='ccolli', token='token')
#paul = User.create(username='paul', password='dilyard', handle='pdilly', token='token2')
#tweet1 = Tweet.create(user=chris, text='this is our tweet')

@app.route('/')
def home():
	tweets = [tweet.serialize() for tweet in Tweet.select().join(User)]
	time.sleep(1)

	return jsonify(tweets)

@app.route('/tweet', methods=["POST"])
def tweet():
	req_data = request.get_json()
	text = req_data["text"]
	token = req_data["token"]
	user = User.get(User.token == token)
	Tweet.create(user=user, text=text)

	return redirect(url_for('home'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	req_data = request.get_json()
	username = req_data['username']
	password = req_data['password']

	query = User.select().where(User.username == username)
	if query.exists():
		user = User.get(User.username == username)
		if user.password == password:
			return jsonify({"id": user.id, "token": user.token, "handle": user.handle})
		else:
			return jsonify({"token": "incorrect"})
	else:
		return jsonify({"token": "incorrect"})

@app.route('/account', methods=['POST'])
def account():

	token = ''
	for i in range(0,20):
		token = token + random.choice(string.ascii_letters + string.digits)

	req_data = request.get_json()
	username = req_data['username']
	password = req_data['password']
	handle = req_data['handle']

	if User.select().where(User.username == username).exists():
		return jsonify({"submitted": "error"})

	username = User.create(username=username, password=password, handle=handle, token=token)

	return jsonify({"submitted": "true"})

if __name__ == '__main__':
	app.run(debug=True)
