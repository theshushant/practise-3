import React from "react";
import './MainSection.scss';
import SubSection from "./SubSection/SubSection";
import CustomText from "../Custom/CustomText/CustomText";

interface Props {

}

const MainSection: React.FC<Props> = (props: Props) => {
    return (<div className={"main-section"}>

        <CustomText
            text={" Good Vibes Form"}
            fontSize={"4.5rem"}
            shouldBeBold={true}/>

        <SubSection/>

    </div>);
};


export default MainSection;