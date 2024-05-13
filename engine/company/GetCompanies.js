import Requests from "@/requests";

const GetCompanies = function () {
    Requests.GetCompanies()
        .then((response) => {
            this.collection.loader.hideLoader()
            this.collection.setData(response)
        })
        .catch((error) => {
            this.collection.loader.hideLoader()
            console.log(error)
        })
}

export default GetCompanies
