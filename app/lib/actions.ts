'use server'
import { NextResponse } from 'next/server';
// import { cookies } from "next/headers"
// import Cookies from 'js-cookie';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    
    try {
        const test: any = formData.get('username')
        cookies().set('test', test, { expires: 7, httpOnly: true })
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password'),
        }
        const user = {
            username: rawFormData.username,
            password: rawFormData.password,
        }
        console.log(user)
        console.log("HI-user")
        const response = await fetch('http://127.0.0.1:8000/api-auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( user ),
        });
        console.log(response)
        if (!response.ok) {
            throw new Error('Login failed');
        }
        
        const data  = await response.json();
        
        const res = NextResponse.json({token: data.token}) 
        
        res.cookies.set('token', data.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days expiration
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        });
        
        return res;
        // fetch('http://localhost:8000/api-auth/login/', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(response => {
        //     // console.log(response)
        //     return response.json()
        // })
        // .then(data => {
        //     console.log(data.token)
        //     cookies().set('token', data.token, { expires: 7 })
        // })
        // cookies().set('test', 'cd9351238d663229353434db7903db85455a073e', { expires: 7 })
    } catch (error) {
        console.error('Error during login:', error);
        throw error
    }
}


export const redirectHome = () => {
    redirect('/')
}

export const abdoRedirect = (link: string) => {
    redirect(link)
}