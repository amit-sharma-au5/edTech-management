export const getJwt = () => {
    return localStorage.getItem('myAuth');
}

export const adminJwt = () => {
    return localStorage.getItem('adminAuth');
}