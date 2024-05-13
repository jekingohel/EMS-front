import Requests from "@/requests";

const GetMapDepartmentToCompany = function () {
    Requests.GetCompanies()
        .then((response) => {
            this.collection.loader.hideLoader()
            this.collection.setData(response)
        })
        .catch((error) => {
            this.collection.loader.hideLoader()
            console.log(error)
        })
}

export default GetMapDepartmentToCompany
