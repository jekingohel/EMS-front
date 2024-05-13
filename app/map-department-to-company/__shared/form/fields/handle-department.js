import { useEffect, useState } from "react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"


import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const HandleDepartments = ({ form, departments }) => {
  const { control } = form

  const [rowSelection, setRowSelection] = useState([])

  const [defaultValues, setDefaultValues] = useState([])

  const toggleCheckedAll = (isChecked, onChangeField) => {
    if (isChecked) {
      let selectedDepartment = departments.map((department, index) => {
        return department.departmentId
      })
      setDefaultValues(selectedDepartment)
      onChangeGridSelection(selectedDepartment, onChangeField)
    } else {
      onChangeGridSelection([], onChangeField)
      setDefaultValues([])
    }
  }

  useEffect(() => {
    if (departments.length > 0) {
      const selectedDepartments = departments.filter(d => d.isLinked === true).map(d => d.departmentId)
      setRowSelection(selectedDepartments)
      setDefaultValues(selectedDepartments)
    }
  }, [departments])

  const toggleCheckedSingle = (id, onChangeField) => {
    if (rowSelection.includes(id)) {
      let selected = rowSelection.filter((item) => item != id)
      onChangeGridSelection(selected, onChangeField)
    } else {
      let selected = [...rowSelection, id]
      onChangeGridSelection(selected, onChangeField)
    }
  }

  const onChangeGridSelection = (value, onChangeField) => {
    let selectedValues = value.map((item) => {
      let department = departments.find((d) => d.departmentId === item)
      return {
        departmentId: department.departmentId,
        departmentName: department.departmentName,
        isLinked: true
      }
    })
    // check if already linked and remove
    defaultValues.forEach((dv) => {
      let department = departments.find((d) => d.departmentId === dv)
      if (!value.includes(dv)) {
        selectedValues.push({
          ...department, isLinked: false
        })
      }
    })
    // console.log('selectedValues', selectedValues)
    setRowSelection(value)
    onChangeField(selectedValues)
  }

  return (
    <FormField
      control={control}
      name="departments"
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col">
            <FormLabel>Assign Departments</FormLabel>
            <FormControl>
              <div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow >
                        <TableHead>
                          {departments.length ? <Checkbox
                            checked={rowSelection ?.length === departments.length || (rowSelection ?.length > 0 && "indeterminate") }
                            onCheckedChange={(value) => {
                              toggleCheckedAll(value, field.onChange)
                            }}
                            aria-label="Select all"
                          /> : null}
                        </TableHead>
                        <TableHead>
                          <div className="capitalize">ID</div>
                        </TableHead>
                        <TableHead>
                          <div className="capitalize">Name</div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {departments.length ? departments.map((item, index) => {
                        return (
                          <TableRow
                            key={index}
                            data-state={rowSelection.includes(item.departmentId) && "selected"}
                          >
                            <TableCell className="w-14">
                              <Checkbox
                                checked={rowSelection.includes(item.departmentId)}
                                onCheckedChange={(value) => toggleCheckedSingle(item.departmentId, field.onChange)}
                                aria-label="Select row"
                              />
                            </TableCell>
                            <TableCell className="w-8">
                              {item.departmentId}
                            </TableCell>
                            <TableCell>{item.departmentName}</TableCell>
                          </TableRow>
                        )
                      }) : (
                          <TableRow>
                            <TableCell
                              colSpan={3}
                              className="h-24 text-center"
                            >
                              No results. Please select company first.
                          </TableCell>
                          </TableRow>
                        )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default HandleDepartments
