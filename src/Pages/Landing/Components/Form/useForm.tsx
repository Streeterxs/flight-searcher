import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { flightTypes } from '../../flightTypes';

type useFormReturn = [
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    {
        tipo: flightTypes,
        origem: string,
        destino: string,
        data: string,
        pessoas: number,
    }
];

export const useForm = (): useFormReturn => {

    const [tipo, setTipo] = useState<flightTypes>(flightTypes.idaevolta);
    const [origem, setOrigem] = useState<string>('');
    const [destino, setDestino] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [pessoas, setPessoas] = useState<number>(0);


    const changeTipo = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTipo(+event.target.value);
    }, [setTipo]);

    const changeOrigem = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('changeOrigem event.target.value: ', event.target.value);
        setOrigem(event.target.value);
    }, [setOrigem]);

    const changeDestino = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDestino(event.target.value);
    }, [setDestino]);

    const changeData = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
    }, [setData]);

    const changePessoas = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPessoas(+event.target.value);
    }, [setPessoas]);

    const formValue = useMemo(() => ({
        tipo,
        origem,
        destino,
        data,
        pessoas
    }), [
        tipo,
        origem,
        destino,
        data,
        pessoas
    ]);
    return [
        changeTipo,
        changeOrigem,
        changeDestino,
        changeData,
        changePessoas,
        formValue
    ];
};