import OrderItem from "./order-item"

export default function OrderItems({
    items,
    state,
}: {
    items: any
    state: 'pending' | 'delivered'
}) {
    return (
        <>
            {
                (items.length === 0) ? (
                    <p>There is no items in here.</p>
                ) : (
                    items.map((item: any) =>
                        <div className="h-32">
                            <OrderItem key={item.id} cartItem={item} state={state} />
                        </div>
                    )
                )
            }
        </>
    )
}