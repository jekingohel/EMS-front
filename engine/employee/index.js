import Loader from "@/engine/__Shared/Objects/Loader"
import GetEmployees from "./GetEmployees";

import AddEmployee from "./Activity/AddEmployee";
import EditEmployee from "./Activity/EditEmployee";
import DeleteEmployee from "./Activity/DeleteEmployee";

const ngn = {}

ngn.collection = {
    fetching: true,
    loader: Loader(),
    setData: null,

    add: {
        submitLoader: Loader(),
        showModal: null,
        hideModal: null,
        setError: null,
        addEmployee: AddEmployee.bind(ngn)
    },

    edit: {
        submitLoader: Loader(),
        showModal: null,
        hideModal: null,
        setError: null,
        editEmployee: EditEmployee.bind(ngn)
    },

    delete: {
        setError: null,
        deleteEmployee: DeleteEmployee.bind(ngn)
    },

    updateCollection: null,
    fetchData: GetEmployees.bind(ngn),
}





export default ngn
