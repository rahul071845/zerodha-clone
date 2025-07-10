import React from 'react';

function AddedServices() {
    return ( 
        <div className="container">
            <div className="row px-5 pt-3 m-5">
                <h1 className='fs-4 mb-4 pb-1' style={{ letterSpacing: '0.05rem' }}>Charges for optional value added services</h1>
                <table className='table table-borderless mx-3 mb-5' style={{ borderRadius: '3px', border: '1px solid #ddd' }}>
                    <thead className='border'>
                        <tr >
                            <th className='p-3' scope='col' style={{ fontWeight: '450', fontSize: '0.9rem', letterSpacing: '0.03rem' }}>Service</th>
                            <th className='p-3' scope='col' style={{ fontWeight: '450', fontSize: '0.9rem', letterSpacing: '0.03rem' }}>Billing Frquency</th>
                            <th className='p-3' scope='col' style={{ fontWeight: '450', fontSize: '0.9rem', letterSpacing: '0.03rem' }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Tickertape</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Monthly / Annual</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>Smallcase</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>Per transaction</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Kite Connect</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Monthly</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Connect: 500 | Historical: 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddedServices;