from flask import Flask, render_template, request, redirect
import records
import json
from flask import jsonify

app = Flask(__name__)

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

@app.route('/')
def home():
    db = records.Database('sqlite:///tweets.db')
    rows = db.query("select * from tweets")

    return render_template('index.html', tweets=db.query("select * from (select * from tweets ORDER BY id DESC)"))

if __name__ == '__main__':
  app.run(debug=True)

@app.route('/tweet', methods=["POST"])
def tweet():
    db = records.Database('sqlite:///tweets.db')
    q = "insert into tweets (text, username, date) values ('" + request.form['text'] + "', '" + request.form['username'] + "'," + "strftime('%Y-%m-%d %H:%M', 'now', 'localtime'))"
    db.query(q)
    return redirect('/')
