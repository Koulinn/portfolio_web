import React from 'react'
import { useScrollYPosition } from 'react-use-scroll-position';


function StackList(props) {
    const scrollY = useScrollYPosition();
    return (
        <div className={scrollY < 1000 || scrollY > 2000 ? "col-12 col-md-6 sideFadeEffect" : "col-12 col-md-6 sideFadeEffect sideFadeEffectShow"}>
                       
            <div>
                    <h4 className="text-center">{props.title} {console.log(scrollY)}</h4>
                    <ul className="d-flex flex-wrap flex-column">
                        {props.list.map((skill, i) => <li key={i}>{skill}</li>)}
                        {props.list.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
            </div>
            
        </div>
    )
}

export default StackList
