import React from 'react';
import './spinner.css'

export default function Spinner() {
    return <>
        <div className="d-flex justify-content-center py-5 mt-5 mb-5 ">
            <div className="spin">
                <h2 className='text-secondary'>Loading..........</h2>
                <div className="ms-5 lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </>
}
