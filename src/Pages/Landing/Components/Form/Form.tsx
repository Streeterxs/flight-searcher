import React, { useEffect, useState, useCallback } from 'react';
import { flightTypes } from '../../flightTypes';

type FormProps = {
    setFlightData: React.Dispatch<React.SetStateAction<formResult | null>>;
};

type formResult = {
    tipo: flightTypes;
    origem: string;
    destino: string;
    data: string;
    pessoas: number
};
export const Form = ({
        setFlightData
    }: FormProps ) => {

    const [tipo, setTipo] = useState<flightTypes>(flightTypes.idaevolta);
    const [origem, setOrigem] = useState<string>('');
    const [destino, setDestino] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [pessoas, setPessoas] = useState<number>(0);

    const formSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        event.preventDefault();

        setFlightData({
            tipo,
            origem,
            destino,
            data,
            pessoas
        })
    };

    const changeTipo = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTipo(+event.target.value);
    }, []);

    const changeOrigem = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setOrigem(event.target.value);
    }, []);

    const changeDestino = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDestino(event.target.value);
    }, []);

    const changeData = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
    }, []);

    const changePessoas = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPessoas(+event.target.value);
    }, []);

    useEffect(() => {

        console.log('[Form] Render');
    });

    useEffect(() => {

        console.log('[Form] formChanges changed');
    }, [setFlightData]);

    return (
        <form className="w-full">

            <div className="p-5">

                <div id="group2" className="flex mb-2">

                    <div className="mr-4">

                        <input
                            type="radio"
                            id="idavolta"
                            defaultChecked
                            value={flightTypes.idaevolta}
                            onChange={changeTipo}
                            name="group2"
                            className="mr-1"/>
                        <label className="text-gray-800" htmlFor="idavolta">Ida e volta</label>
                    </div>
                    <div className="mr-4">
                        
                        <input
                            type="radio"
                            id="ida"
                            value={flightTypes.ida}
                            onChange={changeTipo}
                            name="group2"
                            className="mr-1"/>
                        <label className="text-gray-800" htmlFor="ida">Ida</label>
                    </div>
                    <div className="mr-4">
                        
                        <input
                            type="radio"
                            id="volta"
                            value={flightTypes.volta}
                            onChange={changeTipo}
                            name="group2"
                            className="mr-1"/>
                        <label className="text-gray-800" htmlFor="volta">Volta</label>
                    </div>

                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="origem">Origem</label>
                        <input onChange={changeOrigem} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="origem"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="destino">Destino</label>
                        <input onChange={changeDestino} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="destino"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="data">Data de ida / Retorno</label>
                        <input onChange={changeData} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="data"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">
                        
                        <label className="w-full text-gray-700 text-sm" htmlFor="pessoas">Número de Pessoas</label>
                        <input onChange={changePessoas} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="pessoas"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end bg-gray-200 p-3">
                <button onClick={formSubmit} className="text-white bg-indigo-500 py-2 px-4 rounded">Busque as Viagens</button>
            </div>
        </form>
    );
};
