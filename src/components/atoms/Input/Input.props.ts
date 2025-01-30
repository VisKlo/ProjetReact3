export interface IInputProps {
    value: string;
    placeholder: string;
    type: 'text';
    className: string;
    onChange: (value: string) => void;
}