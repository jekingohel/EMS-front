import Comm from "@/services/Comm"

const EditEmployee = async function ({
  id,
  firstname,
  middlename,
  lastname,
  email,
  phone,
  companyId,
  departmentId,
}) {
  let result = {}
  let error = {
    code: 0,
    message: "",
  }

  await Comm.request({
    url: "/Employee/Update",
    method: "post",
    data: {
      id,
      firstname,
      middlename,
      lastname,
      email,
      phone,
      companyId,
      departmentId,
    }
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

export default EditEmployee
