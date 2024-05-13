"use client"
import { useEffect, useState } from "react"
import { Companies } from "./companies"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/__shared/icons"
import DialogBox from "@/components/__shared/dialog-box"
import Forms from "./__shared/form"

import ngn from "@/engine/company";

export default function Home() {
  const [collection, setCollection] = useState([])
  const [loader, setLoader] = useState(false)
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    ngn.collection.loader.showLoader()
    ngn.collection.fetchData()
  }, [])

  ngn.collection.setData = function (data) {
    setCollection(data)
  }

  ngn.collection.add.showModal = () => setAddModal(true)
  ngn.collection.add.hideModal = () => setAddModal(false)

  ngn.collection.loader.showLoader = () => setLoader(true)
  ngn.collection.loader.hideLoader = () => setLoader(false)

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="container flex-col flex max-w-screen-lg">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-3xl font-bold">Manage Company</h1>
            </div>
            <DialogBox
              open={addModal}
              close={() => setAddModal(false)}
              trigger={
                <Button onClick={() => setAddModal(true)}>
                  <Icons.plus className="h-4 w-4 me-1" /> Add New
                </Button>
              }
              title="Add New Company"
            >
              <Forms ngn={ngn.collection.add} />
            </DialogBox>
          </div>
          <div className="mt-5">
            <Companies collection={collection} ngn={ngn} />
          </div>
        </div>
      </div>
    </main>
  )
}
