import Requests from "@/requests";

const DeleteCompany = function (item) {
    Requests.DeleteCompany({ id: item.id })
        .then((response) => {
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.delete.setError(error)
            console.log(error)
        })
}

export default DeleteCompany
