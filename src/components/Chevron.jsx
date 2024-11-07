import React from "react";

const Chevron = () => {
    const handleChevron = () => {
        const anchorId = document.getElementById('mission');
        if (anchorId) {
            anchorId.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
        }};
    return (
        <svg onClick={handleChevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.5 66.8 " className="fill-white h-7 absolute w-screen mt-8 max-sm:hidden" >
            <g><g>
                <path d="M1.92,1.92h0a6.55,6.55,0,0,1,9.27,0L60.25,51,109.31,1.92a6.55,6.55,0,0,1,9.27,0h0a6.55,6.55,0,0,1,0,9.27L64.89,64.88a6.55,6.55,0,0,1-9.27,0L1.92,11.19A6.55,6.55,0,0,1,1.92,1.92Z"></path>
            </g></g>
        </svg>
    )
};

export default Chevron;