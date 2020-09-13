import React, { useState, useMemo, useCallback } from 'react';

import { Form, Layout } from './Components';
import { DataView } from './Components';
import { Navbar } from '../../Components/Layout';

type flightData = {
    origem: string;
    destino: string;
    data: string;
    pessoas: number
};
export const Landing = () => {

    const [flightData, setFlightData] = useState<flightData | null>(null);

    return (
        <div>
            <Layout heroContent={
                <>
                    <div className="text-center">
                        <h1 className="text-6xl text-white font-bold">
                            Viaje pelo mundo inteiro
                        </h1>
                        <h3 className="text-2xl text-teal-300 font-bold">
                            Aqui você encontra os melhores vôos do mundo
                        </h3>
                    </div>
                    <div>
                        <Form setFlightData={useCallback(setFlightData, [setFlightData])}/>
                    </div>
                </>
            } bodyContent={
                <DataView data={useMemo(() => ({
                    ...flightData
                }), [
                    flightData
                ])}/>
            }/>
        </div>
    );
};
