import axios from 'axios'


export const getLecture = (sub, cla) => {
    let data = {
        subject: sub,
        class: cla
    }

    return function (dispatch) {
        return axios.post("http://localhost:3010/getlecture", data).then(res => {
            dispatch(setLecture(res.data))
        })

    }
}
// check can we send data without setLecture Function 

function setLecture(data) {
    return {
        type: "set_lecture",
        payload: data
    }
}

export const editLecture = (data) =>{
    return function (dispatch) {
        return axios.post("http://localhost:3010/editlecture", data).then(res => {
            if(res.data) dispatch(sendEditLecture(res.data))
            
        })

    }
}

function sendEditLecture(data){
    return({
        type:"edit_lecture",
        payload: data
    })
}