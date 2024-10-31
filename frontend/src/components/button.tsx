interface ButtonProps {
    onClick?: (e: any) => void;
    text: string;
    style?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
    disabled?: boolean;
}

const Button = ({onClick, style = 'primary', text, type, disabled = false}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${style === 'primary' ? 'bg-primary hover:bg-primaryHover' : 'bg-secondary hover:bg-secondaryHover'} py-2 px-4 rounded-lg text-lg text-fontColor shadow-md duration-300 ease-in-out w-fit ${disabled && 'cursor-not-allowed opacity-50'}`}
        >
            {text}
        </button>
    )
}

export default Button;