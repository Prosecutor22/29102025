import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, AlertCircle, Loader2, CheckCircle } from 'lucide-react'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock validation - in real app, call your login API
      if (data.email === 'demo@example.com' && data.password === 'password123') {
        setLoginSuccess(true)
      } else {
        setError('root', {
          type: 'manual',
          message: 'Invalid email or password. Try demo@example.com / password123',
        })
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'An error occurred during login',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (loginSuccess) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-card rounded-lg p-8 shadow-md border">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Login Successful!
            </h2>
            <p className="text-muted-foreground mb-6">
              Welcome back! You have been successfully logged in.
            </p>
            <Button asChild className="w-full">
              <Link to="/">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-card rounded-lg p-8 shadow-md border">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to your account to continue
          </p>
        </div>

        {/* Demo Credentials Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
          <p className="text-blue-700 text-sm">
            <strong>Demo Credentials:</strong><br />
            Email: demo@example.com<br />
            Password: password123
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-destructive text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="text-primary font-medium hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Error Message */}
          {errors.root && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4">
              <p className="text-destructive text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                {errors.root.message}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login