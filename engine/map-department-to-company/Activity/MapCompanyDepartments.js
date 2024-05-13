import Requests from "@/requests";

const MapCompanyDepartments = function (data) {
    this.collection.assign_department.submitLoader.showLoader()

    Requests.SetMapCompanyDepartments(data)
        .then((response) => {
            this.collection.assign_department.submitLoader.hideLoader()
            this.collection.assign_department.hideModal()
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.assign_department.submitLoader.hideLoader()
            this.collection.assign_department.setError(error)
            console.log(error)
        })
}

export default MapCompanyDepartments
