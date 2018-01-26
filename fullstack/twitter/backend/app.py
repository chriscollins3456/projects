from flask import Flask, render_template, request, redirect, url_for, jsonify
import records
import json
from flask_cors import CORS
import time
import random, string

app = Flask(__name__)
app.config.from_object(__name__)
CORS(app)

db = records.Database('sqlite:///tweets.db')

db.query('DROP TABLE if exists users')
db.query("""
create table users(
id		integer primary key asc,
username	varchar(20),
password		varchar(20),
handle		varchar(20),
token		varchar(20));
""")

db.query("insert into users (username, password, handle, token) values ('chris', 'pass', 'ccolli', 'AtoKen123')")

db.query('DROP TABLE if exists tweets')
db.query("""
create table tweets(
id		integer primary key asc,
text	varchar(140),
date	text,
userID 	integer NOT NULL,
	FOREIGN KEY (userID) REFERENCES users(id));
""")

db.query("insert into tweets (text, userID, date) values ('this is our tweet', 1, strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))")

@app.route('/')
def tweets():
	db = records.Database('sqlite:///tweets.db')
	rows = db.query("select * from tweets inner join users on tweets.userID=users.id")
	tweets = [{"id": row.id, "text": row.text, "username": row.username, "handle": row.handle, "date": row.date} for row in rows.all()]
	time.sleep(1)

	return jsonify(tweets)

@app.route('/tweet', methods=["POST"])
def tweet():
	db = records.Database('sqlite:///tweets.db')
	req_data = request.get_json()
	text = req_data['text']
	id = req_data['id']
	q = 'insert into tweets (text, userID, date) values ("{}", "{}", strftime("%Y-%m-%d %H:%M", "now", "localtime"))'.format(text, id)
	db.query(q)

	return redirect(url_for('home'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	db = records.Database('sqlite:///tweets.db')
	rows = db.query("select * from users")
	req_data = request.get_json()
	username = req_data['username']
	password = req_data['password']

	for row in rows:
		if username == row.username:
			if password == row.password:
				return jsonify({"id": row.id, "token": row.token, "handle": row.handle})
			
	return jsonify({"token": "incorrect"})

@app.route('/account', methods=['POST'])
def account():
	db = records.Database('sqlite:///tweets.db')

	token = ''
	for i in range(0,20):
		token = token + random.choice(string.ascii_letters + string.digits)

	req_data = request.get_json()
	username = req_data['username']
	password = req_data['password']
	handle = req_data['handle']
	db.query("insert into users (username, password, handle, token) values ('{}', '{}', '{}', '{}')".format(username, password, handle, token))

	rows = db.query("select * from users")
	print([row for row in rows.all()])

	return redirect(url_for('home'))

if __name__ == '__main__':
	app.run(debug=True)
