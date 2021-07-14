import React, { FC, ChangeEvent } from 'react';
import { InputProps } from '../Input';
import { SelectProps } from '../Select';
import { TextareaProps } from '../Textarea';
import { CheckboxProps } from '../Checkbox';
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';
import { BaseProps } from '../Base';
export declare type FieldType = FC<InputProps> | FC<SelectProps> | FC<TextareaProps> | FC<CheckboxProps> | FC<RadioGroupProps> | FC<RadioProps>;
export interface FieldProps {
    /** The callback fired when the state is changed. */
    onChange(event: ChangeEvent): void;
    /** The label of the field. */
    label: string;
    /** The type of the field. */
    field: FieldType;
    /** The informational text in the field. */
    infoText?: string;
    /** Whether or not the error text is shown. */
    error?: boolean;
    /** The error text in the field. */
    errorText?: string;
    /** Additional props for field component. */
    fieldProps?: any;
    /** The value of the field. */
    value: string;
    /** Whether or not the field is checked. */
    checked?: boolean;
    /** Options for some fields, e.g. radio group or select. */
    options?: string[] | object[];
}
export interface LayoutProps {
    /** Specify the layout of the field, it defaults to `stack`. */
    layout?: 'stack' | 'horizontal' | 'input-only';
    error?: boolean;
}
export interface FormFieldProps extends FieldProps, LayoutProps, BaseProps {
}
export interface FieldWrapperProps extends BaseProps, LayoutProps {
}
export declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLElement>>;
export default FormField;
