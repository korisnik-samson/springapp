import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Users, Calendar } from "lucide-react"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1 content-center">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Manage Projects with Ease
                                </h1>
                                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                                    ProjectPro helps teams collaborate, track progress, and deliver projects on time.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg">Get Started</Button>
                                <Button variant="outline" size="lg" className='text-primary bg-background'>Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-primary tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Key Features
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="rounded-full bg-primary/10 p-4 mb-4">
                                    <CheckCircle className="h-8 w-8 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Task Management</h3>
                                <p className="text-muted-foreground">Create, assign, and track tasks effortlessly</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="rounded-full bg-primary/10 p-4 mb-4">
                                    <Users className="h-8 w-8 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Team Collaboration</h3>
                                <p className="text-muted-foreground">Work together seamlessly with your team</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="rounded-full bg-primary/10 p-4 mb-4">
                                    <Calendar className="h-8 w-8 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Project Timeline</h3>
                                <p className="text-muted-foreground">Visualize project progress and deadlines</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                                    Ready to streamline your projects?
                                </h2>
                                <p className="mx-auto max-w-[500px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of teams already using ProjectPro to deliver successful projects.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-3 mt-3">
                                <form className="flex space-x-2">
                                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email"/>
                                    <Button type="submit">Sign Up</Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    Start your free trial. No credit card required.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}