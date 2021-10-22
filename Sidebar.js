import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className = "sidebar">
            <SidebarRow src={user.photoURL} 
            title={user.displayName} />

            <SidebarRow Icon={FileCopyTwoToneIcon} title="Pages"/>
            <SidebarRow Icon= {PeopleAltTwoToneIcon}  title="FriendFaces"/>
            <SidebarRow Icon={ChatTwoToneIcon}   title="Messenger"/>
            <SidebarRow Icon={StoreTwoToneIcon}   title="Marketplace"/>
            <SidebarRow Icon={OndemandVideoTwoToneIcon}   title="Videos"/>
            <SidebarRow Icon={ExpandMoreTwoToneIcon}   title="Marketplace"    />
        </div>
    )
}

export default Sidebar


