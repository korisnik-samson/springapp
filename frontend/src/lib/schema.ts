"use client"

import { z } from "zod"

export const ProjectSchema = z.object({
    projectName: z.string().min(2, { message: 'Enter a Project Name' }).max(50),
    projectDescription: z.string().min(2, { message: 'Enter a Project Description' }).max(500),

    // optional fields
    projectManager: z.object({
        id: z.number(),
        username: z.string(),
        email: z.string().email(),
    }).optional(),

    projectStartDate: z.date(),
    projectEndDate: z.date(),
    projectStatus: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED']),
    
    // optional fields
    projectMembers: z.array(z.object({
        id: z.number(),
        username: z.string(),
        email: z.string().email(),
    })).optional(),
})
