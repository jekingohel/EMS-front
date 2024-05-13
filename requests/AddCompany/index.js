import Comm from "@/services/Comm"

const AddCompany = async function ({
  id,
  name,
  email
}) {
  let result = {}
  let error = {
    code: 0,
    message: "",
  }

  await Comm.request({
    url: "/Company/Add",
    method: "post",
    data: {
      id,
      name,
      email
    }
  })
    .then((res) => {
      result = res.data.response
    })
    .catch((err) => {
      error.code = err?.response?.status
      error.message = err?.response?.data.message
    })

  if (error.code > 0) {
    return Promise.reject(error)
  }
  return Promise.resolve(result)
}

export default AddCompany
