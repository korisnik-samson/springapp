import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                <Image src='/images/sign-on.png' alt='background-image' fill />
            </aside>
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <SignUp />
            </main>
        </div>
    </section>
}