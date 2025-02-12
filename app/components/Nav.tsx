import ScrollSpy from 'react-scrollspy-navigation';
export default function Nav() {
    return (
        <ScrollSpy behavior="smooth" activeClass="active">
            <div className="btm-nav bottom-[10vh]">
                <a href="#about">About me</a>
                <a href="#stack">Stack</a>
                <a href="#experience">Experience</a>
            </div>
        </ScrollSpy>)
}