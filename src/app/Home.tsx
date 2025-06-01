"use client"
import Link from "next/link"
import Contact from "./components/Contact"
import { useState } from "react";
import Image from "next/image";



{/* AwardCard component (place at the top of the file or in a components folder) */}

function AwardCard({
    imageSrc,
    title,
    subtitle,
    shortDesc,
    detailsTitle,
    detailsDesc,
}: {
    imageSrc: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    detailsTitle: string;
    detailsDesc: string;
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative w-full">
            <div
                className={`bg-cyan-400 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full cursor-pointer hover:bg-cyan-500 transition ${open ? "ring-4 ring-orange-400" : ""}`}
                onClick={() => setOpen(!open)}
                tabIndex={0}
                role="button"
                aria-pressed={open}
            >
                <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/4 mb-4 md:mb-0">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={80}
                        height={80}
                        className="rounded-lg object-contain bg-white p-2"
                    />
                </div>
                <div className="flex flex-col items-start md:pl-8 w-full">
                    <h3 className="font-semibold text-lg text-white">{title}</h3>
                    <span className="text-orange-100">{subtitle}</span>
                    <p className="text-white mt-2 text-sm">{shortDesc}</p>
                </div>
            </div>
            {open && (
                <div className="absolute left-0 right-0 top-full mt-2 z-10 bg-white rounded-lg shadow-lg p-6 border border-cyan-300 animate-fade-in">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold text-cyan-700">{detailsTitle}</h2>
                        <button
                            className="text-gray-500 hover:text-black text-2xl leading-none ml-4"
                            onClick={e => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                    <p className="text-gray-700">{detailsDesc}</p>
                </div>
            )}
        </div>
    );
}

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
                            src="./homeBackground.jpg"
                            alt="Background Image"
                            fill
                            className="object-cover w-full h-full"
                            style={{ opacity: 0.7 }}
                        />
                        <div className="absolute inset-0 bg-black/80" />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 mb-4 z-10 relative">
                        <Image
                            src="./samin.jpg"
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
                <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-gray-100">
                    <div className="container flex flex-col md:flex-row items-center gap-8 px-4 md:px-6 justify-center max-w-4xl">
                        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
                            <Image
                                src="./samin.jpg"
                                alt="Samin Bin Karim"
                                width={200}
                                height={200}
                                className="rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                                priority
                            />
                            <div className="flex flex-row gap-4 mt-4">
                                <a
                                    href="https://github.com/your-github-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="/github-mark.svg"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="https://linkedin.com/in/your-linkedin-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="/linkedin.svg"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="https://medium.com/@your-medium-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="/medium.svg"
                                        alt="Medium"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full md:pl-8">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black mb-4">
                                About <span className="text-orange-400">Me</span>
                            </h1>
                            <p className="max-w-[600px] md:text-xl text-black">
                                <span className="text-cyan-700 font-semibold">Technical Specialist and CAV Co-Lead at EcoCAR EV Challenge Team, Illinois Tech</span> with a passion for intelligent vehicle systems, automation, and AI-driven solutions.
                                <br /><br />
                                Experienced in developing advanced controllers, sensor fusion, and simulation/testing pipelines for autonomous and electric vehicles. Skilled in <span className="text-orange-500 font-semibold">C/C++, Python, MATLAB/Simulink</span>, and embedded systems, with a strong background in AI, machine learning, and real-time automotive software.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Education Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-8 w-full">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">Education</h2>
                            </div>
                            <div className="w-full max-w-3xl flex flex-col gap-8">
                                {/* Box 1 */}
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="/iit_logo.png"
                                            alt="Illinois Institute of Technology"
                                            width={100}
                                            height={100}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-white">
                                            Illinois Institute of Technology
                                            <span className="block text-orange-300 font-normal">M.A.S. in Artificial Intelligence</span>
                                        </h3>
                                        <p className="text-white mt-1">
                                            <span className="text-orange-100">GPA:</span> 4.00 <span className="ml-2 text-sm">(Aug 2023 – May 2025)</span>
                                        </p>
                                        <div className="mt-2">
                                            <span className="text-white font-semibold">Highlighted Courses:</span>
                                            <ul className="list-disc ml-5 mt-1 text-white text-sm">
                                                <li>Machine Learning</li>
                                                <li>Deep Learning</li>
                                                <li>Intelligent Systems</li>
                                                <li>Computer Vision</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Box 2 */}
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="/iub_logo.png"
                                            alt="Independent University Bangladesh"
                                            width={100}
                                            height={100}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-white">
                                            Independent University Bangladesh
                                            <span className="block text-orange-300 font-normal">B.Sc. in Computer Science and Engineering</span>
                                        </h3>
                                        <p className="text-white mt-1">
                                            <span className="text-orange-100">GPA:</span> 3.86 <span className="ml-2 text-sm">(May 2022)</span>
                                        </p>
                                        <div className="mt-2">
                                            <span className="text-white font-semibold">Highlighted Courses:</span>
                                            <ul className="list-disc ml-5 mt-1 text-white text-sm">
                                                <li>Control Systems</li>
                                                <li>Embedded Systems</li>
                                                <li>Machine Learning</li>
                                                <li>Software Engineering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Box 3 */}
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="/cambridge_logo.png"
                                            alt="Cambridge Assessment International Education"
                                            width={100}
                                            height={100}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-white">
                                            Cambridge Assessment International Education
                                            <span className="block text-orange-300 font-normal">GCE A Level &amp; O Level</span>
                                        </h3>
                                        <p className="text-white mt-1">
                                            <span className="text-orange-100">Board:</span> Cambridge University Examination Board <span className="ml-2 text-sm">(O Level: 2014 – 2016, A Level: 2016 – 2018)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Honors & Awards Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-8 w-full">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">
                                    Honors & <span className="text-orange-500">Awards</span>
                                </h2>
                            </div>
                            <div className="w-full max-w-3xl flex flex-col gap-8">
                                {/* Grainger Computing Innovation Prize */}
                                <AwardCard
                                    imageSrc="/grainger_prize.jpg"
                                    title="Grainger Computing Innovation Prize"
                                    subtitle="2nd Runners Up (2023)"
                                    shortDesc="Awarded for innovative computing solutions at Illinois Tech."
                                    detailsTitle="Grainger Computing Innovation Prize 2023"
                                    detailsDesc="The Grainger Computing Innovation Prize recognizes outstanding student teams for innovative solutions to real-world problems using computing. Our team secured 2nd Runners Up for developing an AI-powered platform for predictive maintenance in industrial systems, competing against top student projects from across the university."
                                />
                                {/* Argonne AI Innovation Award */}
                                <AwardCard
                                    imageSrc="/argonne_ai_award.jpg"
                                    title="Argonne AI Innovation Award"
                                    subtitle="2nd Place (2024-2025)"
                                    shortDesc="Recognized for excellence in AI-driven research and innovation."
                                    detailsTitle="Argonne AI Innovation Award 2024-2025"
                                    detailsDesc="The Argonne AI Innovation Award is presented by Argonne National Laboratory to student teams demonstrating exceptional AI research. Our team achieved 2nd Place for our work on autonomous vehicle sensor fusion and real-time decision-making, competing with leading teams from Midwest universities."
                                />
                                {/* Other Honors */}
                                <div className="bg-cyan-400 rounded-lg shadow p-6 flex flex-col items-center w-full">
                                    <h3 className="font-semibold text-lg text-white">Other Honors & <span className="text-orange-300">Awards</span></h3>
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
