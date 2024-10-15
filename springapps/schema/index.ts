import { z } from "zod";

export const projectSchema = z.object({
    projectName: z.string().min(1, "Project name is required"),
    projectDescription: z.string().min(1, "Project description is required"),

    projectStartDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start date",
    }),

    projectEndDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid end date",
    }),

    projectStatus: z.enum(["Not Started", "In Progress", "Completed"]),
    projectManagerId: z.string().min(1, "Project manager ID is required"),
    isDeleted: z.boolean().default(false),
});

// @ts-ignore
export const taskFormSchema = z.object({
    title: z.string()
        .min(1, "Title is required")
        .max(100, "Title must be 100 characters or less"),

    description: z.string()
        .min(1, "Description is required")
        .max(500, "Description must be 500 characters or less"),

    status: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED", "ON_HOLD"])
        .default("NOT_STARTED"),

    priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"])
        .default("MEDIUM"),

    startDate: z.coerce.date()
        .min(new Date("2000-01-01"), "Start date must be after 2000-01-01")
        .max(new Date("2100-01-01"), "Start date must be before 2100-01-01"),

    dueDate: z.coerce.date()
        .min(new Date("2000-01-01"), "Due date must be after the start date"),

    estimatedHours: z.number()
        .positive("Estimated hours must be positive")
        .max(10000, "Estimated hours must be 10000 or less"),

    actualHours: z.number()
        .nonnegative("Actual hours must be zero or positive")
        .max(10000, "Actual hours must be 10000 or less")
        .optional(),

    isDeleted: z.boolean()
        .default(false)
})