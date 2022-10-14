import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';

const ServicePage = () => {
    const [conveyorBeltImages, setconveyorBeltImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/conveyorBelt/belt.jpg", style: { width: '50%'}},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/conveyorBelt/belt1.jpeg", style: { width: '30%'}},
    ]);
    const [dumpHooperImages, setdumpHooperImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/dumpHopper/hopper.jpeg"},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/dumpHopper/hopper1.jpeg"},
    ]);
    const [excavatorImages, setexcavatorImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/excavator/excavator.jpeg", style: { width: '20%'}},
    ]);
    const [pipeLineImages, setpipeLineImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/pipeLine/pipe.jpeg"},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/pipeLine/pipe1.jpg"},
    ]);
    const [repairImages, setrepairImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/repair/repair.jpeg", style: { width: '20%'}},
    ]);
    const [steelStructureImages, setsteelStructureImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/steelStructure/steelStructure.jpg"},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/steelStructure/steelStructure1.jpg"},
    ]);
    const [tankImages, settankImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/tank/tank.jpg"},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/tank/tank2.jpeg"},
        {"id": "1002","name": "Tank","image": "assets/ccl/images/tank/tank3.jpeg"},
        {"id": "1003","name": "Tank","image": "assets/ccl/images/tank/tank4.jpeg"},
        {"id": "1004","name": "Tank","image": "assets/ccl/images/tank/tank5.jpeg"},
    ]);
    const [waterTankImages, setwaterTankImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/waterTank/waterTank.jpg"},
        {"id": "1001","name": "Tank","image": "assets/ccl/images/waterTank/waterTank1.jpg"},
    ]);
    const [weldingImages, setweldingImages] = useState([
        {"id": "1000","name": "Tank","image": "assets/ccl/images/welding/welding.jpeg", style: { width: '20%'}},
    ]);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (image: any) => {
        return (
            <div className="service-item">
                <div className="service-item-content">
                    <div className="mb-3">
                        <Image preview={true} src={`${image.image}`} alt={image.name}  imageClassName="service-image" imageStyle={ image.style } />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo grid">
            <div className="card col-12 lg:col-6">
                <Carousel value={conveyorBeltImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Conveyor Belt</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={dumpHooperImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Dump Hooper</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={excavatorImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Mining Excavator</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={pipeLineImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Pipe Line</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={repairImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Welding Repair</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={steelStructureImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Steel Structure</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={tankImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Tank</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={waterTankImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Water Tank</h1>} />
            </div>
            <div className="card col-12 lg:col-6">
                <Carousel value={weldingImages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h1 className='flex justify-content-center'>Welding</h1>} />
            </div>
        </div>
    );
};

export default ServicePage;
