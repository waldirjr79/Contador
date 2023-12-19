from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/adm')
def adm():
    return render_template('adm.html')

@app.route('/contador')
def contador():
    return render_template('contador.html')



if __name__ == '__main__':
    app.run(debug=True, host='10.0.3.101', port='8501')