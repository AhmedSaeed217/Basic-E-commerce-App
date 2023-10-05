import React from 'react'

export default function ContactUs() {
    return <>
        <div className="py-5 bg-light mb-4">
            <div className="w-75 mx-auto p-4 mb-3">
                <h2 className="text-center text-black-50 mb-2">Contact Us</h2>
                <input type="text" className='form-control mb-3' placeholder='First Name' required />
                <input type="text" className='form-control mb-3' placeholder='Last Name' required />
                <input type="email" className='form-control mb-3' placeholder='Email' required />
                <input type="text" className='form-control mb-3' placeholder='Mobile Number' required />
                <button className='btn btn-success'> Send</button>
            </div>
        </div>


    </>
}
