import Loader from "@/engine/__Shared/Objects/Loader"

import GetMapDepartmentToCompany from "./GetMapDepartmentToCompany";
import MapCompanyDepartments from "./Activity/MapCompanyDepartments";

const ngn = {}

ngn.collection = {
    fetching: true,
    loader: Loader(),
    setData: null,

    assign_department: {
        submitLoader: Loader(),
        showModal: null,
        hideModal: null,
        setError: null,
        mapCompanyDepartments: MapCompanyDepartments.bind(ngn)
    },

    fetchData: GetMapDepartmentToCompany.bind(ngn),
}





export default ngn
