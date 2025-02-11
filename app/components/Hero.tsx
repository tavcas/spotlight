import { C2A } from "./C2A";
import { CV } from "./CV";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="/paulo.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">
                        It's me, Paulo
                    </h1>
                    <div className="flex content-start justify-start mt-5 gap-3">
                        <div className="tooltip tooltip-right" data-tip="Connect with me on LinkedIn">
                            <a href="https://linkedin.com/in/paulo-tavares-dev" target="_blank" className="text-xl">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="tooltip tooltip-right" data-tip="Checkout my Github">
                            <a href="https://github.com/tavcas" target="_blank" className="text-xl">
                                <FaGithub />
                            </a>
                        </div>
                        <div className="tooltip tooltip-right" data-tip="Text me via Telegram">
                            <a href="https://t.me/solarpaulo307" target="_blank" className="text-xl">
                                <FaTelegramPlane />
                            </a>
                        </div>
                        <div className="tooltip tooltip-right" data-tip="Send me an email">
                            <a href="mailto:paulotavcas@gmail.com" target="_blank" className="text-xl">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                    <p className="py-6">
                        Hi I'm a Software engineer based in the Dominican Republic. I have
                        worked in the industry for around 12 years and working as a remote
                        engineer since 2018
                    </p>

                    <div className="flex gap-1">
                        <C2A />
                        <CV />
                    </div>
                </div>
            </div>
        </div>);
}