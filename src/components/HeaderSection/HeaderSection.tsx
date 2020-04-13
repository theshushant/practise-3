import React from "react";
import './HeaderSection.scss';
import HeaderLeftSection from "./LeftSection/LeftSection";
import HeaderRightSection from "./RightSection/RightSection";

interface Props {

}

const HeaderSection: React.FC<Props> = (props: Props) => {
    return (<div className={"header-section"}>

        <HeaderLeftSection/>
        <HeaderRightSection/>

    </div>);
};


export default HeaderSection;