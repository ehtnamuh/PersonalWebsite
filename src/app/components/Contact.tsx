import Link from "next/link"

export default function Contact() {
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
                <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" href="#">
                    Contact Form
                </Link>
                <p className="text-gray-700 dark:text-gray-300">Email: saminbinkarim@gmail.com</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 312 358 4806</p>
            </div>
        </div>
    )
}
