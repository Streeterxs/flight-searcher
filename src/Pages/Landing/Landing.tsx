import React, { useState, useMemo, useCallback, useEffect } from 'react';

import { Form } from './Components';
import { DataView } from './Components';
import { flightTypes } from './flightTypes';

export const Landing = () => {

    const [flightType, setFlightType] = useState<flightTypes | null>(null);
    const [flightOrigin, setFlightOrigin] = useState<string | null>(null);
    const [flightDestiny, setFlightDestiny] = useState<string | null>(null);
    const [flightDate, setFlightDate] = useState<Date | null>(null);
    const [personNumber, setPersonNumber] = useState<number | null>(null);

    return (
        <div>
            Landing Page!
            <Form formChanges={useMemo(() => ({
                setFlightType,
                setFlightOrigin,
                setFlightDestiny,
                setFlightDate,
                setPersonNumber
            }), [])}/>
            <DataView data={useMemo(() => ({
                flightType,
                flightOrigin,
                flightDestiny,
                flightDate,
                personNumber
            }), [
                flightType,
                flightOrigin,
                flightDestiny,
                flightDate,
                personNumber
            ])}/>
        </div>
    );
};
