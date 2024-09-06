export const isAuth = () => {
    if (localStorage.getItem('authToken')) {
        return true
    }
    return false
}


const API_URL = process.env.NEXT_PUBLIC_API_URL

export const signupAPI = async (
  firstName: string, 
  lastName: string, 
  email: string, 
  password: string
) => {
    try {
        const res = await fetch(`${API_URL}/api-auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                groups: [3],
            }),
        })
  
        const data = await res.json()

        if (!res.ok) {
            if (data.email[0].includes('email already exists')) {
                throw new Error(data.email[0])
            } else {
                throw new Error(`Failed to sign up: ${res.statusText}`)
            }
        }

        localStorage.setItem('authToken', data.token)
        localStorage.setItem('email', data.email)
        localStorage.setItem('userId', data.id)

        return data
    } 
    catch (error) {
        console.error('Throwed an error!', error)
        throw error // Re-throw the error after logging it
    }
}

export const loginAPI = async (email: string, password: string) => {
    try {
        const res = await fetch(`${API_URL}/api-auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
  
        const data = await res.json()

        if (!res.ok) {
            throw new Error(`Failed to login: ${res.statusText}`)
        }
        
        localStorage.setItem('authToken', data.user.token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('userId', data.user.id)

        return data
    } 
    catch (error) {
        console.error('Throwed an error!', error)
        throw error // Re-throw the error after logging it
    }
}

export const fetchUserDataAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/api-auth/${localStorage.getItem('userId')}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
    })

    const data = await res.json()

    // console.log('user data', data)

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Failed to fetch user data: ${res.status} ${res.statusText} - ${JSON.stringify(errorData)}`);
    }

    return data
  } 
  catch (error) {
      console.error('Throwed an error!', error)
      throw error
  }
}

export const updateUserName = async (first_name: string, last_name: string) => {
  try {
    const res = await fetch(`${API_URL}/api-auth/${localStorage.getItem('userId')}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          first_name,
          last_name
        })
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Failed to fetch user data: ${res.status} ${res.statusText} - ${JSON.stringify(errorData)}`);
    }

    return data
  } 
  catch (error) {
      console.error('Throwed an error!', error)
      throw error
  }
}