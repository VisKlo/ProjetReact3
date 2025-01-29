export interface IInputProps {
    value: string;
    placeholder: string;
    type: 'text';
    onChange: (value: string) => void;
}