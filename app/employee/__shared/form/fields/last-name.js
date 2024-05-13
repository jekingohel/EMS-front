import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  
  const EmployeeLastName = ({ control }) => {
    return (
      <FormField
        control={control}
        name="lastname"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter Last name"
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
  
  export default EmployeeLastName
  