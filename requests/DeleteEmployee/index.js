import Comm from "@/services/Comm"

const DeleteEmployee = async function ({ id }) {
  let result = {}
  let error = {
    code: 0,
    message: "",
  }

  await Comm.request({
    url: `/Employee/Delete/?id=${id}`,
    method: "delete",
  })
    .then((res) => {
      result = res.data.response
    })
    .catch((err) => {
      error.code = err.response.status
      error.message = err.response.data.message
    })

  if (error.code > 0) {
    return Promise.reject(error)
  }
  return Promise.resolve(result)
}

export default DeleteEmployee
