import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="w-full h-full relative">
            <Header />
            {children}
        </div>
    )
}