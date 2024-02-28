import styles from './section.module.css';
import React from "react";

interface SectionProps {
    children: React.ReactNode
    id: string
}

export default function Section({children, id}: SectionProps) {
    return (
        <section className={'w-full md:flex md:flex-col md:justify-center md:h-[calc(100vh_-_5rem_-_2px)]'} id={id}>
            {children}
        </section>
    )
}
