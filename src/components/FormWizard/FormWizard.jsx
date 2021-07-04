import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
    FormWizardContainer,
    SectionContainer,
    SectionIdx,
} from "./FormWizardStyles";
import Section1 from "../FormSections/Section1";
import Section2 from "../FormSections/Section2";
import Section3 from "../FormSections/Section3";
import AppContext from "../../contexts/AppContext";

const components = [
    { sectionId: 1, content: Section1 },
    { sectionId: 2, content: Section2 },
    { content: Section3 },
];

const FormWizard = () => {
    const themeContext = useContext(ThemeContext);
    const context = useContext(AppContext);
    const { currentStep } = context.state;
    return (
        <FormWizardContainer>
            {components.map((component, idx) => {
                const ComponentToLoad = component.content;
                if (idx >= currentStep) {
                    return;
                }
                return (
                    <SectionContainer theme={themeContext} key={idx}>
                        {component.sectionId && (
                            <SectionIdx theme={themeContext}>
                                {component.sectionId}
                            </SectionIdx>
                        )}
                        <ComponentToLoad style={{ flexGrow: 1 }} />
                    </SectionContainer>
                );
            })}
        </FormWizardContainer>
    );
};

export default FormWizard;
