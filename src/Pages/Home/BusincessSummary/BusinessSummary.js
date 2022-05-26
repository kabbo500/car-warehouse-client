import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <div className="container  my-20">
                <h2 className='d-flex mb-4 justify-content-center text-primary text-4xl'>Our Business Summary</h2>
                <h2 className='d-flex mb-4 justify-content-center text-primary text-2xl'>Thousands Retailer Trust Us</h2>
                <div className="row ">

                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success text-5xl'>45</h5>
                        <p className='text-2xl'>COUNTRIES</p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success text-5xl'>1000+</h5>
                        <p className='text-2xl'>SHIPMENT DELIVERY</p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success text-5xl'>920+
                        </h5>
                        <p className='text-2xl'>HAPPY CUSTOMER

                        </p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12 ">
                        <h5 className='text-success text-5xl'>614+
                        </h5>
                        <p className='text-2xl'>CUSTOMER'S FEEDBACK

                        </p>
                    </div>

                </div>

            </div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='text-success font-bold'>Have nay question in your mind?</p>
                    <h2 class="card-title">Please contact with us...</h2>
                    <button className='btn btn-active btn-ghost'>Contract Us</button>

                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;