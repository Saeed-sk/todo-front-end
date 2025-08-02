// components/Icons.tsx
import React from "react";
import {IoCloseSharp} from "react-icons/io5";
import {MdLightMode, MdNavigateNext} from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import {SlLogin} from "react-icons/sl";
import {CgMenuRight} from "react-icons/cg";


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
        case "next":
            DynamicComponent = MdNavigateNext;
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
