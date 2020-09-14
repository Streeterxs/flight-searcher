import React, { useState, useMemo, useCallback } from 'react';

import { Form, Layout } from './Components';
import { DataView } from './Components';
import { flightTypes } from './flightTypes';

type flightData = {
    tipo: flightTypes;
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
                    <div className="text-center my-5">
                        <h1 className="text-5xl text-white font-bold">
                            Viaje pelo mundo inteiro
                        </h1>
                        <h3 className="text-2xl text-teal-300 font-bold">
                            Aqui você encontra os melhores vôos do mundo
                        </h3>
                    </div>
                    <div className="relative h-48">
                        <div className="bg-white shadow-xl rounded top-0 overflow-hidden w-full">
                            <Form setFlightData={useCallback(setFlightData, [setFlightData])}/>
                        </div>
                    </div>
                </>
            } bodyContent={
                <div className="pt-72 sm:pt-64 md:pt-16">
                    <DataView title="VALOR DO FORM" data={useMemo(() => ({
                        ...flightData
                    }), [
                        flightData
                    ])}/>
                </div>
            }/>
        </div>
    );
};
