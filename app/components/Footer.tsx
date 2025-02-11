import { SiVite, SiRemix, SiTailwindcss } from "react-icons/si";

export default function Footer() {
    return (
        <div className="flex fixed bottom-0 bg-neutral text-white w-screen mt-5 p-5 gap-3">
            <div>
                <p>
                    Developed by me! with these technologies
                </p>
            </div>
            <div className="tooltip tooltip-right" data-tip="Connect with me on LinkedIn">
                <a href="https://linkedin.com/in/paulo-tavares-dev" target="_blank" className="text-xl">
                    <SiVite />
                </a>
            </div>
            <div className="tooltip tooltip-right" data-tip="Checkout my Github">
                <a href="https://github.com/tavcas" target="_blank" className="text-xl">
                    <SiRemix />
                </a>
            </div>
            <div className="tooltip tooltip-right" data-tip="Text me via Telegram">
                <a href="https://t.me/solarpaulo307" target="_blank" className="text-xl">
                    <SiTailwindcss />
                </a>
            </div>
        </div>
    )
}