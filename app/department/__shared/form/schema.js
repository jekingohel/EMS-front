import { z } from "zod"
export const formSchema = z.object({
    Name: z.string({required_error: 'Department Name is required'}).min(2).max(50),
})