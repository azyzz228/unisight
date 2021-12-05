import React from 'react'
import LogoutIcon from '../icons/LogoutIcon'
import DashboardIcon from '../icons/DashboardIcon'
import GroupIcon from '../icons/GroupIcon'
import IdeaIcon from '../icons/IdeaIcon'
import PlayIcon from '../icons/PlayIcon'
import SettingsIcon from '../icons/SettingsIcon'

function SideMenuItem(props) {
    return (
        <div className={`w-full py-2 pl-4 ${props.active ? 'bg-green-light-bg text-green-darker border-l-4 border-green-darker' : 'bg-gray-50 text-gray-400 '} ${props.margin} `} onClick={props.onClick}>
            <div className={`flex flex-row items-center ${props.space ? props.space : 'space-x-3'} `}>
                {props.icon == 'Play' && <PlayIcon isActive={props.active} />}
                {props.icon == 'Logout' && <LogoutIcon isActive={props.active} />}
                {props.icon == 'Dashboard' && <DashboardIcon isActive={props.active} />}
                {props.icon == 'Group' && <GroupIcon isActive={props.active} />}
                {props.icon == 'Idea' && <IdeaIcon isActive={props.active} />}
                {props.icon == 'Settings' && <SettingsIcon isActive={props.active} />}


                <p className="text-sm tracking-wide">{props.title}</p>
            </div>
        </div>
    )
}

export default SideMenuItem
