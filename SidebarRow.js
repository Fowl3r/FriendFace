import { Avatar } from "@material-ui/core";
import React from 'react';
import './SidebarRow.css';


function SiderbarRow({src, Icon, title}) {          /* To pass component Icon as a prop, MUST USE CAPITAL LETTER, so make sure file names are also Caps */
    return (
        <div className = "sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SiderbarRow
