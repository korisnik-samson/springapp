"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { User } from "@/types";
import { getUserByEmail } from "@/lib/endpoints";
import { checkPassword } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [user, setUser] = useState<User>()

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email || !password) {
            // set toast here
            setError("Please fill in all fields.")
            return
        }

        setUser(await getUserByEmail(email))

        console.log({ user })

        if (!user) {
            setError("User not found.")
            return
        }

        console.log(checkPassword(password, user.password))

        // Here you would typically handle the login logic
        console.log("Login attempt with:", { email, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to access Intelli
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="user@domain.com"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button type="submit" className="w-full">
                            <Lock className="mr-2 h-4 w-4" /> Sign In
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col space-y-2">
                    <Button variant="link" asChild className="w-full">
                        <Link href="/forgot-password">Forgot password?</Link>
                    </Button>
                    <div className="text-sm text-center text-gray-500 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}