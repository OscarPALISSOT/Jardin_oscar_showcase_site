import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

interface ButtonProps {
    onClick?: (e: any) => void;
    text: ReactElement | string;
    style?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
    disabled?: boolean;
    icon?: IconProp;
}

const Button = ({ onClick, style = 'primary', text, type, disabled = false, icon }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${style === 'primary' ? 'bg-primary hover:bg-primaryHover' : 'bg-secondary hover:bg-secondaryHover'} py-2 px-4 rounded-lg text-sm lg:text-lg text-fontColor shadow-lg duration-300 ease-in-out w-fit ${disabled && 'cursor-not-allowed opacity-50'}`}
        >
            {text}
            {icon && <FontAwesomeIcon icon={icon} className={'ms-2'} />}
        </button>
    )
}

export default Button;