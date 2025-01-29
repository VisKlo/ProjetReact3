import { IButtonProps } from "./Button.props";

export const Button: React.FC<IButtonProps> = ({ label, onClick, disabled, className }) => {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {label}
        </button>
    )
}