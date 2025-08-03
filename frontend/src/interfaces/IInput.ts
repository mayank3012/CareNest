export interface IInput{
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    name: string;
    label: string;
    error?: string | null;
}