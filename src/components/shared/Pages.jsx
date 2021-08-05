import React from 'react'
import About from '../about/About'
import Home from '../home/Home'
import Portfolio from '../porfolio/Portfolio'
import Resume from '../resume/Resume'
import { Route, HashRouter } from 'react-router-dom';


function Pages(props) {
    return (
        <>
           <HashRouter basename="/">
               <Route path="/" exact render={(routerProps) => <Home isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} {...routerProps}></Home> }></Route>
               <Route path="/about" exact render={(routerProps) => <About isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} {...routerProps}></About> }></Route>
               <Route path="/portfolio" exact render={(routerProps) => <Portfolio isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} {...routerProps}></Portfolio> }></Route>
               <Route path="/resume" exact render={(routerProps) => <Resume isTabletOrMobile={props.isTabletOrMobile} isMobile={props.isMobile} {...routerProps}></Resume> }></Route>
           </HashRouter> 
        </>
    )
}

export default Pages
