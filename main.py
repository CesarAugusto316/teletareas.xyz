from flask import render_template, request, url_for
from flask import Flask

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')