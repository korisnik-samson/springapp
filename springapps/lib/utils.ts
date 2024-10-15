import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Md5 } from "ts-md5"


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getProjectProgress(startDateStr: string, endDateStr: string): number {
    const today = new Date();

    // Parse date strings into Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Ensure today is within the project timeframe
    if (today < startDate || today > endDate) return today < startDate ? 0 : 100;

    const totalDuration = endDate.getTime() - startDate.getTime();
    const timeElapsed = today.getTime() - startDate.getTime();

    return Math.round((timeElapsed / totalDuration) * 100);
}

export function getInitials(name: string, lastName: string): string {
    return `${name.charAt(0)}${lastName.charAt(0)}`;
}

export function checkPassword(password: string, providedHash: string): boolean {
    const hashedPassword = Md5.hashStr(password);

    return hashedPassword === providedHash;
}