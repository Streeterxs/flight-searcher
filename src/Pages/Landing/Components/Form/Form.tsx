import React, { useEffect, useCallback } from 'react';

import { flightTypes } from '../../flightTypes';
import { useForm } from './useForm';

import { ReactComponent as Image} from '../../../../assets/svg/Icon/Image.svg';
import { ReactComponent as Place} from '../../../../assets/svg/Icon/Place.svg';
import { ReactComponent as Date} from '../../../../assets/svg/Icon/Date.svg';
import { ReactComponent as Person} from '../../../../assets/svg/Icon/Person.svg';

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
    }), [formValue, setFlightData]);

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

                <div className="overflow-x-auto">
                    <div id="group2" className="flex mb-2">

                        <div className="mr-4">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                type="radio"
                                defaultChecked
                                className="form-radio mr-2"
                                name="group2"
                                value={flightTypes.idaevolta}
                                onChange={changeTipo}/>
                                <span className="text-gray-800 whitespace-no-wrap">Ida e Volta</span>
                            </label>
                        </div>

                        <div className="mr-4">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                type="radio"
                                className="form-radio mr-2"
                                name="group2"
                                value={flightTypes.ida}
                                onChange={changeTipo}/>
                                <span className="text-gray-800 whitespace-no-wrap">Só Ida</span>
                            </label>
                        </div>

                        <div className="mr-4">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                type="radio"
                                className="form-radio mr-2"
                                name="group2"
                                value={flightTypes.volta}
                                onChange={changeTipo}/>
                                <span className="text-gray-800 whitespace-no-wrap">Só Volta</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap py-2">

                    <label className="w-full md:w-1/4 md:pr-4 block">

                        <span className="text-gray-700 text-sm">Origem</span>
                        <div className="relative">

                            <div className="absolute flex items-center h-full top-0 left-0">
                                <Image className="ml-3"/>
                            </div>
                            <input
                            onChange={changeOrigem}
                            className="form-input pl-10 mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                            placeholder="Insira a cidade ou origem"/>
                        </div>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Destino</span>
                        <div className="relative">

                            <div className="absolute flex items-center h-full top-0 left-0">
                                <Place className="ml-3"/>
                            </div>
                            <input
                            onChange={changeDestino}
                            className="form-input pl-10 mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                            placeholder="Insira a cidade ou destino"/>
                        </div>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Data de ida / Retorno</span>
                        <div className="relative">

                            <div className="absolute flex items-center h-full top-0 left-0">
                                <Date className="ml-3"/>
                            </div>
                            <input
                            onChange={changeData}
                            className="form-input pl-10 mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400"
                            placeholder="Insira a data"/>
                        </div>
                    </label>

                    <label className="w-full md:w-1/4 md:pr-4 block">
                        <span className="text-gray-700 text-sm">Número de Pessoas</span>
                        <div className="relative">

                            <div className="absolute flex items-center h-full top-0 left-0">
                                <Person className="ml-3"/>
                            </div>
                            <select onChange={changePessoas} className="form-select pl-10 mt-1 block w-full text-gray-800 bg-gray-100 border border-gray-400">
                                <option value="1" defaultChecked>1 pessoa</option>
                                <option value="2">2 pessoas</option>
                                <option value="3">3 pessoas</option>
                                <option value="4">4 pessoas</option>
                                <option value="5">5 pessoas</option>
                            </select>
                        </div>
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-end bg-gray-200 p-3">
                <button onClick={formSubmit} className="text-white bg-indigo-500 py-2 px-4 rounded">Busque as Viagens</button>
            </div>
        </form>
    );
};
