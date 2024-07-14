import Product from "@/app/ui/components/product"

export default function ProductsList() {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-4 gap-8">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}