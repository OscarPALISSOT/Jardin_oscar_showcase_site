import React from "react";

const navTo = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault();
    let url = new URL((e.target as HTMLAnchorElement).href);
    const section = document.getElementById(link);
    if (section) {
        const yOffset = -82;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

export default navTo;