import { C2A } from "./C2A";
import { CV } from "./CV";

function Logo() {
    return (
    <a href="/" role="button" className="btn btn-outline btn-primary btn-circle avatar">
        <div className="w-10 rounded-full">
            <img
                src="/paulo.jpg" />
        </div>
    </a>)
}

export default function Header() {
    return (<div className="navbar bg-transparent">
        <div className="navbar-start">
            <Logo />
        </div>
        <div className="navbar-end">
            <CV text={false} outline={false} />
            <C2A />
        </div>
    </div>);
}