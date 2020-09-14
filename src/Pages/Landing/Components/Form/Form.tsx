import React, { useEffect, useState, useCallback } from 'react';
import { flightTypes } from '../../flightTypes';
import { useForm } from './useForm';

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

    const [
        changeTipo,
        changeOrigem,
        changeDestino,
        changeData,
        changePessoas,
        formValue
    ] = useForm();

    const formSubmit = useCallback(((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        event.preventDefault();

        setFlightData({
            ...formValue
        });
    }), [formValue]);

    useEffect(() => {

        console.log('[Form] Render');
    });

    useEffect(() => {

        console.log('[Form] formChanges changed');
    }, [setFlightData]);

    useEffect(() => {

        console.log('[Form] formSubmit changed');
    }, [formSubmit]);

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

                <div className="flex flex-wrap py-2">

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Origem</span>
                        <input
                        onChange={changeOrigem}
                        className="form-input mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                        placeholder="Jane Doe"/>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Destino</span>
                        <input
                        onChange={changeDestino}
                        className="form-input mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                        placeholder="Jane Doe"/>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Data de ida / Retorno</span>
                        <input
                        onChange={changeData}
                        className="form-input mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                        placeholder="Jane Doe"/>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Número de Pessoas</span>
                        <input
                        onChange={changePessoas}
                        className="form-input mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                        placeholder="Jane Doe"/>
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-end bg-gray-200 p-3">
                <button onClick={formSubmit} className="text-white bg-indigo-500 py-2 px-4 rounded">Busque as Viagens</button>
            </div>
        </form>
    );
};
