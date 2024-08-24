export const isAuth = () => {
    if (localStorage.getItem('authToken')) {
        return true
    }
    return false
}