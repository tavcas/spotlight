import { GoDownload } from "react-icons/go";

type CVProps = {
    icon: boolean
    text: boolean
    outline: boolean
}

export function CV({ icon = true, text = true, outline = true }: CVProps) {
    return (
        <a className={`btn rounded-full ${outline ? "btn-outline" : "btn-ghost"}`} href="/resume.pdf" target="_blank">
            {icon && <GoDownload />}
            {text && "Get my Resume"}
        </a>
    );
}