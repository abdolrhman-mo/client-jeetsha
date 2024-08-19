'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, toggleLoggedIn } from '@/lib/features/user/userSlice'
import { RootState } from '@/lib/store'


export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [token, setToken] = useState<string | undefined>(undefined);

    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.user.token)
    const loggedIn = useSelector((state: RootState) => state.user.loggedIn)

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = {
            username: 'admin',
            password: 'admin',
        }
        const res = await fetch('http://127.0.0.1:8000/api-auth/login/', {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // credentials: 'include',
            body: JSON.stringify(formData),
        })
        const data = await res.json()
        console.log('data: ', data)
        if (res.ok) {
            localStorage.setItem('authToken', data.token)
            localStorage.setItem('username', data.user.username)
            
            // not working
            console.log('before', loggedIn)
            if (loggedIn === false) {
                dispatch(toggleLoggedIn())
            }
            console.log('after', loggedIn)
            // dispatch(setUser({ userInfo: data.user, token: data.token }))
        } else {
            console.log('my login failed: ', data)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}> {/* Use onSubmit to handle form submission */}
                <input
                    type="text"
                    name="username"
                    value={username} // Controlled component
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                    required
                    />
                <input
                    type="password"
                    name="password"
                    value={password} // Controlled component
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    required
                    />
                <input type="submit" value="Submit" />
                <p>Token: {token}</p> {/* Display token */}
            </form>
        </>
    )
}
