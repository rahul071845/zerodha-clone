import React from 'react';

function OpeningCharges() {
    return (
        <div className="container">
            <div className="row px-5 m-5">
                <h1 className='fs-4 mb-4 pb-1' style={{ letterSpacing: '0.05rem' }}>Charges for account opening</h1>
                <table className='table table-borderless mx-3' style={{ borderRadius: '3px', border: '1px solid #ddd' }}>
                    <thead className='border'>
                        <tr >
                            <th className='p-3' scope='col' style={{ fontWeight: '450', fontSize: '0.9rem', letterSpacing: '0.03rem' }}>Type of account</th>
                            <th className='p-3' scope='col' style={{ fontWeight: '450', fontSize: '0.9rem', letterSpacing: '0.03rem' }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>Online account</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>
                                <span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '2px', fontSize: '11px' }}>FREE</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>Offline account</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>
                                <span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '2px', fontSize: '11px' }}>FREE</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>NRI account (offline only)</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem' }}>₹ 500</td>
                        </tr>
                        <tr>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className='text-muted p-3' style={{ fontSize: '0.9rem', backgroundColor: '#fafafa' }}>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OpeningCharges;