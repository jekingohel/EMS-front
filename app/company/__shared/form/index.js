"use client"
import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./schema"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { CompanyEmail, CompanyName } from "./fields"
import { useToast } from "@/components/ui/use-toast"

export default function Forms({ type = "add", item = {}, ngn = {} }) {
  const { toast } = useToast()
  const [loader, setLoader] = useState(false)
  const form = useForm({
    defaultValues: useMemo(() => {
      return {
        Name: item.name || "",
        Email: item.email || "",
      }
    }, [item]),
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data) => {
    const payload = {
      "id": 0,
      "name": data.Name,
      "email": data.Email,
    }

    if (type === "add") {
      ngn.addCompany(payload)
    } else {
      payload["id"] = item.id
      ngn.editCompany(payload)
    }
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
        <CompanyName control={form.control} />
        <CompanyEmail control={form.control} />
        <div className="flex gap-2">
          <Button type="submit" className="w-full" disabled={loader}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
