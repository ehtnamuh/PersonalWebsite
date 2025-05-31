import Link from "next/link"
import Contact from "./components/Contact"
import Image from "next/image"

function Footer() {
    return (
    <footer className="bg-cyan-900 text-white px-6 py-4 border-t border-gray-200">
      <Contact />
    </footer>
    )
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-black">
            <main className="flex-1 flex flex-col w-full items-center">
                {/* Hero Section */}
                <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 w-full h-full">
                        <Image
                            src="/homeBackground.jpg"
                            alt="Background Image"
                            fill
                            className="object-cover w-full h-full"
                            style={{ opacity: 0.7 }}
                        />
                        <div className="absolute inset-0 bg-black/80" />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 mb-4 z-10 relative">
                        <Image
                            src="/samin.jpg"
                            alt="Profile Picture"
                            width={150}
                            height={150}
                            className="rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                            priority
                        />
                        <span className="mt-4 text-xl font-semibold text-white">
                            <span className="text-orange-400">Samin Bin Karim</span>
                        </span>
                        <span className="text-cyan-100">
                            <span className="text-cyan-300 font-semibold">Controls Engineer</span> | <span className="text-orange-400">Machine Learning Engineer</span> | Software Engineer 
                        </span>
                    </div>
                </section>
                {/* About Me Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-cyan-400">
                    <div className="container grid items-center gap-4 px-4 md:px-6 justify-center">
                        <div className="flex flex-col items-center w-full">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    About <span className="text-orange-400">Me</span>
                                </h1>
                                <p className="max-w-[600px] md:text-xl mx-auto text-white">
                                    <span className="text-orange-100">Controls Engineer, Machine Learning Engineer, and Software Engineer</span> passionate about automation, intelligent systems, and building impactful solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education & Honors Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-8 w-full">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">Education & <span className="text-orange-500">Honors</span></h2>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 w-full max-w-3xl justify-center">
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col items-center">
                                    <h3 className="font-semibold text-lg text-white">B.Sc. in <span className="text-orange-300">Electrical Engineering</span></h3>
                                    <p className="text-white">XYZ University, 2018 - 2022</p>
                                    <ul className="list-disc ml-5 mt-2 text-white text-sm text-left">
                                        <li><span className="text-orange-100">Specialization:</span> Control Systems & Machine Learning</li>
                                        <li><span className="text-orange-100">GPA:</span> 3.9/4.0</li>
                                    </ul>
                                </div>
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col items-center">
                                    <h3 className="font-semibold text-lg text-white">Honors & <span className="text-orange-300">Awards</span></h3>
                                    <ul className="list-disc ml-5 mt-2 text-white text-sm text-left">
                                        <li>Dean’s List (2019-2022)</li>
                                        <li className="text-orange-100">IEEE Robotics Competition Winner (2021)</li>
                                        <li>Undergraduate Research Grant Recipient</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Experience Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-400 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="space-y-6 text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Experience</h2>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
                            <div className="bg-gray-50 rounded-lg shadow p-6 text-left w-full flex flex-col items-center">
                                <h3 className="font-semibold text-lg text-cyan-700 text-center">Controls Engineer</h3>
                                <p className="text-gray-700 text-center">ABC Automation Inc. | 2022 - Present</p>
                                <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                    <li>Designed and implemented advanced control algorithms for industrial automation.</li>
                                    <li>Integrated PLCs, HMIs, and SCADA systems for manufacturing lines.</li>
                                    <li><span className="text-orange-500">Collaborated</span> with cross-functional teams to deliver robust automation solutions.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 rounded-lg shadow p-6 text-left w-full flex flex-col items-center">
                                <h3 className="font-semibold text-lg text-cyan-700 text-center">Machine Learning Engineer (Intern)</h3>
                                <p className="text-gray-700 text-center">Tech Innovations Lab | Summer 2021</p>
                                <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                    <li>Developed predictive models for equipment health monitoring.</li>
                                    <li>Worked with time-series sensor data and deployed models to cloud platforms.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Showcase Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-gray-50">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="space-y-6 text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">Project <span className="text-orange-500">Showcase</span></h2>
                            <p className="max-w-[700px] mx-auto md:text-xl text-gray-700">
                                Selected projects demonstrating expertise in <span className="text-orange-500">controls</span>, <span className="text-cyan-700">machine learning</span>, and software engineering.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {/* Project 1 */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project1.jpg"
                                    alt="Autonomous Drone Navigation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Autonomous Drone Navigation</h3>
                                    <p className="text-sm text-white">Developed ML-based path planning and control for drones in dynamic environments.</p>
                                </div>
                            </div>
                            {/* Project 2 */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project2.jpg"
                                    alt="Industrial Process Automation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Industrial Process Automation</h3>
                                    <p className="text-sm text-white">Designed PLC and SCADA systems for real-time process monitoring and control.</p>
                                </div>
                            </div>
                            {/* Project 3 */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project3.jpg"
                                    alt="Predictive Maintenance Platform"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Predictive Maintenance Platform</h3>
                                    <p className="text-sm text-white">Built a web app using ML to predict equipment failures and optimize maintenance schedules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
