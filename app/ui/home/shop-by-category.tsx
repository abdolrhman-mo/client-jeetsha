import H2 from "../components/H2";
import ShopByCategoryItem from "./shop-by-category-item";

export default function ShopByCategory() {
    return (
        <div className="w-5/6 m-auto">
            <div className="text-center">
                <H2 text="shop by category" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <ShopByCategoryItem imgSrc='/imgs/tees/tee2.jpg' href="collections/latest" text="new arrivals" />
                <ShopByCategoryItem imgSrc='/imgs/pants/pants1.jpg' href="collections/pants" text="pants" />
                <ShopByCategoryItem imgSrc='/imgs/tees/tee1.jpg' href="collections/tees" text="tees" />
                <ShopByCategoryItem imgSrc='/imgs/shorts/shorts1.webp' href="collections/shorts" text="shorts" />
            </div>
        </div>
    )
}