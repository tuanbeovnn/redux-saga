import React, {Fragment} from 'react'; 
import {Route} from 'react-router-dom'; 
import SidebarCyberBugs from '../../components/CyberBugs/SidebarCyberBugs';
import MenuCyberBugs from '../../components/CyberBugs/MenuCyberBugs';
import '../../index.css'; 
import ModalCyberBugs from '../../components/CyberBugs/ModalCyberBugs/ModalCyberBugs';
export default function CyberbugsTemplate(props) {
    const {Component, ...restParam} = props; 
    return <Route {...restParam} render = {(propsRoute)=>{
        return <>
        <div className="jira">
        <SidebarCyberBugs/>
        <MenuCyberBugs/>          
        <Component {...propsRoute}/>      
        </div>
       <ModalCyberBugs/>
            {/* <Component {...propsRoute}/> */}
        </>
    }}/>
}
