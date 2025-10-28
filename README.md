# IA03 – User Registration API with React Frontend

A complete full-stack application featuring user registration functionality built with **NestJS** (backend) and **React** (frontend). This project demonstrates modern web development practices with TypeScript, MongoDB, and responsive design.

## 🚀 Features

### Backend (NestJS)
- ✅ **REST API** with NestJS and TypeScript
- ✅ **MongoDB** integration with Mongoose ODM
- ✅ **User Registration** endpoint with validation
- ✅ **Password Hashing** using bcrypt
- ✅ **Email Uniqueness** validation
- ✅ **CORS** enabled for frontend communication
- ✅ **Environment Configuration** with .env files
- ✅ **Error Handling** with proper HTTP status codes

### Frontend (React)
- ✅ **React + TypeScript** with Vite build tool
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **React Router** for navigation (Home, Login, Sign Up)
- ✅ **React Hook Form** with validation
- ✅ **TanStack Query** (React Query) for API mutations
- ✅ **Loading States** and error handling
- ✅ **Accessible UI** with proper form validation feedback
- ✅ **Modern Icons** with Lucide React

## 📁 Project Structure

```
29102025/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── user/           # User module
│   │   │   ├── schemas/    # MongoDB schemas
│   │   │   ├── dto/        # Data transfer objects
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env                # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Base UI components
│   │   │   └── Navbar.tsx
│   │   ├── pages/          # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   └── SignUp.tsx
│   │   ├── services/       # API services
│   │   │   └── api.ts
│   │   ├── lib/            # Utility functions
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd 29102025
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Environment Configuration
Create a `.env` file in the backend directory:
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/user-registration
JWT_SECRET=your-super-secret-jwt-key
BCRYPT_SALT_ROUNDS=10
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user-registration
```

#### Start MongoDB (if using local installation)
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
# or
brew services start mongodb/brew/mongodb-community
```

#### Run Backend Development Server
```bash
npm run start:dev
```

The backend API will be available at: `http://localhost:3000/api`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd ../frontend
npm install
```

#### Run Frontend Development Server
```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## 📡 API Endpoints

### POST /api/user/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "user": {
    "id": "654321098765432109876543",
    "email": "user@example.com",
    "createdAt": "2025-10-29T12:00:00.000Z"
  }
}
```

**Error Response (409 - Conflict):**
```json
{
  "statusCode": 409,
  "message": "User with this email already exists",
  "error": "Conflict"
}
```

**Error Response (400 - Validation Error):**
```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be at least 6 characters long"
  ],
  "error": "Bad Request"
}
```

## 🔧 Development

### Backend Development
```bash
cd backend

# Development with hot reload
npm run start:dev

# Build for production
npm run build

# Run tests
npm test

# Linting
npm run lint
```

### Frontend Development
```bash
cd frontend

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🌐 Production Deployment

### Backend Deployment

#### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-secret
BCRYPT_SALT_ROUNDS=12
```

#### Build and Deploy
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend Deployment

#### Build for Production
```bash
cd frontend
npm run build
```

The `dist/` folder contains the production-ready files that can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Upload the `dist` contents
- **Traditional Hosting**: Upload `dist` contents to your web server

### Deployment Platforms

#### Backend Options:
- **Heroku**: Easy deployment with MongoDB Atlas
- **Railway**: Modern platform with automatic deployments
- **DigitalOcean App Platform**: Scalable hosting
- **AWS/Google Cloud/Azure**: Enterprise solutions

#### Frontend Options:
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting for static sites
- **Cloudflare Pages**: Fast global CDN

## 🧪 Testing the Application

### 1. Registration Flow
1. Navigate to `http://localhost:5173`
2. Click "Get Started" or "Sign Up"
3. Fill in the registration form:
   - Email: `test@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
4. Submit the form
5. Verify success message and user creation

### 2. Validation Testing
- Try registering with an invalid email
- Try using a password shorter than 6 characters
- Try registering with the same email twice
- Verify error messages display correctly

### 3. Login Page (Mock)
- Navigate to the Login page
- Use demo credentials:
  - Email: `demo@example.com`
  - Password: `password123`
- Test form validation and UI feedback

## 🔒 Security Features

- **Password Hashing**: Passwords are hashed using bcrypt with configurable salt rounds
- **Input Validation**: Email format and password length validation
- **CORS Protection**: Configured to allow specific frontend origins
- **Environment Variables**: Sensitive data stored in environment variables
- **Error Handling**: Proper error responses without exposing sensitive information

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Clear error messages for users
- **Success States**: Confirmation messages for successful actions
- **Accessible Forms**: Proper labels, ARIA attributes, and keyboard navigation
- **Modern Design**: Clean, professional interface with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/your-repo/issues) section
2. Create a new issue with detailed information
3. Include error messages, browser/OS information, and steps to reproduce

## 📚 Learn More

- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

---

**Built with ❤️ using modern web technologies**