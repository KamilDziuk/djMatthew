
# 🎧 djMatthew

![presentation](/presentation.gif)

**djMatthew** is a modern website for DJ Matthew — built with **React**, **CSS**, and **JavaScript**, powered by **Vite** on the frontend and a simple **Node.js** backend for email handling via **Nodemailer**.

## Technologies

### Frontend (Client)

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [React Router DOM](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Font Awesome](https://fontawesome.com/)

### Backend (Server)

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Nodemailer](https://nodemailer.com/about/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [CORS](https://www.npmjs.com/package/cors)

---

##  Project Structure

```
djMatthew/
├── client/              # Frontend: React + Vite
│   ├── src/
│   ├── public/
│   └── package.json
├── api/              # Backend: Node.js + Express
│   ├── contact.js
│   └── package.json
└── README.md
```

---

##  Installation (Local)

### Prerequisites

* Node.js >= 18.x
* npm >= 9.x

### Clone the repository

```bash
git clone https://github.com/KamilDziuk/djMatthew.git
cd djMatthew
```

---

### Install & Run the Backend (Server)

Go to the `api/` directory:

```bash
cd api
```

Install dependencies:

```bash
npm ci --omit=dev    
```

Create a `.env` file in `server/` with the following variables:

```env
GOOGLE_APP_PASSWORD= Your Google generated App Password,
USER= Your Gmail
PORT= Your port
```

You can generate a **Google App Password** here: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

Start the server:

```bash
node contact.js
```
In case of local server backend will run for example on port 5000: [http://localhost:5000](http://localhost:5000)
```
### Install & Run the Frontend (Client)

Open a new terminal and go to the `client/` directory:

```bash
cd client
```

Install dependencies:

```bash
npm install -D @vitejs/plugin-react
```

Start the development server:

```bash
npm run dev
```
##  Features

Responsive, modern website with animations and routing
Font Awesome icons
Contact form sending emails via Nodemailer
Separate backend with environment variable support and CORS

##  Look
 [djMatthew](https://www.matthew-dj.com/)
