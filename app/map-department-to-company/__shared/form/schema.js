import { z } from "zod"
export const formSchema = z.object({
  companyId: z.number({required_error: 'Company is required'}),
  departments: z.array(
    z.object({
      departmentId: z.number(),
      departmentName: z.string(),
      isLinked: z.boolean()
    })
  ).nonempty(),
})
