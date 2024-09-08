import { useState } from "react"
import DatePicker from 'react-datepicker'
import Select from "../forms/components/select"

export default function DateRangeFilter({
  onFilter,
}: {
  onFilter: (range: string) => void
}) {
  const handleDateRangeChange = (range: string) => {
    onFilter(range)
    console.log('rangee', range)
  }

  return (
    <div className="mb-4 flex space-x-2">
      <Select 
        label={'Choose Date:'} 
        options={['all', 'today', 'week', 'month']}
        onChange={(e: any) => handleDateRangeChange(e.target.value)} 
      />
    </div>
  )
}