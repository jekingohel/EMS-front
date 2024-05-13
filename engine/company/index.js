import Loader from "@/engine/__Shared/Objects/Loader"
import GetCompanies from "./GetCompanies";

import DeleteCompany from "./Activity/DeleteCompany";
import AddCompany from "./Activity/AddCompany";
import EditCompany from "./Activity/EditCompany";

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
        addCompany: AddCompany.bind(ngn)
    },

    edit: {
        submitLoader: Loader(),
        showModal: null,
        hideModal: null,
        setError: null,
        editCompany: EditCompany.bind(ngn)
    },

    delete: {
        setError: null,
        deleteCompany: DeleteCompany.bind(ngn)
    },

    updateCollection: null,
    fetchData: GetCompanies.bind(ngn),
}





export default ngn
