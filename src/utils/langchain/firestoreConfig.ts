import admin from "firebase-admin"


export const firestoreConfig = {
    projectId: process.env["FIREBASE_PROJECT_ID"]!,
    credential: admin.credential.cert({
        projectId: process.env["FIREBASE_PROJECT_ID"]!,
        privateKey: process.env["FIREBASE_PRIVATE_KEY"]!,
        clientEmail: process.env["FIREBASE_CLIENT_EMAIL"]!,
    }),
}
