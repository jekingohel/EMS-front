import Requests from "@/requests";

const GetEmployees = function () {
    Requests.GetEmployees()
        .then((response) => {
            this.collection.loader.hideLoader()
            this.collection.setData(response)
        })
        .catch((error) => {
            this.collection.loader.hideLoader()
            console.log(error)
        })
}

export default GetEmployees
