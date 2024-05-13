import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const CompanyName = ({ control }) => {
  return (
    <FormField
      control={control}
      name="Name"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter Name"
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

export default CompanyName
