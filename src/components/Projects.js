import game1 from "../assets/game1.JPG"
import SectionTitle from "./SectionTitle"
import game2 from "../assets/The_Great_Frog.JPG"
import { forwardRef } from "react"

const Projects = forwardRef((props,ref) => {

    return(

<div ref={ref}>
<SectionTitle>Projects</SectionTitle>
<div className="responsive-columns"style={{ gap: "30px"}}>
<h2 style={{ width: "300px"}}>Shuriken Dodge Game</h2>
<a href="https://project-js-nyan-cat-silk.vercel.app/" target="_blank"><img style={{ width: "300px"}}src={game1}></img></a>
</div>
<div className="responsive-columns"style={{ gap: "30px"}}>
<h2 style={{ width: "300px"}}>The Great Frog Race</h2>
<a href="https://js-thedom-p2-2tfa.vercel.app/" target="_blank"><img style={{ width: "300px"}}src={game2}></img></a>
</div>

</div>

    )
})



export default Projects