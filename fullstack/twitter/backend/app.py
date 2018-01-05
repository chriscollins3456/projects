from flask import Flask, render_template, request, redirect
import records
import json
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = records.Database('sqlite:///tweets.db')

db.query('DROP TABLE if exists tweets')
db.query("""
create table tweets(
id		integer primary key asc,
text	varchar(140),
username	varchar(140),
date	text);
""")

db.query("insert into tweets (text, username, date) values ('this is our tweet', 'chris', strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))")
db.query("insert into tweets (text, username, date) values ('another tweet', 'chris2', strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))")

@app.route('/')
def home():
	db = records.Database('sqlite:///tweets.db')
	rows = db.query("select * from tweets")

	tweets = [{"id": row.id, "text": row.text, "username": row.username, "date": row.date} for row in rows.all()]
	import time
	time.sleep(1)

	return jsonify(tweets)

if __name__ == '__main__':
	app.run(debug=True)

@app.route('/tweet', methods=["POST"])
def tweet():
	db = records.Database('sqlite:///tweets.db')
	q = "insert into tweets (text, username, date) values ('" + request.form['text'] + "', '" + request.form['username'] + "'," + "strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))"
	db.query(q)
	return redirect('/')
