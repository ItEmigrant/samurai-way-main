import React, {ReactNode} from 'react';
import styles from './FormControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

interface MetaProps extends WrappedFieldMetaProps {
    error?: string;
    touched: boolean;
}
interface TextareaProps {
    meta: MetaProps;
    [key: string]: any;
}

type InputPropsType = {
    input: WrappedFieldProps['input'];
    meta: WrappedFieldProps['meta'];
} & React.InputHTMLAttributes<HTMLInputElement>;


interface FormControlProps {
    meta: WrappedFieldProps['meta'];
    children: ReactNode;
}

export const FormControl = ({meta, children}: FormControlProps) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};


export const Textarea = (props: TextareaProps) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <div>
            <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
        </div>
    )
};


export const Input = (props: InputPropsType) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <div>
            <FormControl {...props}><input {...input} {...restProps}/></FormControl>
        </div>
    )
};