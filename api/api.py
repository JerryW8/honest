from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=["GET"])
def api():
    return {
        'userid': foo(),
        'title': 'Test',
        'completed': True
    }

def foo():
    return 2

app.run(debug=True)