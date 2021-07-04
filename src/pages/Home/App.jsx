import { AppHeader, AppFormContainer, HeaderLabel } from "./AppStyles";
import logo from "../../assets/svgs/cloudy-day-3.svg";
import FormWizard from "../../components/FormWizard/FormWizard";
import Button from "../../components/Button/Button";
import { appLabels } from "../../config/App";

function App() {
    return (
        <div className="app">
            <AppHeader>
                <HeaderLabel>
                    <img src={logo} alt="logo" />
                    {appLabels.application_name}
                    <Button
                        variant="secondary"
                        style={{ float: "right", marginLeft: "auto" }}
                    >
                        {appLabels.btn_reset}
                    </Button>
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
