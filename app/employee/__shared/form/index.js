"use client"
import { useState, useEffect, useMemo } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './schema'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  EmployeeCompany,
  EmployeeDepartment,
  EmployeeEmail,
  EmployeeFirstName,
  EmployeeLastName,
  EmployeeMiddleName,
  EmployeePhone,
} from './fields'
import Requests from "@/requests";
import { useToast } from "@/components/ui/use-toast"

export default function Forms({ type = 'add', item = {}, ngn = {}, }) {
  const { toast } = useToast()
  const [loader, setLoader] = useState(false)
  const [companies, setCompanies] = useState([])
  const [department, setDepartment] = useState([])

  const form = useForm({
    defaultValues: useMemo(() => {
      return {
        firstname: item.firstname || "",
        middlename: item.middlename || "",
        lastname: item.lastname || "",
        email: item.email,
        phone: item.phone,
        companyId: item.companyId ? `${item.companyId}` : undefined,
        departmentId: item.departmentId ? `${item.departmentId}` : undefined,
      }
    }, [item]),
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    Requests.GetCompanies()
      .then((response) => {
        const find_department = response.find((x) => x.id === item.companyId)
        find_department && changeCompany(find_department.id)
        setCompanies(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const onSubmit = (data) => {
    const payload = {
      "id": 0,
      "firstname": data.firstname,
      "middlename": data.middlename,
      "lastname": data.lastname,
      "email": data.email,
      "phone": data.phone,
      "companyId": data.companyId,
      "departmentId": data.departmentId,
    }

    if (type === "add") {
      ngn.addEmployee(payload)
    } else {
      payload["id"] = item.id
      ngn.editEmployee(payload)
    }
  }

  const changeCompany = (id) => {
    Requests.GetCompanyDepartments({ id })
      .then((response) => {
        const data = response
        setDepartment(data)
        let hasDepartment = data.find((d) => d.id == item.departmentId)
        if(!hasDepartment){
          form.setValue('departmentId', undefined)
        }
        
      })
      .catch((error) => {
        console.log(error)
      })
  }


  ngn.setError = function (error) {
    toast({
      variant: "destructive",
      title: "Error!",
      description: error?.message,
      duration: 10000
    })
  }


  ngn.submitLoader.showLoader = () => setLoader(true)
  ngn.submitLoader.hideLoader = () => setLoader(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <EmployeeFirstName control={form.control} />
        <EmployeeMiddleName control={form.control} />
        <EmployeeLastName control={form.control} />
        <EmployeePhone control={form.control} />
        <EmployeeEmail control={form.control} />
        <EmployeeCompany
          onChange={changeCompany}
          control={form.control}
          options={companies.map((x) => ({ label: x.name, value: x.id }))}
        />
        <EmployeeDepartment
          control={form.control}
          options={department.map((x) => ({ label: x.name, value: x.id }))}
        />
        <div className="flex gap-2">
          <Button type="submit" className="w-full" disabled={loader}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
