import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

async function POST(req: NextApiRequest, res: NextApiResponse) {

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const body = await req.body;
    const { recaptchaToken } = body;

    let response;
    const formData = `secret=${secretKey}&response=${recaptchaToken}`;

    try {
        response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    } catch (error) {
        return res.status(500).json({success: false, error: 'Error contacting reCAPTCHA server'});
    }

    if (response && response.data?.success && response.data?.score > 0.5) {
        console.log('reCAPTCHA score:', response.data.score);
        return res.status(200).json({
            success: true,
            score: response.data.score,
        });
    } else {
        return res.status(400).json({success: false, error: 'reCAPTCHA validation failed'});
    }
}

export default POST;