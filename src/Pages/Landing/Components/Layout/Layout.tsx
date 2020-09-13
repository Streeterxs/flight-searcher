import React, { Props } from 'react';

import { Navbar } from './Navbar';

type landingLayout = {
    heroContent: string | JSX.Element;
    bodyContent: string | JSX.Element;
};
export const Layout = ({heroContent, bodyContent}: landingLayout) => {

    return (
        <div>
            <section className="bg-gray-500">
                <div className="container mx-auto">

                    <Navbar/>
                    {heroContent}
                </div>
            </section>
            <section>
                <div className="container mx-auto">

                    {bodyContent}
                </div>
            </section>
        </div>
    );
};
