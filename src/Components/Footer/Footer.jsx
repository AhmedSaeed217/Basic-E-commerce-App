import React from 'react'

export default function Footer() {
    return <>
        <footer className=' py-5 bg-secondary text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-4 ">
                        <h2 className='mb-2'>Basic E-Commerce App Using Fake API</h2>
                        <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tenetur dolore ratione vitae saepe, numquam asperiores dignissimos mollitia voluptatum neque, obcaecati incidunt eveniet ipsum. Amet pariatur cupiditate voluptatibus excepturi dolor!</p>
                    </div>

                    <div className="col-md-4 p-4">
                        <h2>Social Links Here</h2>
                        <button className='me-2 btn btn-primary p-2 rounded'>Facebook</button>
                        <button className='me-2 btn btn-primary p-2 rounded'>Twitter</button>
                        <button className='me-2 btn btn-primary p-2 rounded'>Instagram</button>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto, officia id expedita modi optio! Ducimus culpa tenetur voluptatibus error.</p>
                    </div>

                    <div className="col-md-4 p-4">
                        <h2>Other Links Here </h2>
                        <ul className='list-unstyled p-2'>
                            <li>Link1</li>
                            <li>Link2</li>
                            <li>Link3</li>
                            <li>Link4</li>
                        </ul>
                    </div>
                    <hr />
                    <p className='fs-5 text-center'>&copy; All Rights Reserved For Ahmed Saeed</p>
                </div>
            </div>
        </footer>



    </>
}
