import React from "react";
import './CustomDropDown.scss';
import CustomLabel from "../CustomLabel/CustomLabel";

interface Props {
    label: string,
    options: Array<string>,
    width?: string,
    addPadding?: boolean
}

const CustomDropDown: React.FC<Props> = (props: Props) => {
    const style = {width: props.width ? props.width : "fit-content", padding: props.addPadding ? "1rem" : 0};
    return (
        <div className={"custom-drop-down"}>
            <CustomLabel text={props.label}/>

            <select style={style}>

                {props.options.map((option) => <DropDownOption value={option}/>)}

            </select>
        </div>
    );
};

const DropDownOption = (props: { value: string, display?: string }) => {
    return <option
        value={props.value}>
        {props.display ? props.display : props.value}
    </option>;

};
export default CustomDropDown;