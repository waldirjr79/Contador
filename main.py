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
    app.run(debug=True, host='192.168.1.16', port='8501')