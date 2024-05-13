/// *** DATA-LIST
import GetEmployees from "@/requests/GetEmployees"
import GetCompanies from "@/requests/GetCompanies"
import GetDepartments from "@/requests/GetDepartments"
import GetMapCompanyToDepartments from "@/requests/GetMapCompanyToDepartments"
import GetCompanyDepartments from "@/requests/GetCompanyDepartments"
import GetCompanyAllDepartments from "@/requests/GetCompanyAllDepartments"
import SetMapCompanyDepartments from "@/requests/SetMapCompanyDepartments"

/// *** ADD
import AddCompany from "@/requests/AddCompany"
import AddDepartment from "@/requests/AddDepartment"
import AddEmployee from "@/requests/AddEmployee"
import AssignDepartment from "@/requests/AssignDepartment"

/// *** EDIT
import EditCompany from "@/requests/EditCompany"
import EditDepartment from "@/requests/EditDepartment"
import EditEmployee from "@/requests/EditEmployee"

/// *** DELETE
import DeleteCompany from "@/requests/DeleteCompany"
import DeleteDepartment from "@/requests/DeleteDepartment"
import DeleteEmployee from "@/requests/DeleteEmployee"

const Requests = {
  GetEmployees,
  GetCompanies,
  GetDepartments,
  GetMapCompanyToDepartments,
  AddCompany,
  AddDepartment,
  AddEmployee,
  AssignDepartment,
  EditCompany,
  EditDepartment,
  EditEmployee,
  DeleteCompany,
  DeleteDepartment,
  DeleteEmployee,
  GetCompanyDepartments,
  SetMapCompanyDepartments,
  GetCompanyAllDepartments
}

export default Requests
