import { VerticalTimelineElement } from 'react-vertical-timeline-component';


import React from 'react'

function TimeLineElement({className, contentStyle, contentArrowStyle,
date, iconStyle, icon, textH3, textH4, textP}) {
    return (
        <VerticalTimelineElement
                className={className}
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date={date}
                iconStyle={iconStyle}
                icon={icon}
            >
                <h3 className="vertical-timeline-element-title">{textH3}</h3>
                <h4 className="vertical-timeline-element-subtitle">{textH4}</h4>
                <p>
                    {textP}
                </p>
            </VerticalTimelineElement>
    )
}

export default TimeLineElement
