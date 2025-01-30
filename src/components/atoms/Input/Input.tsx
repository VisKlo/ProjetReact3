import { IInputProps } from "./Input.props";

export const Input: React.FC<IInputProps> = ({ value, onChange, placeholder, type }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input 
            onChange={handleInputChange} 
            type={type} 
            value={value} 
            placeholder={placeholder} 
            className="input-field" 
        />
    );
}
