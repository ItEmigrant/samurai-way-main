import React, {ReactNode} from 'react';
import styles from './FormControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidator} from "formik";

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

export const FormControl = ({meta: {touched, error}, children}: FormControlProps) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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
}

//ask about type????????
export const CreateField = (placeholder: string, name: string, validate: FieldValidator[], component: React.ComponentType<any> | 'input' | 'select' | 'textarea', props: any, text: string = '') =>
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}
            {...props}
        /> {text}
    </div>
