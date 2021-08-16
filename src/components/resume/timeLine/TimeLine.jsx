import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaFlagCheckered} from 'react-icons/fa'
import TimeData from './TimeLineContent.js'
import TimeLineElement from './TimeLineElement.jsx';

function TimeLine() {
    return (
        <VerticalTimeline className="section-Margin">
            {TimeData.map(experience => <TimeLineElement {...experience}/>)}
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaFlagCheckered />}
            />
        </VerticalTimeline>
    )
}

export default TimeLine
