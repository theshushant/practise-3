import React from "react";
import './CustomRadioCheckButton.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    label: string,
    options: Array<string>,
    type?: string
}

const CustomRadioCheckButton: React.FC<Props> = (props: Props) => {
    return (
        <div className={"custom-radio-button"}>

            <CustomLabel text={props.label}/>

            <div className={"options"}>
                {props.options.map((option) => <RadioOption
                    value={option}
                    type={props.type ? props.type : "radio"}/>)
                }
            </div>

        </div>
    );
};

const RadioOption = (props: { type: string, value: string, displayValue?: string }) => {
    return (<div className={"option"}>

        <input
            type={props.type}
            value={props.value}
            name={"xyz"}/>

        <CustomLabel
            text={props.displayValue ? props.displayValue : props.value}/>

    </div>);
};

export default CustomRadioCheckButton;