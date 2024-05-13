import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  
  const EmployeeEmail = ({ control }) => {
    return (
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter Email Address"
                className="pr-8 h-8"
                defaultValue={field.value || ""}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  
  export default EmployeeEmail
  