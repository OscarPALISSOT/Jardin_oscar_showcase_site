import { useState, ChangeEvent, FormEvent } from 'react';
import Button from "@/components/button";

interface FormData {
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({email: '', message: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //
        //     if (response.ok) {
        //         setSubmitted(true);
        //     } else {
        //         console.error('Failed to submit form');
        //     }
        // } catch (error) {
        //     console.error('An error occurred:', error);
        // }
    };

    return (
        <form onSubmit={handleSubmit} className={'flex flex-col gap-4 mt-8 lg:mt-0 lg:ml-8'}>
            <label
                className="relative w-full group"
                htmlFor="email"
            >
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-b-4 border-primary focus:border-primaryHover transition duration-200 ease-in-out py-1 text-lg outline-none w-full rounded-none"
                />
                <span
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 group-focus-within:-translate-y-12 text-lg bg-transparent transition-transform duration-200 ease-in-out">
                    Email :
                </span>
            </label>
            <label
                className="relative w-full mt-8 group"
                htmlFor="message"
            >
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    cols={30}
                    rows={3}
                    maxLength={1000}
                    className="bg-transparent border-b-4 border-primary focus:border-primaryHover transition duration-200 ease-in-out py-1 text-lg outline-none rounded-none"
                ></textarea>
                <span
                    id="messageLabel"
                    className="absolute left-0 top-1/2 transform group-focus-within:-translate-y-20 text-lg bg-transparent transition-transform duration-200 ease-in-out"
                >
                    Message :
                </span>
            </label>
            <Button
                text={'Envoyer'}
                style={'primary'}
                type={'submit'}
            />

            {submitted && <p>Merci pour votre message</p>}
        </form>
    );
};

export default ContactForm;