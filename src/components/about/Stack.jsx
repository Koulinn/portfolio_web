import React from 'react'
import StackList from './StackList'

function Stack(props) {
    return (
        <section className='section-Margin'>
            <div className='row'>
                <div
                    className='col-12 col-md-6 commonSection-Text'
                    style={{ order: props.order }}
                >
                    <h2>Stack</h2>
                </div>
            </div>
            <div className='row'>
                <StackList
                    title='Ux Design'
                    list={[
                        'Design thinking',
                        'Usability testing',
                        'User Research',
                        'Prototyping',
                        'Persona',
                        'User Flow',
                        'User Journey',
                        'Site Map',
                    ]}
                ></StackList>
                <StackList
                    title='Front-End'
                    list={['Git Hub', 'JavaScript', 'REACT', 'HTML', 'MySQL']}
                ></StackList>
            </div>
        </section>
    )
}

export default Stack
