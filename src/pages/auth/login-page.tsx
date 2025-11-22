"use client";

import { type FormEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useLoginMutation } from "@/store/api/apiSlice";
import { setCredentials } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState<string>("");

  // Determine redirect path based on URL
  const isAdminLogin = location.pathname.includes('/admin/login');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalError("");

    try {
      const result = await login({ email, password }).unwrap();
      
      // Set credentials in Redux store
      dispatch(setCredentials(result));
      
      // Navigate based on user role or URL path
      const finalPath = result.user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard';
      navigate(finalPath, { replace: true });
    } catch (err: any) {
      setLocalError(err?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 items-center justify-center min-h-screen p-6")}>
      <Card className="overflow-hidden w-full max-w-4xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your {isAdminLogin ? 'Admin' : 'User'} account
                </p>
              </div>

              {localError && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20">
                  {localError}
                </div>
              )}

              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>

              {/* Password Field */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href={isAdminLogin ? "/admin/forgot-password" : "/user/forgot-password"}
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>

              {/* Submit Button */}
              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Continue"}
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>

              {/* Social Buttons */}
              <Field className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button" disabled={isLoading}>
                  <span className="sr-only">Login with Apple</span>
                  Apple
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                  <span className="sr-only">Login with Google</span>
                  Google
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                  <span className="sr-only">Login with Meta</span>
                  Meta
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <a
                  href={isAdminLogin ? "/admin/register" : "/user/register"}
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* Right side image */}
          <div className="bg-muted relative hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-2xl font-bold mb-4">Demo Credentials</h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold">Admin:</p>
                    <p>admin@gmail.com</p>
                    <p>Password: 123456</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">User:</p>
                    <p>user@gmail.com</p>
                    <p>Password: 123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Description */}
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
