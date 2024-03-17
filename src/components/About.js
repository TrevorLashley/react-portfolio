import Picture2 from "../assets/aboutme1.jpg"

const About = () => {

    return(
<div>

<h1 style={{borderStyle: "outset", padding: "10px", width: "fit-content"}}>About</h1>

<div style= {{display:"flex", gap: "30px"}}>
<p style={{ width: "300px"}}>I'm a versatile individual with a wide array of interests, encompassing coding, calisthenics, and photography. Driven by a sharp attention to detail and a profound passion for creativity, I immerse myself in the intricacies of programming while also finding tranquility in capturing fleeting moments through the lens of my camera.</p>

<img style={{ width: "300px"}}src={Picture2}></img>
</div>
</div>


    )
}

export default About