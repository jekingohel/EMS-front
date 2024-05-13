import Requests from "@/requests";

const AddDepartment = function (item) {
    this.collection.add.submitLoader.showLoader()

    Requests.AddDepartment(item)
        .then((response) => {
            this.collection.add.submitLoader.hideLoader()
            this.collection.add.hideModal()
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.add.submitLoader.hideLoader()
            this.collection.add.setError(error)
            console.log(error)
        })
}

export default AddDepartment
