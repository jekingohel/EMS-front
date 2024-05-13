"use client"
import { useMemo, useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Requests from "@/requests";
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { HandleDepartments, SelectCompany } from "./fields"
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast"

export default function AssignDepartment({ companies, ngn }) {
  const { toast } = useToast()
  const [departments, setDepartments] = useState([])
  const [submitLoader, setSubmitLoader] = useState(false)
  const [companyId, setCompanyId] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: useMemo(() => {
      const selectedDepartments = departments.filter(d => d.isLinked === true)
      return {
        companyId: null,
        departments: selectedDepartments
      }
    }, [departments])
  })

  useEffect(() => {
    const selectedDepartments = departments.filter(d => d.isLinked === true)
    form.reset({
      companyId: companyId,
      departments: selectedDepartments
    });
  }, [departments, companyId])

  const onSubmit = (data) => {
    ngn.mapCompanyDepartments(data)
  }

  const changeCompany = (id) => {
    setCompanyId(id)
    Requests.GetCompanyAllDepartments({ id })
      .then((response) => {
        setDepartments(response.departments)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ngn.setError = function (error) {
    toast({
      variant: "destructive",
      title: "Error!",
      description: error ?.message,
      duration: 10000
    })
  }

  ngn.submitLoader.showLoader = () => setSubmitLoader(true)
  ngn.submitLoader.hideLoader = () => setSubmitLoader(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <SelectCompany control={form.control} companies={companies} onChange={changeCompany} />
        <HandleDepartments form={form} departments={departments} />
        <div className="flex gap-2">
          <Button type="submit" className="w-full" disabled={submitLoader}>
            Update
          </Button>
        </div>
      </form>
    </Form>
  )
}
