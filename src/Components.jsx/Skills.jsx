import React from 'react'
import { Container } from 'react-bootstrap'
import SkillComp from '../Atomic/SkillComp'


const Java=
[
  "1.Core Java And OOPs",
  "2.JDBC API",
  "3.Spring core",
  "4.Spring Hibernate",
  "5.Spring boot",
  "6.ApIs"
]

const ReactJs=
[
  "As an intermediate in react.Can create good looking componenets with dynamic inputs. "

]

const JS=
[
  "Know the deeep dive features of JS how it works, the web flow and programming logic."
]


const Mysql=
[
  "1.My knowledge of RDBMS concepts such as Data Integrity,Constraints and Completed Joins",
  "2.Aware of the Sql Statements",
  "3.Good grip on Joins",
  "4.Known to Normalization"
]

const styling=
[
  " I can use these tools for styling any webpage",
  "HTML and Css","Material UI", "Bootstrap","Tailwind CSS"

]

const Skills = () => {
  return (
    <>

<Container style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(40%, 1fr))",
  gap: "50px",
  maxWidth: "70%",
  borderRadius: "20px",
  padding: "1vw",
  
}}>
  <SkillComp heading={"Java"} skill={Java} />
  <SkillComp heading={"React Js"} skill={ReactJs} />
  <SkillComp heading={"Javascript"} skill={JS} />
  <SkillComp heading={"Styling"} skill={styling} />
  <SkillComp heading={"MySql"} skill={Mysql} />
</Container>




    </>
  )
}

export default Skills
