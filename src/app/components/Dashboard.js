'use client'

const DashboardCard = (props) => {
    const {
        name,
        OSDescription,
        OSType,
        onClick
    } = props;

    let iconClass;
    switch (OSType) {
        case 'linux':
            iconClass = 'bi-ubuntu';
            break;
        case 'windows':
            iconClass = 'bi-windows';
            break;
        case 'fedora':
            iconClass = 'bi-fedora';
            break;
        default:
            iconClass = 'bi-question-circle';
            break;
    }

    return (
        <div className='bg-white me-4 mt-3 pt-4 pb-4 ps-5 pe-5 d-inline-flex' style={{cursor: "pointer"}} onClick={onClick}>
            <i className={`bi ${iconClass} widget-icon rounded-circle h1 mt-2`}></i>
            <div className='d-inline-block ms-4 mt-1'>
                <div className='row'>
                    <h5>{name}</h5>
                </div>
                <div className='row'>
                    <h6>{OSDescription}</h6>
                </div>
            </div>
        </div>
    );
}

export { DashboardCard }