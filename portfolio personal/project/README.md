# Adhithya Jayakumar - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Node.js backend.

## Features

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Node.js with Express for contact form handling
- **Responsive Design**: Works on all devices
- **Interactive Timeline**: Beautiful education timeline
- **Contact Form**: Functional contact form with backend storage
- **Smooth Animations**: CSS animations and transitions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Adhithya303/portfolio
cd portfolio
```

2. Install dependencies
```bash
npm install
```

### Running the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```
This will start both the frontend (port 5173) and backend server (port 3001).

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

### Building for Production
```bash
npm run build
```

## Backend API Endpoints

- `POST /api/contact` - Submit contact form (stores in MongoDB)
- `GET /api/contacts` - Get all contact submissions from MongoDB (admin)
- `GET /api/health` - Health check with database status

## Database Configuration

Contact form submissions are stored in MongoDB Atlas. Each submission includes:
- Name, email, subject, message
- Timestamp and formatted date/time
- MongoDB ObjectId

### Environment Variables
Create a `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
PORT=3000
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, CORS
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom animations

## Contact

- **Email**: adhithyajayakumar3@gmail.com
- **Phone**: +91 8807303793
- **Location**: Coimbatore, Tamil Nadu
- **GitHub**: [https://github.com/Adhithya303](https://github.com/Adhithya303)
- **LinkedIn**: [https://www.linkedin.com/in/adhithya-j-44b100326/](https://www.linkedin.com/in/adhithya-j-44b100326/)