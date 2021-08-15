from io import BytesIO
from flask import Flask, request, send_file
import json

from werkzeug.datastructures import FileStorage
from utils import ParseReqBody
from imageUtils import imgToArray
from imageUtils import Convolution3D, SaveImgFromArray, Filter3D, Greyscale
import numpy as np 
import shutil
import os 
from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app)

@app.route("/upload", methods = ["POST"])
@cross_origin()
def upload():
    # try:
        shutil.rmtree("images")
        os.mkdir("images")
        matrix = parseMatrix(request)
        img = parseImage(request)
        mode = request.form["mode"].lower()

        if mode == "convolution":
            img = Convolution3D(img, matrix)
        elif mode == "filter":
            img = Filter3D(img, matrix)
        elif mode == "greyscale":
            img = Greyscale(img)
        else:
            return Greyscale(img)

        imgpath = SaveImgFromArray(img)
        return send_file(imgpath, mimetype="image/png", download_name="result.png")
    # except Exception as ex:
    #     print(ex)
    #     return {"error": "There was an error"}

    
def parseMatrix(request):
    rawMatrix = list(map(int, request.form["matrix"].split(",")))
    matrixSize = int( request.form["size"])
    matrix = np.array(rawMatrix).reshape((matrixSize , -1))
    assert matrix.shape[1] == matrix.shape[0]
    return matrix 

def parseImage(request):
    imageBytes = request.files["image"].read()
    if len(imageBytes) > 1000000:
        raise Exception
    img = imgToArray(imageBytes)
    return img 

if __name__ == "__main__":
    app.run(debug=True, port=5000)
