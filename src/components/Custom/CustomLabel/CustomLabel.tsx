import React from "react";
import './CustomLabel.scss';

interface Props {
    text: string,
    textAlign?: string,
}

const CustomLabel: React.FC<Props> = (props: Props) => {
    return (<label className={"custom-label"}>
        {props.text}
    </label>);
};

export default CustomLabel;