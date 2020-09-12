import React, { useState, useMemo, useCallback } from 'react';

import { Form } from './Components';
import { DataView } from './Components';

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
            Landing Page!
            <Form setFlightData={useCallback(setFlightData, [setFlightData])}/>
            <DataView data={useMemo(() => ({
                ...flightData
            }), [
                flightData
            ])}/>
        </div>
    );
};
