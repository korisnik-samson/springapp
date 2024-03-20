"use client"

import { z } from "zod"

export const projectSchema = z.object({
    projectName: z.string().min(2).max(50),
    projectDescription: z.string().min(2).max(500),
    projectManager: z.object({
        id: z.number(),
        username: z.string(),
        email: z.string().email(),
    }),
    projectStartDate: z.date(),
    projectEndDate: z.date(),
    projectStatus: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED']),
    projectMembers: z.array(z.object({
        id: z.number(),
        username: z.string(),
        email: z.string().email(),
    })),
})
