'use client'

import H4 from "@/app/ui/components/h4"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

export default function Page() {
  // const token = useSelector((state: RootState) => state.user.token)
  const token = localStorage.getItem('authToken')

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState('')


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setImage(event.target.files[0])
      }
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // const token = localStorage.getItem('authToken')
    console.log(token)

    if (!name || !price || !description || !image) {
      setMessage('Please fill all fields.')
      return
    }
  
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('image', image)
  
    try {
      console.log(token)
      const response = await fetch('http://localhost:8000/products/', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json()
        setMessage('Product uploaded successfully!')
        console.log('Success:', data)
      } else {
        const errorData = await response.json()
        setMessage('Upload failed.')
        console.error('Error:', errorData)
      }
    } catch (error) {
      setMessage('Error uploading product.')
      console.error('Error:', error)
    }
  }

  return (
      <>
          <H4 text="add product" />
          <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div>
                  <label htmlFor="name">Name:</label>
                  <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                  />
              </div>

              <div>
                  <label htmlFor="price">Price:</label>
                  <input
                      type="number"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                  />
              </div>

              <div>
                  <label htmlFor="description">Description:</label>
                  <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                  />
              </div>

              <div>
                  <label htmlFor="image">Image:</label>
                  <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                  />
              </div>

              <button type="submit">Upload Product</button>
          </form>

          {message && <p>{message}</p>}

          <div>
              <br />
              <br />
              <H4 text="all products" />
              
          </div>
      </>
  )
}