export default function FooterComponent() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My Application. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Built with ❤️ using React and Tailwind CSS
            </p>
        </footer>
    )
}