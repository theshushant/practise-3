import React from "react";
import './CustomTextField.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    label: string,
    placeholderText?: string,
    textFieldType?: string,
}

const CustomTextField: React.FC<Props> = (props: Props) => {
    return (
        <div className={"custom-text-field"}>

            <CustomLabel
                text={props.label}/>

            <input
                type={props.textFieldType ? props.textFieldType : "text"}
                placeholder={props.placeholderText ? props.placeholderText : "Enter Text"}
                min={1} max={10}/>

        </div>);
};

export default CustomTextField;