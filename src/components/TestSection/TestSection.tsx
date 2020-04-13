import React from "react";
import './TestSection.scss';
import CustomDropDown from "../Custom/CustomDropDown/CustomDropDown";
import CustomButton from "../Custom/CustomButton/CustomButton";
import CustomColoredBoxWithText from "../Custom/CustomColoredBoxText/CustomColoredBoxWithText";
import CustomLabel from "../Custom/CustomLabel/CustomLabel";

interface Props {

}

const TestSection: React.FC<Props> = (props: Props) => {
    return (
        <div className={"test-section"}>

            <div className={"icon"}>Icon</div>

            <CustomLabel
                text={"Select Test Suite: "}/>

            <CustomDropDown label={""}
                            options={["xaksncjankcn", "xaksncjankcn", "xaksncjankcn", "xaksncjankcn", "xaksncjankcn"]}
                            width={"28rem"}/>

            <div className={"test-details"}>

                <div className={"buttons"}>

                    <CustomButton
                        text={"Run Tests"}
                        width={"14rem"}/>

                    <CustomButton
                        text={"Tests"}
                        width={"14rem"}/>

                </div>

                <div className={"test-properties"}>

                    <CustomColoredBoxWithText
                        text={"Test(s) Failed"}
                        backgroundColor={"red"}/>

                    <CustomColoredBoxWithText
                        text={"Tests Passed"}
                        backgroundColor={"green"}/>

                    <CustomColoredBoxWithText
                        text={"Tests Executing"}
                        backgroundColor={"orange"}/>

                </div>

            </div>
            <div className={"links"}>

                <UrlText text={"Ask For Help"}/>

                <UrlText text={"Report Bug"}/>

            </div>
        </div>
    );
};

const UrlText = (props: { text: string }) => {
    return (
        <p className={"link"}>{props.text}</p>
    );
};

export default TestSection;