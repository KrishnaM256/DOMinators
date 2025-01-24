from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.models import load_model # type: ignore
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

# Load the trained model
model = load_model('reusable_cup_detector.h5')

# Preprocessing function
def preprocess_image(image, target_size=(224, 224)):
    image = image.resize(target_size)
    image = np.array(image) / 255.0  # Normalize
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

@app.route('/predict', methods=['POST'])
def predict():
    # Check if the request contains an image file
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    try:
        # Preprocess the image
        image = Image.open(file)
        processed_image = preprocess_image(image)

        # Predict using the model
        prediction = model.predict(processed_image)
        result = 'Reusable' if prediction[0][0] >= 0.5 else 'Non-Reusable'

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=6000)
