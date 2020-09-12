import React, { useEffect } from 'react';

import { flightTypes } from '../../flightTypes';

type FormProps = {
    formChanges: {
        setFlightType: React.Dispatch<React.SetStateAction<flightTypes | null>>;
        setFlightOrigin: React.Dispatch<React.SetStateAction<string | null>>;
        setFlightDestiny: React.Dispatch<React.SetStateAction<string | null>>;
        setFlightDate: React.Dispatch<React.SetStateAction<Date | null>>;
        setPersonNumber: React.Dispatch<React.SetStateAction<number | null>>;
    }
}
export const Form = ({
        formChanges
    }: FormProps ) => {


    useEffect(() => {

        console.log('[Form] Render');
    });

    useEffect(() => {

        console.log('[Form] formChanges changed');
    }, [formChanges]);

    return (
        <form className="px-2">

            <fieldset id="group2" onChange={(event) => console.log('event: ', event.currentTarget.nodeValue)}>

                <input type="radio" id="idavolta" value="value1" name="group2"/>
                <label htmlFor="idavolta">Ida e volta</label>

                <input type="radio" id="ida" value="value2" name="group2"/>
                <label htmlFor="ida">Ida</label>

                <input type="radio" id="volta" value="value3" name="group2"/>
                <label htmlFor="volta">Volta</label>
            </fieldset>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 md:pr-4">

                    <label className="w-full" htmlFor="origem">Origem</label>
                    <input onChange={(event) => formChanges.setFlightOrigin(event.target.value)} className="w-full" type="text" id="origem"/>
                </div>

                <div className="w-full md:w-1/4 md:pr-4">

                    <label className="w-full" htmlFor="destino">Destino</label>
                    <input className="w-full" type="text" id="destino"/>
                </div>

                <div className="w-full md:w-1/4 md:pr-4">

                    <label className="w-full" htmlFor="data">Data de ida / Retorno</label>
                    <input className="w-full" type="text" id="data"/>
                </div>

                <div className="w-full md:w-1/4 md:pr-4">
                    
                    <label className="w-full" htmlFor="pessoas">Número de Pessoas</label>
                    <input className="w-full" type="text" id="pessoas"/>
                </div>
            </div>

            <div className="flex items-center justify-end">
                <button>Busque as Viagens</button>
            </div>
        </form>
    );
};
