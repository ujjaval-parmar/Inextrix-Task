import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";



const StarRating = () => {



    return (
        <div className='flex gap-2  group items-center my-5'>

            <h3 className='text-lg'>Give us Rating:</h3>
            <Star />

        </div>
    )
}

const Star = () => {
    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(0);

    return (
        Array(5).fill('').map((item, i) => {
            return (<div
                key={i}
                className={`text-2xl md:text-3xl`}
                onClick={() => setRating(i)}>
                <IconContext.Provider
                    value={{
                        className: (rating >= i || hoverState>=i) ? 'stars' : ''
                    }}
                    size={0}
                >

                    <FaStar 
                    onMouseEnter={()=> setHoverState(i)}
                    onMouseLeave={()=> setHoverState(0)}
                    className='transition-all duration-300'
                    />

                </IconContext.Provider>
            </div>)
        }))
}

export default StarRating