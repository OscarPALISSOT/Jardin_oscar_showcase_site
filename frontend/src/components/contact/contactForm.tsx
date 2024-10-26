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
        <form onSubmit={handleSubmit} className={'flex flex-col gap-4 mt-8 lg:mt-0 lg:ml-8 lg:w-1/2'}>
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
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 group-focus-within:-translate-y-12 ${formData.email.length > 0 && '-translate-y-12'} text-lg bg-transparent transition-transform duration-200 ease-in-out flex flex-row`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 mr-2"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                    </svg>

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
                    className={'bg-transparent border-b-4 border-primary focus:border-primaryHover transition duration-200 ease-in-out py-1 text-lg outline-none w-full rounded-none'}
                ></textarea>
                <span
                    id="messageLabel"
                    className={`absolute left-0 top-1/2 transform group-focus-within:-translate-y-20 ${formData.message.length > 0 && '-translate-y-20'} text-lg bg-transparent transition-transform duration-200 ease-in-out flex flex-row`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                            clipRule="evenodd"
                        />
                    </svg>

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