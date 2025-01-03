import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
  
  
  const category = props.category;
  const setCategery = props.setCategery;
  const [likedCourses, setLikedCourses] = useState([])


  function getCourses() {
    if(category==="All"){
      let allCourses = [];
      Object.values(courses).forEach((getdata) => {
        getdata.forEach((courseData) => {
          allCourses.push(courseData)
        })
      })
    return allCourses
    }
    else{
      if (!courses[category] && category !== "All") {
        return setCategery("no found data");
      }
      else{
      return courses[category]
      }
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => (
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
