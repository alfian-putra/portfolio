import { useMouse } from "@uidotdev/usehooks";

import "../index.css";



function HeaderSection(props){

    const [mouse, ref] = useMouse();
    const xIntersecting = mouse.x;
    const yIntersecting = mouse.y;

    let windowsHigh = window.innerHeight;
    let size = 80;

    return (
        <div className="header">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default HeaderSection;