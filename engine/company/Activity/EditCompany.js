import Requests from "@/requests";

const EditCompany = function (item) {
    this.collection.edit.submitLoader.showLoader()

    Requests.EditCompany(item)
        .then((response) => {
            this.collection.edit.submitLoader.hideLoader()
            this.collection.edit.hideModal()
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.edit.submitLoader.hideLoader()
            this.collection.edit.setError(error)
            console.log(error)
        })
}

export default EditCompany
