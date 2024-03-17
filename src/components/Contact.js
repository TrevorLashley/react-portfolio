import SectionTitle from "./SectionTitle"
import { forwardRef } from "react"

const Contact = forwardRef((props,ref) => {

    return(
<div  ref={ref}>

<SectionTitle>Contact Me!</SectionTitle>

<div style= {{display:"flex", gap: "30px", fontSize: "1.3em"}}>
<p style={{ width: "300px"}}>Email: trevor.lashley@hotmail.ca</p>

<p style={{ width: "300px"}}>Thanks for checking out my Portfolio shoot me an E-mail to collab! 😃</p>


</div>
</div>


    )
})

export default Contact