import Requests from "@/requests";

const EditEmployee = function (item) {
    this.collection.edit.submitLoader.showLoader()

    Requests.EditEmployee(item)
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

export default EditEmployee
