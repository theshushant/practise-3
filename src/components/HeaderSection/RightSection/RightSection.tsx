import React from "react";
import './RightSection.scss';
import CustomButton from "../../Custom/CustomButton/CustomButton";

interface Props {

}

const HeaderRightSection: React.FC<Props> = (props: Props) => {
    return (<div className={"right-section"}>

        <CustomButton
            text={"Log In"}/>

        <CustomButton
            text={"Sign Up"}
            backgroundColor={"\#47cf73"}
            color={"black"}/>

        <div className={"menu-options"}/>

    </div>);
};

export default HeaderRightSection;