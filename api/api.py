from flask import Flask
import wikipedia as wp
import xlrd
from nltk.stem import PorterStemmer

app = Flask(__name__)

@app.route('/summary/<topic>', methods=["GET"])
def getSummary(topic):
    # summary of a particular ingredient
    summ = wp.summary(topic, sentences = 2)

    return {
        "summary": summ
    }

@app.route('/carcinogen/<ingredient>', methods=["GET"])
def searchcarcin(ingredient):
    # check if an ingredient can cause cancer
    # there's a list of groups too, if u wanna show that in the app but it should be fine without it
    
    ps = PorterStemmer()

    wb = xlrd.open_workbook('agentlist.xls')
    st = wb.sheet_by_index(0)

    agentlist = []
    groups = []
    for i in range(2, 1092):
        word = st.cell_value(i, 1)
        if ',' in word:
            loc = word.find(',')
            word = word[:loc]
        if '(' in word:
            loc = word.find('(')
            word = word[:loc]

        agentlist.append(ps.stem(word))
        groups.append(st.cell_value(i, 2))

    ingred = ps.stem(ingredient)
    if ingred in agentlist:
        return {
            "carcinogen": True
        }
    else:
        return {
            "carcinogen": False
        }


app.run(debug=True)