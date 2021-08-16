import {IoSchoolOutline} from 'react-icons/io5/'
import { RiSuitcaseLine} from 'react-icons/ri'



const contentStyle = { background: 'rgb(33, 150, 243)', color: '#fff' }
const contentArrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)'}
const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' }


const timeLineContent = [
    {
        className : 'vertical-timeline-element--custom',
        contentStyle: contentStyle,
        contentArrowStyle: contentArrowStyle,
        date: "2021 - present",
        iconStyle: iconStyle,
        icon: <IoSchoolOutline/>,
        textH3: 'Strive School - Student',
        textH4: 'Europe',
        textP : 'Full-stack web developer Bootcamp'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2020 - 2021",
        iconStyle: iconStyle,
        icon: <RiSuitcaseLine/>,
        textH3: 'UX researcher/designer at NVX Solutions',
        textH4: 'Brazil',
        textP : 'Wireframes, UX research, User journey, Persona'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2020 - 2021",
        iconStyle: iconStyle,
        icon: <IoSchoolOutline/>,
        textH3: 'Interaction Design Foundation',
        textH4: 'WorldWide',
        textP : 'Self-paced online UX design school'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2018 - 2020",
        iconStyle: iconStyle,
        icon: <RiSuitcaseLine/>,
        textH3: 'Hospitality sector',
        textH4: 'UK',
        textP : 'Worked on 2 restaurants one as supervisor'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2013 - 2015",
        iconStyle: iconStyle,
        icon: <IoSchoolOutline/>,
        textH3: 'Specialization in Traditional Chinese Medicine (Acupuncture)',
        textH4: 'Institute Jaqueline Peker/BR',
        textP : 'This was my kick-off to change my carer, because we studied human behaviour accordingly with acupuncture.'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2013 - 2018",
        iconStyle: iconStyle,
        icon: <RiSuitcaseLine color='#ffffff'/>,
        textH3: 'Veterinarian Surgeon',
        textH4: 'Brazil',
        textP : 'Yep, I have a degree in veterinary medicine and I love cats :)'
    },
    {
        className : 'vertical-timeline-element--custom',
        date: "2008 - 2013",
        iconStyle: iconStyle,
        icon: <IoSchoolOutline currentColor='white'/>,
        textH3: 'Veterinary medicine student',
        textH4: 'UDESC/Brazil',
        textP : 'Did I already say that I love cats?'
    },
    
]

export default timeLineContent