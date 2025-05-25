import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import pickle
# Step 1: Load the dataset
df = pd.read_csv("b2c_transaction_data.csv")

# Step 2: Select relevant columns
df = df[["Product", "Category"]]

# Step 3: Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    df["Product"], df["Category"], test_size=0.2, random_state=42
)

# Step 4: Vectorize the text using TF-IDF
vectorizer = TfidfVectorizer(max_features=5000)  # Limit to top 5000 features
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Step 5: Train a Logistic Regression model
model = LogisticRegression()
model.fit(X_train_tfidf, y_train)

# Step 6: Evaluate the model
y_pred = model.predict(X_test_tfidf)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Step 7: Test the model on new product names
new_product = ["Smartphone"]
new_product_tfidf = vectorizer.transform(new_product)
predicted_category = model.predict(new_product_tfidf)
print(f"Predicted Category for '{new_product[0]}': {predicted_category[0]}")

with open("nlp_model.pkl", "wb") as f:
    pickle.dump(model, f)
