import React from "react";

interface Props {
    text: string,
    fontSize?: string,
    shouldBeBold?: boolean,
}

const CustomText: React.FC<Props> = (props: Props) => {
    // isme style object nai bnaya kyuki font weight as string pass nai ho shkta
    return (<div
        style={{
            fontSize: props.fontSize ? props.fontSize : "1.5rem",
            fontWeight: props.shouldBeBold ? "bold" : "unset",
        }}
    >{props.text}</div>);
};

export default CustomText;