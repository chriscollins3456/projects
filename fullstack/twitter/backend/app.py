from flask import Flask, render_template, request, redirect, url_for, jsonify
import records
import json
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

db = records.Database('sqlite:///tweets.db')

db.query('DROP TABLE if exists tweets')
db.query("""
create table tweets(
id		integer primary key asc,
text	varchar(140),
username	varchar(140),
handle		varchar(140),
date	text);
""")

db.query("insert into tweets (text, username, handle, date) values ('this is our tweet', 'Chris Collins', 'ccolli13', strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))")
db.query("insert into tweets (text, username, handle, date) values ('another tweet', 'Chris Collins', 'ccolli13', strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))")

@app.route('/')
def home():
	db = records.Database('sqlite:///tweets.db')
	rows = db.query("select * from tweets")
	tweets = [{"id": row.id, "text": row.text, "username": row.username, "handle": row.handle, "date": row.date} for row in rows.all()]
	time.sleep(1)

	return jsonify(tweets)

@app.route('/tweet', methods=["POST"])
def tweet():
	db = records.Database('sqlite:///tweets.db')
	req_data = request.get_json()
	text = req_data['text']
	user = req_data['user']
	handle = req_data['handle']
	q = 'insert into tweets (text, username, handle, date) values ("{}", "{}", "{}", strftime("%Y-%m-%d %H:%M", "now", "localtime"))'.format(text, user, handle)
	db.query(q)

	return redirect(url_for('home'))

if __name__ == '__main__':
	app.run(debug=True)
