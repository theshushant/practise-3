import React from "react";
import './LeftSection.scss';

interface Props {

}

const HeaderLeftSection: React.FC<Props> = (props: Props) => {
    return (<div className={"left-section"}>

        <div className={"image"}/>

        <div className={"greeting-tags"}>

            <h1 className={"greeting-wish"}>Good Vibes Form</h1>

            <div className={"user-links"}>
                <h3 className={"link-name"}>Laurence</h3>
            </div>
            
        </div>


    </div>);
};

export default HeaderLeftSection;