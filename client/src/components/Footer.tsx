export default function FooterComponent() {
    return (
        <footer className="w-full text-center py-6 bg-pink-200 text-pink-800 text-sm">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Mimi's Sweets. All rights reserved.
            </p>
        </footer>
    )
}