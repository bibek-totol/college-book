"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import authBackground from "@/assets/auth-background.jpg";
import { signIn } from "next-auth/react";
import { Spinner } from "@radix-ui/themes";
import { toast } from "sonner";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });

    setLoading(false);

    if (result?.error) {
      toast?.error("Login failed: " + result.error);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      toast?.success("Registration successful! Logging you in...");

      const result = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/",
      });

      if (result?.error) {
        toast?.error("Auto login failed: " + result.error);
      }
    } else {
      const data = await res.json();
      toast?.error(data.error || "Registration failed");
    }

    setLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    signIn(provider);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-20 md:mt-10 bg-gradient-background relative overflow-hidden">
      <img
        src={authBackground.src}
        alt="Auth Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-md" />

      <Card className="w-full max-w-md relative z-10 shadow-soft border-2 border-white animate-scale-in">
        <CardHeader className="space-y-1 text-center pb-6">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to continue your journey
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-300">
              <TabsTrigger value="login" className="transition-all">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="transition-all">
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 animate-fade-in">
              <div className="space-y-4">
                <SocialButtons onSocialLogin={handleSocialLogin} />

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground font-extrabold">
                      or continue with email
                    </span>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="transition-all focus:shadow-soft"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="transition-all focus:shadow-soft"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline transition-all"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-gradient-to-r from-primary to-accent hover:shadow-hover transition-all flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner className="w-6 h-6" />{" "}
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <span>Sign In</span>
                    )}
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="register" className="space-y-4 animate-fade-in">
              <div className="space-y-4">
                <SocialButtons onSocialLogin={handleSocialLogin} />

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      or continue with email
                    </span>
                  </div>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="transition-all focus:shadow-soft"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="transition-all focus:shadow-soft"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="transition-all focus:shadow-soft"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-gradient-to-r from-primary to-accent hover:shadow-hover transition-all flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner className="w-6 h-6" />{" "}
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </Button>

                  <p className="text-xs font-bold text-center text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="text-destructive font-stretch-75% text-shadow-lg hover:underline font-bold"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-destructive font-stretch-75% text-shadow-lg hover:underline font-bold"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const SocialButtons = ({
  onSocialLogin,
}: {
  onSocialLogin: (provider: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={() => onSocialLogin("google")}
        className="transition-all hover:bg-accent/10 hover:border-primary/50 hover:scale-105"
      >
        {/* Google SVG */}
        Google
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => onSocialLogin("github")}
        className="transition-all hover:bg-accent/10 hover:border-primary/50 hover:scale-105"
      >
        {/* GitHub SVG */}
        GitHub
      </Button>
    </div>
  );
};

export default Auth;
