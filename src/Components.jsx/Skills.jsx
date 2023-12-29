import React from 'react'
import SkillComp from '../Atomic/SkillComp'


const Java=
[
  "1.Know the basic concepts of Java",
  "2.Good grip on OOPs concepts",
  "3.Capability to proficiently use Collection framework for program implementation.",
  "4. Competence in writing programs with robust Exception Handling",
  "5. Know how to connect Java with MySql database through  JDBC.",
  "6.Have a great idea of Advanced Java concepts-"

]

const ReactJs=
[
  "1.Know the concept of Virtual Dom.",
  "2.Well known to functional component",
  "3.Skilled in JSX syntax, enabling seamless integration of HTML-like code within JavaScript",
  "4.Good idea of Props",
  "5.Can build atomic components and reuse them.",
  "6.Can Fetch api using  Axios",
  "7.Awareness of tools like React Router for handling navigation within single-page   applications.",
  "8.Use of Material Ui, React Bootstrap and Tailwind Css with react.",
  "9.Handling routes through React Router dom"

]

const JS=
[
  "1. Good knowledge of Keyword ,operators and datatypes.",
  "2. Know the different types of Functions ",
  "3. Practice with Events and event listeners",
  "4. Knowledgeable about BOM functionalities, particularly popups and timing",
  "5. Proficient in manipulating the Document Object Model (DOM) to dynamically change webpage content and structure.",
  "6. Known to Arrays and Strings",
  "7. Aware of the Hoisting Concept"
]

const Html=
[
  "1.Proficient in creating the structure of web pages using HTML5 tags .",
  "2.Experience in building forms using <form> tags and various input types for gathering user data.",
  "3.Ability to embed multimedia elements like images, videos, and audio using appropriate HTML tags.",
  "4.Proficiency in using CSS for styling HTML elements, including fonts, colors, backgrounds, and layout design using flexbox or grid.",
  "5.Familiarity with the box model concept, including padding, margin, border properties, and their impact on element layout and spacing."

]

const Mysql=
[
  "1.My knowledge of RDBMS concepts such as Data Integrity,Constraints and Completed Joins",
  "2.Aware of the Sql Statements",
  "3.Good grip on Joins",
  "4.Known to Normalization"
]
const Skills = () => {
  return (
    <>
    <SkillComp heading={"Java"} skill={Java}/>
    <SkillComp heading={"React Js"} skill={ReactJs}/>
    <SkillComp heading={"Javascript"} skill={JS}/>
    <SkillComp heading={"Html & CSS"} skill={Html}/>
    <SkillComp heading={"MySql"} skill={Mysql}/>

    </>
  )
}

export default Skills
