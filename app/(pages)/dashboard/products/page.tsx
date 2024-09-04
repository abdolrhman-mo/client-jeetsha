'use client'

import Heading from "@/app/ui/common/heading"
import Input from "@/app/ui/forms/components/input"
import ProductsList from "@/app/ui/products/dashboard/products-list"
import { useEffect, useState } from "react"
import { fetchProductsAPI } from "@/app/lib/services/products/productService"

export default function Page() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState('')


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setImage(event.target.files[0])
        // console.log(event.target.files[0].name)
      }
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const token = localStorage.getItem('authToken')
    console.log('token', token) // the token is undefined

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
      if (!token) {
        console.log('no token found')
      }
      const response = await fetch(`${API_URL}/products/`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            // 'Content-Type': '',
            'Authorization': `Token ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json()
        setMessage('Product uploaded successfully!')
        console.log('Success:', data)

        // Reset inputs to blank
        setName('')
        setPrice('')
        setDescription('')
        setImage(null)
        setMessage('')
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

  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const p = await fetchProductsAPI()
        setProducts(p)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }
    getProducts()
  }, [])

  return (
      <>
        <div className="text-center">
          <Heading level={4}>add product</Heading>
        </div>
        <form className="w-fit" onSubmit={handleSubmit} encType="multipart/form-data">
          <Input 
            label={'name'} 
            type={'text'} 
            value={name} 
            onChange={(e: any) => setName(e.target.value)}
            required={true}
          />
          <Input 
            label={'price'} 
            type={'text'} 
            value={price} 
            onChange={(e: any) => setPrice(e.target.value)}
            required={true}
          />
          <Input
            label={'description'} 
            type={'textarea'} 
            value={description} 
            onChange={(e: any) => setDescription(e.target.value)}
            required={true}
          />
          {/* <div>
              <label htmlFor="image">Image:</label>
              <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
              />
          </div> */}
          <Input 
            label={'image'}
            type={'file'}
            onChange={handleFileChange}
            required={true}
          />
          <Input type="submit" value="upload product" />
        </form>

        {message && <p>{message}</p>}

        <div>
          <br />
          <br />
          <div className="text-center">
            <br />
            <Heading level={4}>all products</Heading>
            {/* <div className="grid grid-cols-4 bg-white rounded px-4 py-1">
              <div className="col-span-1">
                <Search placeholder="Search" />
              </div>
              <div className="col-span-3">
                <Button theme="light">
                  <AdjustmentsHorizontalIcon className="h-5 inline-block pr-2" />
                  Filters
                </Button>
                <Dropdown />
              </div>
            </div> */}
            <br />
          </div>
          <ProductsList products={products} />
          <br />
          <br />
        </div>
      </>
  )
}