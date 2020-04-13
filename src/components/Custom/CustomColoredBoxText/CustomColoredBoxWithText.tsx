import React from "react";
import './CustomColoredBox.scss';

interface Props {
    backgroundColor: string,
    text: string,
    textColor?: string,
}

const CustomColoredBoxWithText: React.FC<Props> = (props: Props) => {

    return (<div className={"custom-colored-box-text"}>

        <div
            style={{backgroundColor: props.backgroundColor}}
            className={"colored-box"}/>

        <p>{props.text}</p>

    </div>);
};

export default CustomColoredBoxWithText;