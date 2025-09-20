# 🔗 URL Shortener

A fullstack URL shortener application that converts long URLs into short, shareable links.  
Built with **Node.js, Express.js, MongoDB, React**.

---

## 🚀 Features
- Shorten long URLs into custom short links.
- Redirect short URLs to original URLs.
- Track number of clicks.
- REST API for URL shortening.
- Responsive frontend interface.

---

## 🛠️ Tech Stack
**Frontend:** React, HTML, CSS, Tailwind  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Other Tools:** Postman, Git, GitHub  

---

## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/Satyam23092003/220102584.git
cd 220102584
```

### 2. Backend Setup
```bash
cd server
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

### 4. Environment Variables
Create a `.env` file in `server/` with the following:
```
PORT = <your_react_app_port>  #eg.5173 
MONGODB_URi = <your_mongoDb_database_string>
```

## 📸 Screenshots

### Homepage
![Homepage](./client/src/assets/pic1.jpg)

### Statistics Page
![Statistics Page](./client/src/assets/shortlink.jpg)

---

## 📡 API Endpoints

### 1. Shorten URL
`POST /shorturls`
```json
{
  "url": "https://www.example.com",
  "validity": 10, // in minutes (eg.10)
  "shortcode": "mycode"
}
```

## Shorten URL API TESTING
![Shorten URL API TESTING](./client/src/assets/api1.jpg)

### 2. Redirect
`GET /shorturls/:shortcode`

## Get Original URL API TESTING
![Get Original URL API TESTING](./client/src/assets/api2.jpg)
---
