import React, { useEffect } from 'react';

type DataViewProps = {

    data: any
};
export const DataView = ({data}: DataViewProps) => {


    useEffect(() => {

        console.log('[DataView] Render');
    });

    useEffect(() => {

        console.log('[DataView] Data Changed');
    }, [data]);

    return (
        <div>
            Dataview!
            <pre className="font-mono">
                {
                    JSON.stringify(data, null, '   ')
                }
            </pre>
        </div>
    );
};
