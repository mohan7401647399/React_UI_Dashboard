import React from 'react';

export default function InputEle() {
    return (
        <div className="text-start">
            <h2 className='mb-3'>Sales Information</h2>
            <div className="col">
                <div className="row mb-1">
                    <div className="col-sm-8 col-md-3 col-lg-3">
                        <div className="mb-3">
                            <label for="customerName" className="form-label">Customer</label>
                            <input type="text" className="form-control" id="customerName" placeholder="Enter costumer name"/>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-3 col-lg-3">
                        <div className="mb-3">
                            <label for="invoiceId" className="form-label">Invoice ID</label>
                            <input type="email" className="form-control" id="invoiceId" placeholder="Enter Invoice Id"/>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-3 col-lg-3">
                        <div className="mb-3">
                            <label for="startDate" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="startDate" placeholder="Start Date"/>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-3 col-lg-3">
                        <div className="mb-3">
                            <label for="endDate" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="endDate" placeholder="End Date"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
