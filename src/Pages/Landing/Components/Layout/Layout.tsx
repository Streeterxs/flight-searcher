import React, { Props } from 'react';

import { Navbar } from './Navbar';

type landingLayout = {
    heroContent: string | JSX.Element;
    bodyContent: string | JSX.Element;
};
export const Layout = ({heroContent, bodyContent}: landingLayout) => {

    return (
        <div>
            <section className="bg-gradient-to-t from-gray-600 via-gray-500 to-gray-500 px-3">
                <div className="container mx-auto">

                    <div className="w-full mb-10">
                        <Navbar/>
                    </div>
                    {heroContent}
                </div>
            </section>
            <section className="px-3">
                <div className="container mx-auto">

                    {bodyContent}
                </div>
            </section>
        </div>
    );
};
