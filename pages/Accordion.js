import React, { useState } from 'react'

export function Accordion() {
    const [ isTOggle, setIsToggle ] = useState(false)

    return (
        <div>
            {/* { isTOggle ? 
                <h3>Show me {}</h3>
                : null
            } */}

            { isTOggle && 
                <h3>Show me {}</h3>
            }
                   
            <button
                onClick={() => setIsToggle(!isTOggle)}
            >Toggle</button>
        </div>
    )
}