import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DataTable({ collection }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Departments</TableHead>
          <TableHead className="text-end"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collection?.map((company) => (
          <TableRow key={company?.id} style={{ height: 52 }}>
            <TableCell>{company?.id}</TableCell>
            <TableCell className="font-semibold">
              {company?.name}
            </TableCell>
            <TableCell>{company?.departments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
