import React from 'react'
import {ListGroup} from 'react-bootstrap'

function List(props) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mx-auto mt-5">
        <h5>Check out some prototypes</h5>
        <ListGroup horizontal className="my-3 list-subsection">
            {props.items.map((item, i)=> <ListGroup.Item key={i}><a href={item.link}>{item.title}</a></ListGroup.Item>) }
        </ListGroup>
        </div>
    )
}

export default List
