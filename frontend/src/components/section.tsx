import React from "react";

interface SectionProps {
    children: React.ReactNode
    id: string
}

export default function Section({children, id}: SectionProps) {
    return (
        <section className={'w-full md:flex md:flex-col md:justify-center h-fit lg:min-h-[calc(100vh-5rem)] lg:snap-start lg:scroll-mt-20 '} id={id}>
            {children}
        </section>
    )
}
