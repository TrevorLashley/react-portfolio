import { forwardRef } from "react"
import Picture2 from "../assets/aboutme1.jpg"
import SectionTitle from "./SectionTitle"

const About = forwardRef((props,ref) => {

    return(
<div ref={ref}>

<SectionTitle>About</SectionTitle>

<div style= {{display:"flex", gap: "30px",fontSize: "1.3em"}}>
<p style={{ width: "300px"}}>I'm a versatile individual with a wide array of interests, encompassing coding, calisthenics, and photography. Driven by a sharp attention to detail and a profound passion for creativity, I immerse myself in the intricacies of programming while also finding tranquility in capturing fleeting moments through the lens of my camera.</p>

<img style={{ width: "300px"}}src={Picture2}></img>
</div>
</div>


    )
})

export default About