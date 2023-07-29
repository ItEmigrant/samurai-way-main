import React from 'react';
import styles from './FormControls.module.css'

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
interface MetaProps {
    error?: string;
    touched: boolean;
}
interface TextareaProps {
    input: InputProps;
    meta: MetaProps;

    [key: string]: any;
}

const Textarea = ({input, meta, ...props}: TextareaProps) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};
export default Textarea;