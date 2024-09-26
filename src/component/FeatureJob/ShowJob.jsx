import React from 'react';

const ShowJob = ({job}) => {
    const{company_name,id}=job
    return (
        <div>
            <p>{company_name}</p>
            <p>{id}</p>
        </div>
    );
};

export default ShowJob;