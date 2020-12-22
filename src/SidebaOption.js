import React from 'react';
import "./SidebarOption.css"

function SidebaOption({active,Icon,title}) {
	return (
		<div className={`sidebarOption  ${active && 'sidebar__active'}`}>
		<Icon/>
		<h2>{title}</h2>
        		
		</div>
	)
}

export default SidebaOption
