interface ButtonProps {
    onClick?: (e: any) => void;
    text: string;
    style?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
}

const Button = ({onClick, style = 'primary', text, type}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${style === 'primary' ? 'bg-primary hover:bg-primaryHover' : 'bg-secondary hover:bg-secondaryHover'} py-2 px-4 rounded-lg text-lg text-fontColor shadow-md duration-300 ease-in-out w-fit`}
        >
            {text}
        </button>
    )
}

export default Button;