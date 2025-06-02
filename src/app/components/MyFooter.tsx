import Link from "next/link"

// function Footer() {
//     return (
//         <footer className="">
//             <MyFooter />
//         </footer>
//     );
// }

// export { Footer };

export default function MyFooter() {
    return (
        <footer  className="flex justify-between items-center px-6 py-4 bg-black dark:bg-gray-800 text-gray-300">
            <span>
                Made with <span className="text-red-500" aria-label="love" role="img">♥</span> by Samin Bin Karim
            </span>
            <div className="flex gap-4 items-center">
                <a
                    href="https://www.linkedin.com/in/samin-bin-karim-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group"
                >
                    <img
                        src="./logos/linkedin.png"
                        alt="LinkedIn"
                        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                    />
                </a>
                <a
                    href="https://medium.com/@saminbinkarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    className="group"
                >
                    <img
                        src="./logos/medium.jpeg"
                        alt="Medium"
                        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                    />
                </a>
                <a
                    href="https://github.com/ehtnamuh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group"
                >
                    <img
                        src="./logos/github-mark.png"
                        alt="GitHub"
                        className="w-6 h-6 invert dark:invert-0 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                    />
                </a>
            </div>
        </footer>
    );
}
