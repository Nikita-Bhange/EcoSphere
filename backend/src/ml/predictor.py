# import json
# import numpy as np
# from tensorflow.keras.models import load_model
# from PIL import Image
# from src.ml.category_info import CATEGORY_INFO

# model = load_model("src/ml/model.h5")

# with open("src/ml/labels.json", "r") as f:
#     labels = json.load(f)

# def predict_image(image_file):
#     # Process image
#     img = Image.open(image_file).convert("RGB")
#     img = img.resize((224, 224))
#     img = np.array(img) / 255.0
#     img = np.expand_dims(img, axis=0)

#     preds = model.predict(img)
#     predicted_index = int(np.argmax(preds[0]))
#     confidence = float(np.max(preds[0]))

#     predicted_class = labels[str(predicted_index)]
#     info = CATEGORY_INFO.get(predicted_class, {})

#     return {
#         "class": predicted_class,
#         "confidence": confidence,
#         "type": info.get("type"),
#         "recyclable": info.get("recyclable"),
#         "tips": info.get("tips")
#     }

