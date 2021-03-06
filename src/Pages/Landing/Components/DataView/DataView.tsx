import React from 'react';

type DataViewProps = {

    title: string;
    data: any;
};
export const DataView = ({title, data}: DataViewProps) => {

    return (
        <div className="p-4  mx-auto block overflow-x-auto h">
            <pre className="font-mono flex h-full">
                <span className="rounded bg-gray-200 p-4 w-190 mx-auto my-auto">
                    <h1 className="font-normal text-gray-700">
                        {title}
                    </h1>
                    {
                        JSON.stringify(data, null, '   ')
                    }
                </span>
            </pre>
        </div>
    );
};
