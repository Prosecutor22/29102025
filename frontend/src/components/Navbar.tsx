import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { UserPlus, LogIn, Home } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl">UserApp</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button
              variant={location.pathname === '/login' ? 'default' : 'ghost'}
              asChild
            >
              <Link to="/login" className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
            
            <Button
              variant={location.pathname === '/signup' ? 'default' : 'outline'}
              asChild
            >
              <Link to="/signup" className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar