import ProductsList from "@/app/ui/components/products-list"
import ViewAllLink from "@/app/ui/components/view-all-link"

export default function ProductGallery({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
    return (
        <div className="my-36">
            <h2 className='text-3xl text-center my-12 uppercase'>{title}</h2>
            <ProductsList tag={tag} limit={4} />
            <ViewAllLink url={`/collections/${tag}`} />
        </div>
    )
}