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

const EmployeeCompany = ({ control, options, onChange }) => {
  return (
    <FormField
      control={control}
      name="companyId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Company</FormLabel>
          <Select
            onValueChange={e => {
              field.onChange(e)
              onChange(e)
            }}
            defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select Company" />
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

export default EmployeeCompany
