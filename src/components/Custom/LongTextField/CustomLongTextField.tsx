import React from "react";
import './CustomLongTextField.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    placeholder?: string,
    label: string
}


const CustomLongTextField: React.FC<Props> = (props: Props) => {
    return (<div className={"long-text"}>

        <CustomLabel
            text={props.label}/>

        <textarea
            cols={30} rows={15}
            placeholder={props.placeholder ? props.placeholder : "Enter here"}/>

    </div>);
};

export default CustomLongTextField;