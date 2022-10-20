import { Card } from 'primereact/card';
import React from 'react';

const ContactPage = () => {
    return (
        <div className="grid mt-7">
            <div className="col-12 flex justify-content-center">
                <p className='text-7xl'>We’d love to hear from you</p>
            </div>
            <div className="col-12 flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <Card style={{ width: '100%', minHeight: '300px' }} >
                    <div className="grid mt-7">
                        <div className="col-12 xl:col-6 flex justify-content-center align-items-center text-2xl">
                            <i className="pi pi-phone mr-3" style={{'fontSize': '2em'}}></i> Tel：+61 0420655788
                        </div>
                        <div className="col-12 xl:col-6 flex justify-content-center align-items-center text-2xl">
                            <i className="pi pi-envelope mr-3" style={{'fontSize': '2em'}}></i> Email: <a className='pl-1 text-black-alpha-90' href={`mailto:cclgroup77@gmail.com?subject=Request Service Quote`}>cclgroup77@gmail.com</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ContactPage;
