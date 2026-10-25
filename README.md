# Flavorly — Food Recipe App

## Run locally
1. Download and extract `food_recipe_app.zip`.
2. Open `index.html` in a modern browser. For the best local development experience, use VS Code with the Live Server extension.
3. The app is locked behind the login/register screen. Choose **Create account**, enter a name, email, and a demo password of at least 6 characters, or log in with an existing local demo account.
4. After successful registration or login, the full recipe app unlocks. Logging out returns to the login screen and hides all app features.

## Files
- `index.html` — page structure and login/register/recipe modals
- `style.css` — responsive styling
- `script.js` — login-gated recipe search, filters, demo authentication, saved collection, ratings, recipe submission

## Important security note
This is a front-end demonstration. Passwords are stored in browser localStorage as plain text, and users can alter localStorage from developer tools. Do not use real passwords or sensitive information. A production app needs a backend, password hashing, server-side validation, secure sessions, and a database. Recipe data and account data are stored only in the current browser; they do not sync between devices. Images load from Unsplash and Google Fonts require internet access.
