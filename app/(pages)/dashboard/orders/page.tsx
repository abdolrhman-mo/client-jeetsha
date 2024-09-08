'use client'

import Heading from "@/app/ui/common/heading"
import { useEffect, useState } from "react"
import { OrderResponse } from "@/app/lib/types/orderTypes"
import { useAppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/hooks"
import { fetchAllOrders } from "@/redux/features/orders/orderAdminThunk"
import OrdersTable from "@/app/ui/dashboard/all-orders/orders-table"
import OrdersSummary from "@/app/ui/dashboard/all-orders/orders-summary"
import OrdersFilter from "@/app/ui/dashboard/all-orders/orders-filter"
import Pagination from "@/app/ui/common/pagination"
import Search from "@/app/ui/common/search"
import { startOfMonth, startOfToday, startOfWeek } from "date-fns"
import DateRangeFilter from "@/app/ui/common/date-range-filter"

export default function Page() {
    const ITEMS_PER_PAGE = 10

    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.orderAdmin.items)
    const status = useAppSelector(state => state.orderAdmin.status)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredOrders, setFilteredOrders] = useState<OrderResponse[]>(orders)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
      dispatch(fetchAllOrders())
    }, [dispatch])

    useEffect(() => {
      setFilteredOrders(orders)
      setCurrentPage(1)
    }, [orders])

    const handleFilter = (filter: string) => {
      if (filter === 'all') {
        setFilteredOrders(orders)
      } else {
        const filtered = orders.filter(order => order.status === filter)
        setFilteredOrders(filtered)
      }
    }

    const handleSearch = (query: string) => {
      setSearchQuery(query)
      const searchLower = query.toLowerCase()
      const filtered = orders.filter(order => {
        const fullName = order.user.first_name + ' ' + order.user.last_name
        return (
          order.user.first_name.toLowerCase().includes(searchLower) ||
          order.user.last_name.toLowerCase().includes(searchLower) ||
          fullName.toLowerCase().includes(searchLower) ||
          order.address.address_text.toLowerCase().includes(searchLower) ||
          order.address.city.toLowerCase().includes(searchLower) ||
          order.id.toString().includes(searchLower)
        )
      })
      setFilteredOrders(filtered)
    }

    const handleDateFilter = (range: string) => {
      const today = startOfToday()
      const weekStart = startOfWeek(today)
      const monthStart = startOfMonth(today)
  
      let filtered
  
      switch (range) {
        case 'today':
          filtered = orders.filter(order => new Date(order.created_at) >= today)
          break
        case 'week':
          filtered = orders.filter(order => new Date(order.created_at) >= weekStart)
          break
        case 'month':
          filtered = orders.filter(order => new Date(order.created_at) >= monthStart)
          break
        default:
          filtered = orders // All Orders
      }
  
      setFilteredOrders(filtered)
    }

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    const totalOrders = filteredOrders.length
    const totalPages = Math.ceil(totalOrders / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const ordersToDisplay = filteredOrders.slice(startIndex, endIndex)

    return (
        <>
            <Heading level={2}>orders</Heading>

            <OrdersSummary
              totalOrders={orders.length}
              pendingOrders={orders.filter(order => order.status === 'pending').length}
              deliveredOrders={orders.filter(order => order.status === 'delivered').length}
              revenue={orders.reduce((sum, order) => sum + order.totalOrderPrice, 0)}
            />

            <div className="flex gap-4 flex-col md:flex-row items-center">
              <OrdersFilter onFilter={handleFilter} />
              <DateRangeFilter onFilter={handleDateFilter} />
              <Search onSearch={handleSearch} />
            </div>

            <OrdersTable orders={ordersToDisplay} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            <br />
            <br />
        </>
    )
}