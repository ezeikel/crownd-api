/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const fs = require("fs");
const writeFile = fs.writeFile;
const defaults = require("../process.defaults");

// variables needed by the server
const keys = [
  "APP_SECRET",
  "FRONTEND_URL",
  "PORT",
  "STRIPE_SECRET",
  "MAIL_HOST",
  "MAIL_PORT",
  "MAIL_USER",
  "MAIL_PASS",
];

let contents =
  "# This file was generated by ./scripts/process.env.generator.js";

keys.forEach((key) => {
  let val = defaults[key];

  if (typeof val === "string") {
    val = `"${val}"`;
  }
  contents += `\n${key}=${val}`;
});

writeFile("./.env", contents, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(".env generated");
});
