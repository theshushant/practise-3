import React from "react";
import './SubSection.scss';
import CustomTextField from "../../Custom/CustomTextField/CustomTextField";
import CustomDropDown from "../../Custom/CustomDropDown/CustomDropDown";
import CustomRadioCheckButton from "../../Custom/CustomRadioCheckButton/CustomRadioCheckButton";
import CustomLongTextField from "../../Custom/LongTextField/CustomLongTextField";
import CustomButton from "../../Custom/CustomButton/CustomButton";
import CustomText from "../../Custom/CustomText/CustomText";

interface Props {

}

const dropDownOptionList = ["At Home", "On My Commute", "At Work", "On the Street", "Other"];

const radioOptionList = ["At Home", "On My Commute", "At Work", "On the Street", "Other"];

const SubSection: React.FC<Props> = (props: Props) => {
    return (<div className={"sub-section"}>

            <CustomText
                text={"Tell us something positive that happened to you today."}
                fontSize={"1.9rem"}
                // shouldBeBold={true}
            />

            <CustomTextField
                label={"Name"}
                placeholderText={"Enter Your Name"}/>

            <CustomTextField
                label={"Email"}
                placeholderText={"Enter Your email address"}/>

            <CustomTextField
                label={"On a scale of 1-10, how good was it?"}
                placeholderText={"Enter a number between 1 and 10"}
                textFieldType={"number"}/>

            <CustomDropDown
                label={"Where did it happen?"}
                options={dropDownOptionList}
                addPadding={true}/>

            <CustomRadioCheckButton
                label={"At what time of day did it happen?"}
                options={radioOptionList}/>

            <CustomRadioCheckButton
                label={"At what time of day did it happen?"}
                options={radioOptionList}
                type={"checkbox"}/>

            <CustomLongTextField
                label={"Please describe your positive experience. "}
                placeholder={"Enter your experience here..."}/>

            <CustomButton
                text={"Submit"}
                backgroundColor={"#6ba2ce"}/>

        </div>
    );
};

export default SubSection;