import React from "react";

const navTo = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault();
    const moveTo = (link: string) => {
        const section = document.getElementById(link);
        if (section) {
            const yOffset = -82;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    if (window.location.pathname !== '/') {
        window.location.assign('/');
        window.addEventListener('load', () => {
            moveTo(link);
        })
    } else {
        moveTo(link);
    }

}

export default navTo;