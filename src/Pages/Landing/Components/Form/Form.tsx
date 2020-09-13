import React, { useEffect, useState, useCallback } from 'react';

type FormProps = {
    setFlightData: React.Dispatch<React.SetStateAction<formResult | null>>;
};

type formResult = {
    origem: string;
    destino: string;
    data: string;
    pessoas: number
};
export const Form = ({
        setFlightData
    }: FormProps ) => {

    const [origem, setOrigem] = useState<string>('');
    const [destino, setDestino] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [pessoas, setPessoas] = useState<number>(0);

    const formSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        event.preventDefault();

        setFlightData({
            origem,
            destino,
            data,
            pessoas
        })
    }

    useEffect(() => {

        console.log('[Form] Render');
    });

    useEffect(() => {

        console.log('[Form] formChanges changed');
    }, [setFlightData]);

    return (
        <form className="w-full">

            <div className="p-5">

                <div id="group2" className="flex mb-2" onChange={(event) => console.log('event: ', event.currentTarget.nodeValue)}>

                    <div className="mr-4">

                        <input type="radio" id="idavolta" value="value1" name="group2" className="mr-1"/>
                        <label className="text-gray-800" htmlFor="idavolta">Ida e volta</label>
                    </div>
                    <div className="mr-4">
                        
                        <input type="radio" id="ida" value="value2" name="group2" className="mr-1"/>
                        <label className="text-gray-800" htmlFor="ida">Ida</label>
                    </div>
                    <div className="mr-4">
                        
                        <input type="radio" id="volta" value="value3" name="group2" className="mr-1"/>
                        <label className="text-gray-800" htmlFor="volta">Volta</label>
                    </div>

                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="origem">Origem</label>
                        <input onChange={(event) => {setOrigem(event.target.value)}} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="origem"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="destino">Destino</label>
                        <input onChange={(event) => {setDestino(event.target.value)}} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="destino"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">

                        <label className="w-full text-gray-700 text-sm" htmlFor="data">Data de ida / Retorno</label>
                        <input onChange={(event) => {setData(event.target.value)}} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="data"/>
                    </div>

                    <div className="w-full md:w-1/4 md:pr-4">
                        
                        <label className="w-full text-gray-700 text-sm" htmlFor="pessoas">Número de Pessoas</label>
                        <input onChange={(event) => {setPessoas(+event.target.value)}} className="w-full rounded p-1 text-gray-800 bg-gray-100 border border-gray-400" type="text" id="pessoas"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end bg-gray-200 p-3">
                <button onClick={formSubmit} className="text-white bg-indigo-500 py-2 px-4 rounded">Busque as Viagens</button>
            </div>
        </form>
    );
};
