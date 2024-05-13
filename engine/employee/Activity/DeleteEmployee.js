import Requests from "@/requests";

const DeleteEmployee = function (item) {
    Requests.DeleteEmployee({ id: item.id })
        .then((response) => {
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.delete.setError(error)
            console.log(error)
        })
}

export default DeleteEmployee
