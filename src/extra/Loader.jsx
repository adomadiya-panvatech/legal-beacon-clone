import React from 'react'
import { Oval } from 'react-loader-spinner';
import "../assets/css/loader.css";

const Loader = ({ className }) => {
    return (
        <div className={className}>
            <Oval
                visible={true}
                height="25"
                width="25"  
                color="#fff"
                ariaLabel="oval-loading"
                wrapperClass=""
                secondaryColor="#fff"
                strokeWidth="7"
                className="loader_sec"
            />
        </div>
    )
}

export default Loader