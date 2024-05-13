import Requests from "@/requests";

const GetDepartments = function () {
    Requests.GetDepartments()
        .then((response) => {
            this.collection.loader.hideLoader()
            this.collection.setData(response)
        })
        .catch((error) => {
            this.collection.loader.hideLoader()
            console.log(error)
        })
}

export default GetDepartments
