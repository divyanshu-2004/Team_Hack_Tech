import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load the dataset
df = pd.read_excel("product_research_large_dataset.xlsx")

# Step 2: Preprocess the data
df = df.dropna(subset=["project", "product"])
df["project"] = df["project"].str.lower()

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    df["project"], df["product"], test_size=0.2, random_state=42
)

# Step 3: Vectorize the text
vectorizer = TfidfVectorizer(max_features=5000)
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Step 4: Train the model
model = LogisticRegression()
model.fit(X_train_tfidf, y_train)

# Step 5: Evaluate the model
y_pred = model.predict(X_test_tfidf)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Step 6: Test the model
new_project = ["implement innovative methodologies"]
new_project_tfidf = vectorizer.transform(new_project)
predicted_product = model.predict(new_project_tfidf)
print(f"Predicted Product for '{new_project[0]}': {predicted_product[0]}")