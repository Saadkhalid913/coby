from flask import Flask, request, send_file
import json
from utils import ParseReqBody
from imageUtils import imgToArray



app = Flask(__name__)

@app.route("/upload", methods = ["POST"])
def upload():
    try:
        imageBytes = request.files["image"].read()
        imgToArray(imageBytes)
        raise Exception
    except Exception:
        return "No file provided, or invalid file format, ensure file is passed with key: 'image'"

    


if __name__ == "__main__":
    app.run(debug=True, port=3000)
