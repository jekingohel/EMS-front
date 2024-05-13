import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogBox({
  open = false,
  close = () => { },
  trigger,
  children,
  title,
  description,
  className = "sm:max-w-[425px]",
}) {
  return (
    <Dialog open={open} onOpenChange={close}>
      {trigger}
      <DialogContent className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
        style={{ overflowY: "auto", maxHeight: "80vh" }}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
