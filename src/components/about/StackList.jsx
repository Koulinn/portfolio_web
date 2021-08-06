import React from 'react'

function StackList(props) {
    return (
        <div className="col-12 col-md-6">
            <h4 className="text-center">{props.title}</h4>
            <ul className="d-flex flex-wrap flex-column">
                {props.list.map((skill, i) => <li key={i}>{skill}</li>)}
                {props.list.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default StackList
