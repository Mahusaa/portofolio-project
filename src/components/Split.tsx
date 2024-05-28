import { FaGithub } from "react-icons/fa";
import ExperienceCard from './ExperienceCard'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import About from "./About";


const Split = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen gap-4">
            <div className="lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-20">
                <div className="flex flex-col gap-12 text-center lg:text-left">
                    <h1 className="text-slate-200 opacity-80 select-none text-shadow-md text-4xl md:text-6xl">Usamah Hafizh</h1>
                    <h6 className="text-slate-200 opacity-80 text-shadow-md text-xl md:text-2xl">Fullstack Web Developer</h6>
                    <p className="text-slate-300 opacity-80 text-lg">My expertise lies in crafting sleek, high-performance web apps with a focus on simplicity.</p>
                    <div className="flex justify-center lg:justify-start gap-6 text-3xl mt-10 text-slate-400">
                        <a href="https://github.com/Mahusaa" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-slate-200" />
                        </a>
                        <FaLinkedin className="hover:text-slate-200" />
                        <IoLogoVercel className="hover:text-slate-200" />
                        <FaInstagram className="hover:text-slate-200" />
                        <FaSquareXTwitter className="hover:text-slate-200" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 p-4 lg:overflow-auto">
                <div className="space-y-4">
                    <About />
                    <ExperienceCard />
                </div>
            </div>
        </div>
    );
};



export default Split;