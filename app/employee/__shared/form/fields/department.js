import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const EmployeeDepartment = ({ control, options }) => {
  return (
    <FormField
      control={control}
      name="departmentId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Department</FormLabel>
          <Select
            onValueChange={e => {
              field.onChange(e)
            }}
            defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((x, index) => {
                return (
                  <SelectItem key={index} value={`${x.value}`}>
                    {x.label}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmployeeDepartment
