import { z } from "zod"
export const formSchema = z.object({
    firstname: z.string({ required_error: 'First Name is required' }).min(2).max(50),
    middlename: z.string(),
    lastname: z.string({ required_error: 'Last Name is required' }).min(2).max(50),
    companyId: z.string({ required_error: 'Company is required' }),
    departmentId: z.string({ required_error: 'Department is required' }),
    phone: z.string({ required_error: 'Phone is required' }).min(2).max(50),
    email: z.string({ required_error: 'Email Address is required' }).min(2).email("Enter a valid Email"),
})