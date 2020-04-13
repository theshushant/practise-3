import React from "react";
import './CustomButton.scss';

interface Props {
    backgroundColor?: string,
    text: string,
    color?: string,
    width?: string
}

const CustomButton: React.FC<Props> = (props: Props) => {
    const style = {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#444857",
        color: props.color ? props.color : "white",
        width: props.width ? props.width : "fit-content"
    };

    return (<div style={style} className={"btn"}>
        {props.text}
    </div>);
};

export default CustomButton;