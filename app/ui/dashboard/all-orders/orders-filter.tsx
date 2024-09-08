import { useState } from "react";
import Select from "../../forms/components/select";

export default function OrdersFilter({
  onFilter,
}: {
  onFilter: (filter: string) => void
}) {
  const [filter, setFilter] = useState('all')
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  }

  return (
    <div className="mb-4 flex space-x-2">
      <Select 
        label='Filter by Status' 
        onChange={handleFilterChange} 
        options={['all', 'pending', 'delivered']}
      />
    </div>
  )
}