import { useState } from "react"
import Label from "../forms/components/label"
import Input from "../forms/components/input"

export default function Search({
  onSearch
}: {
  onSearch: (query: string) => void
}) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="mb-4 flex space-x-2 text-sm">
      <Label className={'!mb-0'}>Search:</Label>
      <Input 
        value={query} 
        onChange={handleChange} 
        placeholder="Search by customer name, order ID, or address" 
      />
    </div>
  )
}