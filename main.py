from io import BytesIO
from flask import Flask, request, send_file
import json
from utils import ParseReqBody
from imageUtils import imgToArray
from imageUtils import Convolution3D, SaveImgFromArray, Filter3D
import numpy as np 
import shutil
import os 


matrix = np.array([[0,5,0], [5,10,5], [0,5,0]])


app = Flask(__name__)

@app.route("/upload", methods = ["POST"])
def upload():
    try:
        shutil.rmtree("images")
        os.mkdir("images")
        imageBytes = request.files["image"].read()
        img = imgToArray(imageBytes)
        img = Filter3D(img, matrix)
        imgpath = SaveImgFromArray(img)
        return send_file(imgpath, mimetype="image/png", download_name="result.png")
    except Exception as ex:
        print(ex)
        return "No file provided, or invalid file format, ensure file is passed with key: 'image'"

    


if __name__ == "__main__":
    app.run(debug=True, port=5000)
