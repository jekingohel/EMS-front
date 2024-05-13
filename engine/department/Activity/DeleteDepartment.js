import Requests from "@/requests";

const DeleteDepartment = function (item) {
    Requests.DeleteDepartment({ id: item.id })
        .then((response) => {
            this.collection.fetchData()
        })
        .catch((error) => {
            this.collection.delete.setError(error)
            console.log(error)
        })
}

export default DeleteDepartment
