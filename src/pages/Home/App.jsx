import { useContext } from "react";
import {
    AppHeader,
    AppFormContainer,
    HeaderLabel,
    StyledResetButton,
} from "./AppStyles";
import logo from "../../assets/svgs/cloudy-day-3.svg";
import FormWizard from "../../components/FormWizard/FormWizard";
import { appLabels } from "../../config/App";
import AppContext, { ACTIONS } from "../../contexts/AppContext";

function App() {
    const context = useContext(AppContext);
    const { dispatch } = context;
    const handleReset = () => {
        dispatch({
            type: ACTIONS.RESET,
        });
    };
    return (
        <div className="app">
            <AppHeader>
                <HeaderLabel>
                    <img src={logo} alt="logo" />
                    {appLabels.application_name}
                    <StyledResetButton
                        type="submit"
                        variant="secondary"
                        onClick={handleReset}
                    >
                        {appLabels.btn_reset}
                    </StyledResetButton>
                </HeaderLabel>
                <AppFormContainer>
                    <FormWizard />
                </AppFormContainer>

                <script
                    src="https://unpkg.com/react/umd/react.production.min.js"
                    crossOrigin="true"
                ></script>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin="true"
                ></script>
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin="true"
                ></script>
                <script>var Alert = ReactBootstrap.Alert;</script>
            </AppHeader>
        </div>
    );
}

export default App;
