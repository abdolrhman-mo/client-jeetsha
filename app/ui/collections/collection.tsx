import H2 from "../components/H2";
import ProductsList from "../components/products-list";

export default function Collection({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
    return (
        <div className="pt-12">
            <div className="text-center">
                <H2 text={title} />
            </div>
            <ProductsList tag={tag} />
        </div>
    )
}