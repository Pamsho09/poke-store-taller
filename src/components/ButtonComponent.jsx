import React from "react";

const ButtonComponent = (props) => {
    const { label, action } = props;
    return (
        <>
            <button className="text-[10px] text-purple-600 border-purple-600 border-2 px-7 rounded-full py-1 font-bold " onClick={action}>{label}</button>
        </>
    );
};

export default ButtonComponent;
