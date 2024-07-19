import ProductsList from "../ui/components/products-list"

export default function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    return (
        <>
            <ProductsList />
        </>
    )
}