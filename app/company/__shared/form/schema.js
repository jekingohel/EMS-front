import { z } from "zod"
export const formSchema = z.object({
    Name: z.string({required_error: 'Company Name is required'}).min(2).max(50),
    Email: z.string({required_error: 'Company Email is required'}).email("Please enter a valid email address.")
})