const FETCH_DATA = "FETCH_DATA"
const ERROR = "ERROR"

export function  fetchData(url) {
    return {
        type: FETCH_DATA,
        payload : url
    }
}

export function fetchERROR(ERROR){
    return{
        type: ERROR,
        payload : ERROR

    }
}