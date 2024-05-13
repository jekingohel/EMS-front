import Comm from "@/services/Comm"

const SetMapCompanyDepartments = async function (data) {
    let result = {}
    let error = {
        code: 0,
        message: "",
    }

    await Comm.request({
        url: "/Department/MapCompanyDepartments",
        method: "post",
        data: data,
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

export default SetMapCompanyDepartments
