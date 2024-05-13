import Requests from "@/requests";

const AddCompany = function (item) {
    this.collection.add.submitLoader.showLoader()

    Requests.AddCompany(item)
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

export default AddCompany
