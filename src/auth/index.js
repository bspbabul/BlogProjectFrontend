
export const isLoggedin = () => {
    let data = localStorage.getItem("data")
    if (data == null) {
        return false;
    }
    else {
        return true;
    }
}

export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data))
    next()
}

export const doLogout = (next) => {
    localStorage.removeItem("data")
    next()
}

export const getCurrentUserDetails = () => {
    if (isLoggedin()) {
        let data = JSON.parse(localStorage.getItem("data"));
        return data.user;
    }

    else return undefined
}