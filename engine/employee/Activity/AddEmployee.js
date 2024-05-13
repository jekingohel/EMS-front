import Requests from "@/requests";

const AddEmployee = function (item) {
    this.collection.add.submitLoader.showLoader()

    Requests.AddEmployee(item)
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

export default AddEmployee
