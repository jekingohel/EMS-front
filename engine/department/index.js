import Loader from "@/engine/__Shared/Objects/Loader"
import GetDepartments from "./GetDepartments";

import AddDepartment from "./Activity/AddDepartment";
import EditDepartment from "./Activity/EditDepartment";
import DeleteDepartment from "./Activity/DeleteDepartment";

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
        addDepartment: AddDepartment.bind(ngn)
    },

    edit: {
        submitLoader: Loader(),
        showModal: null,
        hideModal: null,
        setError: null,
        editDepartment: EditDepartment.bind(ngn)
    },

    delete: {
        setError: null,
        deleteDepartment: DeleteDepartment.bind(ngn)
    },

    updateCollection: null,
    fetchData: GetDepartments.bind(ngn),
}





export default ngn
