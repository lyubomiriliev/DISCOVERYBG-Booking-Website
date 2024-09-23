import { Link } from "react-router-dom";

const Breadcrumbs = () => {


    return (
        <div className='w-full justify-center flex mb-5 gap-6'>
            <Link to="/location/dalgopol">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">Дългопол</p>
            </Link>
            <Link to="/location/dolniChiflik">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">Долни Чифлик</p>
            </Link>
            <Link to="/location/provadia">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">Провадия</p>
            </Link>
        </div>
    );
};

export default Breadcrumbs;
