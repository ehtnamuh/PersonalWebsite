import Link from "next/link"
import { Button, ButtonGroup } from "@nextui-org/react";
import Contact from "../components/Contact";

function Footer() {
    return (
        <footer className="bg-gray-200 dark:bg-gray-700 px-6 py-4">
            <Contact />
        </footer>
    )
}

export default function Results() {
    return (
        <>
            <main className="flex-1 flex flex-col md:flex-row gap-4 p-4">
                <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <header className="bg-gray-200 dark:bg-gray-700 px-4 py-2">
                            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Prediction</h2>
                        </header>
                        <div className="p-2 flex justify-center items-center">
                            <img
                                alt="Prediction Image"
                                height={500}
                                src="/floodprediction.png"
                                style={{
                                    objectFit: "fill",
                                }}
                                width={500}
                            />
                        </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <header className="bg-gray-200 dark:bg-gray-700 px-4 py-2">
                            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Analysis</h2>
                        </header>
                        <div className="p-2 flex justify-center items-center">
                            <img
                                alt="Prediction Image"
                                height={500}
                                src="/attention.png"
                                style={{
                                    objectFit: "fill",
                                }}
                                width={500}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <div className="p-4 flex justify-center">
                <Button className="text-2xl font-bold border border-gray-500 bg-red-500 p-2">
                    <Link href="/Landuse">Back to Editing</Link>
                </Button>
            </div>
            <Footer />
        </>
    )
}