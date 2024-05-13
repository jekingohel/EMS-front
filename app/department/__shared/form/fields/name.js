import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const DepartmentName = ({ control }) => {
  return (
    <FormField
      control={control}
      name="Name"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Department Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter Department Name"
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

export default DepartmentName
