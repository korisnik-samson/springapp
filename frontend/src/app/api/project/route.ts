import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch('http://localhost:8080/api/project', {
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json();

        return NextResponse.json({ data })

    } catch (error: any) {
        throw new Error(error)
    }
}