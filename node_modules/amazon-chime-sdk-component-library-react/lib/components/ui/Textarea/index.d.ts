import { FC, ChangeEvent, InputHTMLAttributes } from 'react';
export interface TextareaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
    /** The callback fired when the text is changed. */
    onChange(event: ChangeEvent): void;
    /** The value of the textarea. */
    value: string;
    /** The label for availability. */
    label: string;
}
export declare const Textarea: FC<TextareaProps>;
export default Textarea;
