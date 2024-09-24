import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {

    const { t } = useTranslation();


    return (
        <div className='w-full justify-center flex mb-5 gap-6'>
            <Link to="/location/dalgopol">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">{t('dalgopol')}</p>
            </Link>
            <Link to="/location/dolniChiflik">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">{t('dolniChiflik')}</p>
            </Link>
            <Link to="/location/provadia">
                <p className="text-sm font-body uppercase text-darkGreen font-bold hover:underline">{t('provadia')}</p>
            </Link>
        </div>
    );
};

export default Breadcrumbs;
