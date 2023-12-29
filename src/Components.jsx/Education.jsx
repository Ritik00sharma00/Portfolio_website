import React from 'react'
import CardComp from '../Atomic/CardComp'

const Education = () => {
  return (
  <>
  <CardComp course={"Btech(IT)"} board={"Biju Patanaik University of Technolog And Engineering"} year={"2019-2023"}  percentagve={"75%"}/>
  <CardComp course={"12th PCM)"} board={"State board CHSE"} year={"2018-2019"} />
  <CardComp course={"10th"} board={"CBSE"} year={"2017"}  percentage={"76%"}/>
  <CardComp course={"offline Java And React Js fullstack course"} board={"Jspiders"} year={"6months"} />
  </>
  )
}

export default Education
