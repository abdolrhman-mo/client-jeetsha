import StoreProvider from "@/app/StoreProvider"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    )
}