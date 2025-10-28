import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { UserPlus, LogIn, Shield, Users, Database } from 'lucide-react'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to UserApp
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A modern user registration system built with React, NestJS, and MongoDB.
          Sign up today to get started with your account.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link to="/signup" className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5" />
              <span>Get Started</span>
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/login" className="flex items-center space-x-2">
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need for secure user management
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Secure Authentication
            </h3>
            <p className="mt-2 text-muted-foreground">
              Password hashing with bcrypt and comprehensive validation
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              User Management
            </h3>
            <p className="mt-2 text-muted-foreground">
              Complete user registration and profile management system
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              MongoDB Integration
            </h3>
            <p className="mt-2 text-muted-foreground">
              Robust data storage with MongoDB and Mongoose ODM
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-12 border-t">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Built With Modern Technology
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Frontend:</span>
              <span>React + TypeScript + Vite + Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Backend:</span>
              <span>NestJS + MongoDB + Mongoose</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Features:</span>
              <span>React Query + React Hook Form + Validation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home