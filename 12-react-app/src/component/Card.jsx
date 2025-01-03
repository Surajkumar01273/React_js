import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;

  let [redmore, setReadmore] = useState(false)
  let description = redmore ? (course.description) : `${course.description.substr(0, 100)}...`

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;



  function clickHandler() {
    //Logic for like courses
    if (likedCourses.includes(course.id)) {
      // allready liked courses so this methd unlike all courses
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id))
      toast.warning("Unlike Course");
    }
    else {
      //not liked this all courses so insert course in like courses through this line.

      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Course")

    }
  }

  function readmoreHandler(){
    setReadmore(!redmore)
  }

  return (
    <>
      <div className='w-[300px] bg-gray-900 bg-opacity-80 rounded-md'>
        <div className='relative'>
          <img src={course.image.url} alt={course.image.alt} />

          <div className='absolute right-2 bottom-2 w-[30px] h-[30px] rounded-full bg-white grid place-items-center'>
            <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder />)
              }
            </button>
          </div>
        </div>



        <div className='p-4'>
          <h1 className='text-white font-semibold text-lg leading-6'>{course.title}</h1>
          <p className='text-white pt-2'>
            {
              description
              // course.description.length > 100 ? (course.description.substr(0, 100)):(course.description)
            }
            <span className='text-sky-300 text-sm font-semibold cursor-pointer' onClick={readmoreHandler}>
              {
                redmore ? ("Show Less") : ("Read More")
              }
            </span>
          </p>
        </div>

      </div>
    </>
  )
}

export default Card
