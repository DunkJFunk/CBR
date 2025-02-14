import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-6 text-center bottom-0 left-0 w-full">
            <p>&copy; {new Date().getFullYear()} Classic Boat Restoration. All rights reserved.</p>
        </footer>
    );
};

export default Footer;