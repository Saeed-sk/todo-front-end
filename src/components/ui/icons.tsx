// components/Icons.tsx
import React from "react";
import {IoCloseSharp} from "react-icons/io5";
import {MdLightMode, MdNavigateNext} from "react-icons/md";
import {MdNightlight} from "react-icons/md";
import {SlLogin} from "react-icons/sl";
import {CgMenuRight} from "react-icons/cg";
import {FaCalendarAlt} from "react-icons/fa";
import {TbGrid3X3} from "react-icons/tb";
import {LuLayoutDashboard} from "react-icons/lu";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import {TiPlus} from "react-icons/ti";


type IconComponent = React.FC<{ className?: string }>;

interface Props {
    name: string;
    className?: string;
}

export const Icons: React.FC<Props> = ({name, className = ""}) => {
    let DynamicComponent: IconComponent;

    switch (name) {
        case "close":
            DynamicComponent = IoCloseSharp;
            break;
        case "login":
            DynamicComponent = SlLogin;
            break;
        case "task":
            DynamicComponent = TbGrid3X3;
            break;
        case "plus":
            DynamicComponent = TiPlus ;
            break;
        case "star-outline":
            DynamicComponent = CiStar;
            break;
        case "star-fill":
            DynamicComponent = FaStar;
            break;
        case "dashboard":
            DynamicComponent = LuLayoutDashboard;
            break;
        case "next":
            DynamicComponent = MdNavigateNext;
            break;
        case "calendar":
            DynamicComponent = FaCalendarAlt;
            break;
        case "menu":
            DynamicComponent = CgMenuRight;
            break;
        case "light":
            DynamicComponent = MdLightMode;
            break;
        case "dark":
            DynamicComponent = MdNightlight;
            break;
        default:
            DynamicComponent = IoCloseSharp;
    }

    return <DynamicComponent className={className}/>;
};
