let initialState = {
    lectures: [],
    changeLecture:[]
}


function appReducer(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        default:
            return stateCopy;
        case "set_lecture":
            stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.lectures = action.payload
            return stateCopy
        case "edit_lecture":
            stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.changeLecture = action.payload
            return stateCopy
    }

}

export default appReducer;  