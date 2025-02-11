# Chat Room

A real-time chat application built with **Go (Golang)** for the backend and **React (Vite)** for the frontend. The backend handles multiple users without a database, and the frontend provides an interactive UI.

## Features
- 🗨️ Real-time chat messaging
- ⚡ WebSocket-based communication
- 📡 Go backend with concurrency support
- 🎨 React frontend with Vite
- 🚀 Deployable on **Render**

## Project Structure
```
chat-room/
│   README.md       # Project documentation
│   Dockerfile      # Docker configuration
│   go.mod          # Go module dependencies
│   go.sum          # Dependency checksum
│   main.go         # Entry point of the Go backend
│
├───handlers        # WebSocket handlers
│       connections.go
│       messages.go
│
├───logs            # Logs storage (if enabled)
│
├───utils           # Utility functions
│
└───frontend        # React-based frontend
```

## Installation

### Prerequisites
Ensure you have the following installed:
- **Go** (>= 1.21)
- **Node.js** (>= 18)
- **Docker** (optional, for containerization)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/bot69dude/chat-room.git
   cd chat-room/backend
   ```
2. Install dependencies:
   ```sh
   go mod tidy
   ```
3. Run the backend server:
   ```sh
   go run main.go
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

### **Deploying Backend on Render**
1. Push your code to GitHub
2. Go to **Render.com** → Create a new **Web Service**
3. Select **Go** as the language
4. Set the **Build Command**:
   ```sh
   go build -o chat-room
   ```
5. Set the **Start Command**:
   ```sh
   ./chat-room
   ```
6. Deploy and get the backend URL

### **Deploying Frontend on Render**
1. Go to **Render.com** → Create a new **Static Site**
2. Set **Build Command**:
   ```sh
   npm run build
   ```
3. Set **Publish Directory** to:
   ```sh
   dist
   ```
4. Deploy and update the backend URL in `frontend/.env`:
   ```sh
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

## Troubleshooting

### "Uncaught ReferenceError: process is not defined"
📌 If you get this error in Vite, replace **`process.env`** with `import.meta.env`:
```ts
const API_URL = import.meta.env.VITE_API_URL;
```

## License
This project is licensed under the **MIT License**.

---

🚀 Happy Coding! 🎉
