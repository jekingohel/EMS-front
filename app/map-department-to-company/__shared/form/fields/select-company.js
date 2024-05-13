import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icons } from "@/components/__shared/icons";


const SelectCompany = ({ control, companies, onChange, loader = false }) => {
  return (
    <FormField
      control={control}
      name="companyId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Select Company</FormLabel>
          <FormControl>
            <Select
              defaultValue={field.value || ""}
              onValueChange={(value) => {
                onChange(Number(value))
                field.onChange(Number(value))
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Company" />
              </SelectTrigger>
              <SelectContent>
                {loader ? <div className="flex items-center justify-center m-5">
                  <Icons.reload className="h-5 w-5" />
                </div> :
                  <SelectGroup>
                    {companies.map((company, index) => (
                      <SelectItem value={`${company.id}`} key={index}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectCompany
