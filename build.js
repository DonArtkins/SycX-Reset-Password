const fs = require("fs");
const path = require("path");
require("dotenv").config();

const htmlFile = path.join(__dirname, "public", "index.html");

let content = fs.readFileSync(htmlFile, "utf8");

const envVariables = {
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
};

Object.keys(envVariables).forEach((key) => {
  const regex = new RegExp(`\\$${key}`, "g");
  content = content.replace(regex, envVariables[key]);
});

fs.writeFileSync(htmlFile, content);

console.log("Environment variables injected into index.html");
