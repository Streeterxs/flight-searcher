import React, { Props } from 'react';

import { Navbar } from './Navbar';

export const Layout = ({children}: Props<any>) => {

    return (
        <div className="container mx-auto">
            <div className="w-full">
                <Navbar/>
                Layout!
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};
