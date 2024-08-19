export default function Page() {
    async function createProduct(formData: FormData) {
        'use server'
        
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password'),
        }
        console.log(rawFormData.username)
        console.log(rawFormData.password)

        const user = {
            username: rawFormData.username,
            password: rawFormData.password,
        }

        fetch('http://localhost:8000/api-auth/signup/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // credentials: 'include',
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    return (
        <form action={createProduct} method="POST">
            <input type="text" name="username" id="" />
            <input type="password" name="password" id="" />
            <input type="submit" value="submit" />
        </form>
    )
}