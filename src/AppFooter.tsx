import { useContext } from 'react';
import { RTLContext } from './App';

const AppFooter = (props: any) => {
    const isRTL = useContext(RTLContext);

    return (
        <div className="layout-footer flex align-items-center p-2 shadow-2">
            <img id="footer-logo"  src="assets/layout/images/ccl-group-logo.png" alt="ultima-layout" style={{ height: '3rem' }}/>

            <div className="ml-auto text-2xl flex-column align-items-center" style={{ minWidth: '300px'}}>
                <div className=" p-1 text-black-alpha-90">
                    Email:
                    <a className='pl-1 text-black-alpha-90' href={`mailto:cclgroup77@gmail.com?subject=Request Service Quote`}>
                        cclgroup77@gmail.com
                    </a>
                </div>
                <div className="p-1 text-black-alpha-90">Phone: +61 0420655788</div>
            </div>

            {/* <Button type="button" icon="pi pi-github fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button type="button" icon="pi pi-facebook fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'mr-2': !isRTL, 'ml-2': isRTL })}></Button>
            <Button type="button" icon="pi pi-twitter fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'mr-2': !isRTL, 'ml-2': isRTL })}></Button> */}
        </div>
    );
};

export default AppFooter;
