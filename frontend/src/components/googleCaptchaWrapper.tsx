'use client';

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import React from "react";

interface GoogleCaptchaWrapperProps {
    children: React.ReactNode;
}

const GoogleCaptchaWrapper = ({ children }: GoogleCaptchaWrapperProps) => {

    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY;

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "No recaptcha key found"}>
            {children}
        </GoogleReCaptchaProvider>
    )
}

export default GoogleCaptchaWrapper;