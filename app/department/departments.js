import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/__shared/icons"
import ConfirmDelete from "@/components/__shared/confirm-delete"
import DialogBox from "@/components/__shared/dialog-box"
import Forms from "./__shared/form"
import { useToast } from "@/components/ui/use-toast"

export function Departments({ collection, ngn }) {
  const { toast } = useToast()
  const [editModal, setEditModal] = useState(false);
  const [selectItem, setSelectItem] = useState({});

  const handleContinue = (item) => {
    ngn.collection.delete.deleteDepartment(item)
  }

  ngn.collection.delete.setError = function (error) {
    toast({
      variant: "destructive",
      title: "Error!",
      description: error?.message,
      duration: 10000
    })
  }

  ngn.collection.edit.showModal = () => setEditModal(true)
  ngn.collection.edit.hideModal = () => setEditModal(false)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-end"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collection.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="font-semibold">
              {item.name}
            </TableCell>
            <TableCell className="text-end">
              <DialogBox
                open={editModal}
                close={() => setEditModal(false)}
                trigger={
                  <Button variant="ghost" size="icon" onClick={() => {
                    setEditModal(true)
                    setSelectItem(item)
                  }}>
                    <Icons.edit className="h-4 w-4" />
                  </Button>
                }
                title="Edit Department"
              >
                <Forms type="edit" item={selectItem} ngn={ngn.collection.edit} />
              </DialogBox>
              <ConfirmDelete
                trigger={
                  <Button variant="ghost" size="icon">
                    <Icons.delete className="h-4 w-4" />
                  </Button>
                }
                onContinue={() => handleContinue(item)}
                title="Are you sure you want to delete?"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
