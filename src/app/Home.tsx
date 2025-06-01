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
                                    href="https://github.com/ehtnamuh?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="./logos/github-mark.png"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/samin-bin-karim-/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="./logos/linkedin.png"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="https://medium.com/@saminbinkarim"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center shadow hover:bg-cyan-50 transition"
                                >
                                    <Image
                                        src="./logos/medium.jpeg"
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
                                {/* IIT */}
                                <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="./logos/iit_logo.png"
                                            alt="Illinois Institute of Technology"
                                            width={300}
                                            height={150}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-black">
                                            Illinois Institute of Technology
                                            <span className="block text-orange-500 font-normal">M.A.S. in Artificial Intelligence</span>
                                        </h3>
                                        <p className="text-black mt-1">
                                            <span className="text-cyan-700">GPA:</span> 3.9 <span className="ml-2 text-sm">(Aug 2023 – May 2025)</span>
                                        </p>
                                        <div className="mt-2">
                                            <span className="text-black font-semibold">Highlighted Courses:</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {["Robotics", "Machine Learning", "Deep Learning", "Advanced AI", "Trustworthy AI", "Data Driven Modeling"].map(course => (
                                                    <span
                                                        key={course}
                                                        className="bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-medium shadow"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* IUB */}
                                <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="./logos/iub_logo.jpg"
                                            alt="Independent University Bangladesh"
                                            width={160}
                                            height={160}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-black">
                                            Independent University Bangladesh
                                            <span className="block text-orange-500 font-normal">B.Sc. in Computer Science and Engineering</span>
                                        </h3>
                                        <p className="text-black mt-1">
                                            <span className="text-cyan-700">GPA:</span> 3.86 <span className="ml-2 text-sm">(May 2022)</span>
                                        </p>
                                        <div className="mt-2">
                                            <span className="text-black font-semibold">Highlighted Courses:</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {["Numerical Methods", "Artificial Intelligence", "Machine Learning", "Software Engineering"].map(course => (
                                                    <span
                                                        key={course}
                                                        className="bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-medium shadow"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* CIE */}
                                {/* Advanced Level */}
                                <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="./logos/cie_logo.png"
                                            alt="Cambridge Assessment International Education"
                                            width={150}
                                            height={150}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-black">
                                            Oxford International School
                                            <span className="block text-orange-500 font-normal">Advanced Level (A Level)</span>
                                        </h3>
                                        <p className="text-black mt-1">
                                            <span className="text-cyan-700">Board:</span> Cambridge International Examinations
                                            <span className="ml-2 text-sm">(2016 – 2018)</span>
                                        </p>
                                        <p className="text-black mt-1">
                                            <span className="font-semibold">Group:</span> Computer Science, Mathematics, Physics, Chemistry
                                        </p>
                                        <p className="text-black mt-1">
                                            <span className="font-semibold">Result:</span> A, A, A, A
                                        </p>
                                    </div>
                                </div>
                                {/* Ordinary Level */}
                                <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col md:flex-row items-center w-full">
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                        <Image
                                            src="./logos/cie_logo.png"
                                            alt="Cambridge Assessment International Education"
                                            width={150}
                                            height={150}
                                            className="rounded-lg object-contain bg-white p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:pl-8 w-full">
                                        <h3 className="font-semibold text-lg text-black">
                                            Oxford International School
                                            <span className="block text-orange-500 font-normal">Ordinary Level (O Level)</span>
                                        </h3>
                                        <p className="text-black mt-1">
                                            <span className="text-cyan-700">Board:</span> Cambridge International Examinations
                                            <span className="ml-2 text-sm">(2014 – 2016)</span>
                                        </p>
                                        <p className="text-black mt-1">
                                            <span className="font-semibold">Group:</span> English Language, Bengali, Mathematics, Additional Mathematics, Environmental Management, Physics, Chemistry, Biology, Computer Studies, Bangladesh Studies
                                        </p>
                                        <p className="text-black mt-1">
                                            <span className="font-semibold">Result:</span> A, A, A, A, A, A, A, A, A, A, A
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Honors & Awards Section */}
                {/* TODO: Add links to the projects that won you the award and the competition pages */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-12 w-full">
                            <div className="space-y-2 text-center">
                                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cyan-700">
                                    Honors & <span className="text-orange-500">Awards</span>
                                </h2>
                            </div>
                            <div className="w-full max-w-6xl flex flex-col items-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                                    {/* Grainger Computing Innovation Prize */}
                                    <div className="col-span-1 flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-10 hover:bg-gray-300 transition cursor-pointer min-h-[420px]">
                                        <Image
                                            src="./grainger_prize.jpeg"
                                            alt="Grainger Computing Innovation Prize"
                                            width={450}
                                            height={450}
                                            className="rounded-xl object-contain bg-white p-4 mb-6"
                                        />
                                        <h3 className="font-semibold text-2xl text-black text-center">Grainger Computing Innovation Prize</h3>
                                        <span className="text-cyan-700 text-lg text-center">2nd Runners Up (2023)</span>
                                        <p className="text-black mt-4 text-base text-center">
                                            Awarded for innovative computing solutions at Illinois Tech.
                                        </p>
                                    </div>
                                    {/* Argonne AI Innovation Award */}
                                    <div className="col-span-1 flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-10 hover:bg-gray-300 transition cursor-pointer min-h-[420px]">
                                        <Image
                                            src="./argonne_ai_award.jpg"
                                            alt="Argonne AI Innovation Award"
                                            width={600}
                                            height={600}
                                            className="rounded-xl object-contain bg-white p-4 mb-6"
                                        />
                                        <h3 className="font-semibold text-2xl text-black text-center">Argonne AI Innovation Award</h3>
                                        <span className="text-cyan-700 text-lg text-center">2nd Place (2024-2025)</span>
                                        <p className="text-black mt-4 text-base text-center">
                                            Recognized for excellence in AI-driven research and innovation.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 mt-12 w-full">
                                    {/* Other Honors */}
                                    <div className="flex justify-center">
                                        <div className="bg-gray-200 rounded-2xl shadow-lg p-10 flex flex-col items-center w-full md:w-2/3 lg:w-1/2">
                                            <h3 className="font-semibold text-2xl text-black">Other Honors & <span className="text-orange-500">Awards</span></h3>
                                            <ul className="list-disc ml-7 mt-4 text-black text-base text-left">
                                                <li>Dean’s List (2019-2022)</li>
                                                <li className="text-cyan-700">IEEE Robotics Competition Winner (2021)</li>
                                                <li>Undergraduate Research Grant Recipient</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Experience Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="space-y-6 text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">Experience</h2>
                        </div>
                        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
                            {/* Timeline vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400 z-0" />
                            <div className="space-y-16 w-full z-10">
                                {/* EcoCAR EV Challenge Team */}
                                <div className="flex flex-col md:flex-row items-center w-full relative">
                                    <div className="md:w-1/4 flex justify-center md:justify-end mb-4 md:mb-0 md:pr-8">
                                        <Image
                                            src="/logos/iit_logo.png"
                                            alt="Illinois Tech"
                                            width={80}
                                            height={80}
                                            className="rounded-xl object-contain bg-white p-2 border-2 border-cyan-400 shadow"
                                        />
                                    </div>
                                    <div className="md:w-3/4 bg-white rounded-lg shadow p-6 text-left flex flex-col items-center md:items-start border-l-4 border-cyan-400">
                                        <h3 className="font-semibold text-lg text-cyan-700 text-center md:text-left">Technical Specialist & CAV Co-Lead</h3>
                                        <p className="text-gray-700 text-center md:text-left">EcoCAR EV Challenge Team, Illinois Institute of Technology | Sept 2023 – Present</p>
                                        <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                            <li>Led development of torque pathway, regenerative braking, and lateral controllers (Stanley, MPC, PID) for advanced vehicle automation.</li>
                                            <li>Developed Autopark using 2D grid occupancy maps from simulated ultrasonic sensors.</li>
                                            <li>Integrated Magna Motor, PCM controller, and IMD into powermoding system; tested in HIL/VIL using Speedgoat.</li>
                                            <li>Designed and tested stateflows for vehicle startup/shutdown, and created custom DBC files for controller communication.</li>
                                            <li>Developed sensor fusion, Adaptive Cruise Control (ACC), and Lane Centering Control (LCC) in C++/Simulink; performed MIL/SIL testing and requirements analysis.</li>
                                            <li>Built data visualization and automation pipelines in MATLAB for CAN/ASC/BLF data analysis and test case generation.</li>
                                            <li>Collaborated on RoarRunner integration and troubleshooting with ACDelco, MDI Tool, and Bender IMD.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* H2.0 Resilience */}
                                <div className="flex flex-col md:flex-row-reverse items-center w-full relative">
                                    <div className="md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0 md:pl-8">
                                        <Image
                                            src="/logos/h2o_logo.png"
                                            alt="H2.0 Resilience"
                                            width={80}
                                            height={80}
                                            className="rounded-xl object-contain bg-white p-2 border-2 border-cyan-400 shadow"
                                            onError={(e) => { (e.target as HTMLImageElement).src = "/logos/iit_logo.png" }}
                                        />
                                    </div>
                                    <div className="md:w-3/4 bg-white rounded-lg shadow p-6 text-left flex flex-col items-center md:items-start border-r-4 md:border-l-0 border-cyan-400">
                                        <h3 className="font-semibold text-lg text-cyan-700 text-center md:text-left">Lead Developer, H2.0 Resilience – AI-based Urban Flood Mitigation</h3>
                                        <p className="text-gray-700 text-center md:text-left">IIT Startup Accelerator, Chicago, IL | Jan 2024 – Present</p>
                                        <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                            <li>Designed interpretable Vision Transformer-based models for flood prediction using real-time data.</li>
                                            <li>Partnered with MWRD and Floodflash to deliver AI-driven solutions for city planning and disaster management.</li>
                                            <li>Awarded 3rd place in Grainger Computing Innovation Prize 2023.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Research Assistant */}
                                <div className="flex flex-col md:flex-row items-center w-full relative">
                                    <div className="md:w-1/4 flex justify-center md:justify-end mb-4 md:mb-0 md:pr-8">
                                        <Image
                                            src="/logos/iub_logo.jpg"
                                            alt="IUB"
                                            width={80}
                                            height={80}
                                            className="rounded-xl object-contain bg-white p-2 border-2 border-cyan-400 shadow"
                                        />
                                    </div>
                                    <div className="md:w-3/4 bg-white rounded-lg shadow p-6 text-left flex flex-col items-center md:items-start border-l-4 border-cyan-400">
                                        <h3 className="font-semibold text-lg text-cyan-700 text-center md:text-left">Full Time Research Assistant</h3>
                                        <p className="text-gray-700 text-center md:text-left">Independent University Bangladesh | Feb 2022 – Jun 2023</p>
                                        <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                            <li>Finalized and submitted research on Shologuti Reinforcement Environment (Unity); built traffic simulations in C++/Lua.</li>
                                            <li>Tested and modified traffic simulation environments (SUMO, SMARTS, CARLA, Highway-Env).</li>
                                            <li>Trained RL agents for intersection/highway scenarios; generated synthetic data for particle clustering using Ginko and Pythia.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Teaching Assistant */}
                                <div className="flex flex-col md:flex-row-reverse items-center w-full relative">
                                    <div className="md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0 md:pl-8">
                                        <Image
                                            src="/logos/iub_logo.jpg"
                                            alt="IUB"
                                            width={80}
                                            height={80}
                                            className="rounded-xl object-contain bg-white p-2 border-2 border-cyan-400 shadow"
                                        />
                                    </div>
                                    <div className="md:w-3/4 bg-white rounded-lg shadow p-6 text-left flex flex-col items-center md:items-start border-r-4 md:border-l-0 border-cyan-400">
                                        <h3 className="font-semibold text-lg text-cyan-700 text-center md:text-left">Teaching Assistant</h3>
                                        <p className="text-gray-700 text-center md:text-left">Independent University Bangladesh | Feb 2022 – Dec 2022</p>
                                        <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                            <li>Assisted with Numerical Methods course; conducted lab classes in Python, NumPy, and matplotlib.</li>
                                            <li>Created and graded programming assignments and worksheets.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Undergraduate Teaching Assistant */}
                                <div className="flex flex-col md:flex-row items-center w-full relative">
                                    <div className="md:w-1/4 flex justify-center md:justify-end mb-4 md:mb-0 md:pr-8">
                                        <Image
                                            src="/logos/iub_logo.jpg"
                                            alt="IUB"
                                            width={80}
                                            height={80}
                                            className="rounded-xl object-contain bg-white p-2 border-2 border-cyan-400 shadow"
                                        />
                                    </div>
                                    <div className="md:w-3/4 bg-white rounded-lg shadow p-6 text-left flex flex-col items-center md:items-start border-l-4 border-cyan-400">
                                        <h3 className="font-semibold text-lg text-cyan-700 text-center md:text-left">Undergraduate Teaching Assistant</h3>
                                        <p className="text-gray-700 text-center md:text-left">Independent University Bangladesh | May 2018 – Dec 2019</p>
                                        <ul className="list-disc ml-5 mt-2 text-black text-sm text-left">
                                            <li>Conducted lab programming classes in C++ for Algorithms course; assisted students with complex topics.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Volunteering Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center">
                        <div className="space-y-6 text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-cyan-700">
                                Research & <span className="text-orange-500">Volunteering</span>
                            </h2>
                            <p className="max-w-[700px] mx-auto md:text-xl text-gray-700">
                                Contributing to the community and advancing research in AI, security, and healthcare.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                            {/* Research Assistant - Wang Research Group */}
                            <div className="flex flex-col md:flex-row items-center bg-gray-200 rounded-2xl shadow-lg p-8 hover:bg-gray-300 transition min-h-[260px]">
                                <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                    <Image
                                        src="/logos/iit_logo.png"
                                        alt="Wang Research Group, IIT"
                                        width={100}
                                        height={100}
                                        className="rounded-lg object-contain bg-white p-2"
                                    />
                                </div>
                                <div className="flex flex-col items-start md:pl-8 w-full">
                                    <h3 className="font-semibold text-lg text-black">
                                        Research Assistant
                                    </h3>
                                    <span className="text-cyan-700">Wang Research Group, Illinois Institute of Technology | May 2024 – Present</span>
                                    <ul className="list-disc ml-5 mt-2 text-black text-sm">
                                        <li>Investigated security vulnerabilities in Generative AI-powered drug discovery solutions.</li>
                                        <li>Researched possible attacks on generative models and implemented defense mechanisms.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Machine Learning Specialist - Bader Lab */}
                            <div className="flex flex-col md:flex-row items-center bg-gray-200 rounded-2xl shadow-lg p-8 hover:bg-gray-300 transition min-h-[260px]">
                                <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
                                    <Image
                                        src="/logos/uchicago_logo.png"
                                        alt="Bader Lab, University of Chicago"
                                        width={100}
                                        height={100}
                                        className="rounded-lg object-contain bg-white p-2"
                                    />
                                </div>
                                <div className="flex flex-col items-start md:pl-8 w-full">
                                    <h3 className="font-semibold text-lg text-black">
                                        Machine Learning Specialist
                                    </h3>
                                    <span className="text-cyan-700">Bader Lab, University of Chicago | Sept 2023 – Present</span>
                                    <ul className="list-disc ml-5 mt-2 text-black text-sm">
                                        <li>Implemented and compared medical image segmentation models for renal cell carcinoma treatment.</li>
                                        <li>Developing novel transformer-based models with temporal awareness for improved medical imaging analysis.</li>
                                    </ul>
                                </div>
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
                            {/* Histotripsy Segmentation for Bader Lab, University of Chicago */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_histotripsy.jpg"
                                    alt="Histotripsy Segmentation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Histotripsy Segmentation</h3>
                                    <p className="text-sm text-white">Developed transformer-based models for medical image segmentation in renal cell carcinoma treatment.</p>
                                </div>
                            </div>
                            {/* Adaptive Cruise Control in C++ with Python Test Automation */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_acc_cpp.jpg"
                                    alt="Adaptive Cruise Control"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Adaptive Cruise Control (C++)</h3>
                                    <p className="text-sm text-white">Implemented ACC in C++ with Python-based test automation and MIL/SIL pipelines.</p>
                                </div>
                            </div>
                            {/* CAN Data Processing Libraries in Python */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_can.jpg"
                                    alt="CAN Data Processing"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">CAN Data Processing Libraries</h3>
                                    <p className="text-sm text-white">Built Python libraries for parsing, analyzing, and visualizing CAN/ASC/BLF vehicle data.</p>
                                </div>
                            </div>
                            {/* Modeling Vehicle ECUs using Python and Matlab */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_ecu.jpg"
                                    alt="Vehicle ECU Modeling"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Vehicle ECU Modeling</h3>
                                    <p className="text-sm text-white">Modeled automotive ECUs and communication using Python and MATLAB/Simulink.</p>
                                </div>
                            </div>
                            {/* RL-based Adaptive Cruise Control */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_rl_acc.jpg"
                                    alt="RL-based Adaptive Cruise Control"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">RL-based Adaptive Cruise Control</h3>
                                    <p className="text-sm text-white">Designed RL agents for ACC that learn and adapt to human driving preferences.</p>
                                </div>
                            </div>
                            {/* Lane Centering Controller using Stanley in C++ */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_lane_stanley.jpg"
                                    alt="Lane Centering Controller"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Lane Centering Controller (Stanley, C++)</h3>
                                    <p className="text-sm text-white">Implemented Stanley controller in C++ with Python-based test automation for lane centering.</p>
                                </div>
                            </div>
                            {/* Shologuti Game with RL-trained AI */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_shologuti.jpg"
                                    alt="Shologuti Game RL"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Shologuti Game AI</h3>
                                    <p className="text-sm text-white">Developed a Shologuti board game with AI agents trained using reinforcement learning.</p>
                                </div>
                            </div>
                            {/* Robot Arm Manipulation */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_robot_arm.jpg"
                                    alt="Robot Arm Manipulation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Robot Arm Manipulation</h3>
                                    <p className="text-sm text-white">Programmed and simulated robot arm kinematics and control for pick-and-place tasks.</p>
                                </div>
                            </div>
                            {/* Test Automation using MATLAB Scripting */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_matlab_test.jpg"
                                    alt="MATLAB Test Automation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Test Automation (MATLAB)</h3>
                                    <p className="text-sm text-white">Automated test case generation and data analysis for automotive controllers using MATLAB scripting.</p>
                                </div>
                            </div>
                            {/* Sensor Fusion Demo in Python and C++ */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_sensor_fusion.jpg"
                                    alt="Sensor Fusion Demo"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Sensor Fusion Demo</h3>
                                    <p className="text-sm text-white">Demonstrated sensor fusion algorithms in Python and C++ for autonomous vehicles.</p>
                                </div>
                            </div>
                            {/* Lua-based Vehicle Simulation */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_lua_sim.jpg"
                                    alt="Lua Vehicle Simulation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Lua-based Vehicle Simulation</h3>
                                    <p className="text-sm text-white">Built and extended vehicle simulation environments using Lua scripting.</p>
                                </div>
                            </div>
                            {/* Intersection Control Simulation */}
                            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-cyan-400 flex flex-col items-center">
                                <Image
                                    src="/project_intersection.jpg"
                                    alt="Intersection Control Simulation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-56"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                    <h3 className="text-lg font-semibold text-orange-400">Intersection Control Simulation</h3>
                                    <p className="text-sm text-white">Simulated and analyzed intersection control strategies for autonomous vehicles.</p>
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
