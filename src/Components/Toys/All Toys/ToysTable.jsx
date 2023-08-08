import React from 'react';

import ToysCard from './ToysCard';
import ToysTableHeader from './ToysTableHeader';

const ToysTable = ({ toys }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <ToysTableHeader />
                <tbody>
                    {toys.map(toy => (
                        <ToysCard key={toy._id} toy={toy} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToysTable;
