import styles from './section.module.css';
import React from "react";

interface SectionProps {
    children: React.ReactNode
    id: string
}

export default function Section({children, id}: SectionProps) {
    return (
        <section className={'w-full md:flex md:flex-col md:justify-center h-fit'} id={id}>
            {children}
        </section>
    )
}
