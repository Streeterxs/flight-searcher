import React, { useState, useCallback } from 'react';

import { ReactComponent as Logo} from '../../../../../assets/svg/Icon/Logo.svg';
import { ReactComponent as Menu} from '../../../../../assets/svg/Icon/Menu.svg';
export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const changeMenu = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);
    return (

        <nav className="flex items-center justify-between flex-wrap border-b-1 p-5 text-white">

            <div className="flex items-center flex-shrink-0 mr-6">
                <Logo className="w-12 h-12 mr-2"/>
                <span className="text-base">Explore</span>
            </div>
    
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 rounded text-white" onClick={changeMenu}>
                    <Menu className=" text-white w-10 h-10"/>
                </button>
            </div>

            <div className={`w-full ${openMenu ? 'block': 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">

                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                        Sobre Nós
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                        Seguros
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
                        Hotéis
                    </a>
                </div>

                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 mx-2 leading-none rounded hover:border-transparent mt-4 lg:mt-0">Viagens</a>
                    <a href="#" className="inline-block text-sm px-4 p-3 leading-none border border-opacity-75 border-gray-400 rounded hover:border-transparent mt-4 lg:mt-0">Login</a>
                </div>
            </div>
        </nav>
    );
};
