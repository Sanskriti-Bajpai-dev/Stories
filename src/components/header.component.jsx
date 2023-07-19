import React from "react";

import {ReactComponent as Logo} from './../../assets/Asset 1 1.svg';

const Header = () => {
    return(
        <div className="w-full relative min-h-[80px] z-0">
            <div className="absolute left-20">
                <Logo/>
            </div>
        </div>
    );
}

export default Header;