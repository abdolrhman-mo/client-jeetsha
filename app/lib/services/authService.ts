export const isAuth = () => {
    if (localStorage.getItem('authToken')) {
        return true
    }
    return false
}


const API_URL = process.env.NEXT_PUBLIC_API_URL

export const signupAPI = async (username: string, password: string) => {
    try {
        const res = await fetch(`${API_URL}/api-auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                groups: [1],
            }),
        })
  
        const data = await res.json()

        if (!res.ok) {
            if (data.username[0] === 'A user with that username already exists.') {
                throw new Error(data.username[0])
            } else {
                throw new Error(`Failed to sign up: ${res.statusText}`)
            }
        }

        console.log('data', data)
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('username', data.username)
        localStorage.setItem('userId', data.id)

        return data
    } 
    catch (error) {
        console.error('Throwed an error!', error)
        throw error // Re-throw the error after logging it
    }
}

export const loginAPI = async (username: string, password: string) => {
    try {
        const res = await fetch(`${API_URL}/api-auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
  
        const data = await res.json()

        if (!res.ok) {
            throw new Error(`Failed to login: ${res.statusText}`)
        }

        console.log('data', data)
        localStorage.setItem('authToken', data.user.token)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('userId', data.user.id)

        return data
    } 
    catch (error) {
        console.error('Throwed an error!', error)
        throw error // Re-throw the error after logging it
    }
}

export const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('username')
}

export const fetchUserProfile = async () => {
    const data = {
        username: localStorage.getItem('username'),
    }

    return data
}