import Comm from "@/services/Comm"

const GetCompanies = async function () {
  let result = {}
  let error = {
    code: 0,
    message: "",
  }

  result = await Comm.request({
    url: "/Company/GetAll",
    method: "get",
  })
    .then((res) => {
      return res.data.response
    })
    .catch((err) => {
      console.log(err)
      // error.code = err.response.status
      // error.message = err.response.data.message
    })

  if (error.code > 0) {
    return Promise.reject(error)
  }
  return Promise.resolve(result)
}

export default GetCompanies
