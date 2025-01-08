// Firestore Security Rules
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /tests/{testId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.role == "admin";
    }
    match /results/{resultId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.auth.token.role == "student";
    }
  }
}
