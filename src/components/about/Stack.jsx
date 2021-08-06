import React from 'react'
import StackList from './StackList'

function Stack(props) {
    return (
        <section className="section-Margin">
            <div className="row">
                <div className="col-12 col-md-6 commonSection-Text" style={{order:props.order}}>
                    <h2>
                        Stack <span className="spanText">{props.spanText}</span>
                    </h2>
                </div>
            </div>
            <div className="row">
                <StackList title="Ux Design"></StackList>
                <StackList title="Front-End"></StackList>
            </div>
            
        </section>
    )
}

export default Stack
