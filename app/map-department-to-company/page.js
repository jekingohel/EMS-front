"use client"
import { useEffect, useState } from "react"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import DialogBox from "@/components/__shared/dialog-box"
import Forms from "./__shared/form"
import ngn from "@/engine/map-department-to-company";

export default function Home() {
  const [collection, setCollection] = useState([])
  const [loader, setLoader] = useState(false)
  const [modal, setModal] = useState(false);

  useEffect(() => {
    ngn.collection.loader.showLoader()
    ngn.collection.fetchData()
  }, [])

  ngn.collection.setData = function (data) {
    setCollection(data)
  }

  ngn.collection.assign_department.showModal = () => setModal(true)
  ngn.collection.assign_department.hideModal = () => setModal(false)

  ngn.collection.loader.showLoader = () => setLoader(true)
  ngn.collection.loader.hideLoader = () => setLoader(false)

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="container flex-col flex max-w-screen-lg">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-3xl font-bold">
                Map Department To Company
              </h1>
            </div>
            <DialogBox
              open={modal}
              close={() => setModal(false)}
              className="sm:max-w-[650px]"
              trigger={<Button onClick={() => setModal(true)}>Assign Department</Button>}
              title="Assign Department"
            >
              <Forms companies={collection} ngn={ngn.collection.assign_department} />
            </DialogBox>
          </div>
          <div className="mt-5">
            <DataTable collection={collection} />
          </div>
        </div>
      </div>
    </main>
  )
}
