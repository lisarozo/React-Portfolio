import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am very dedicated and hardworking who can do variuos tasks 
          able to multi task with multiple projects.
          I have a certificate for MIcrosoft Office Specialist
           and Digital Literacy.
          I am currently in school at UT Bootcamp for Computer Coding.
          I have good work ethic, organizational skills as well as good people skills.        </p>
      </div>
    </section>
  )
}

export default About