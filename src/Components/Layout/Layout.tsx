import React, { Props } from 'react';

import { Navbar } from './Navbar';

export const Layout = ({children}: Props<any>) => {

    return (
        <div>
            <Navbar/>
            Layout!
            {children}
        </div>
    );
};
