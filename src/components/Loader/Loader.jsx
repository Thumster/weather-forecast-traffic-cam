import { useContext } from "react";
import { default as LoaderSpinner } from "react-loader-spinner";
import { LoaderContainer } from "./LoaderStyles";
import { ThemeContext } from "styled-components";

const Loader = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <LoaderContainer>
            <LoaderSpinner
                color={themeContext.primary}
                type="ThreeDots"
            ></LoaderSpinner>
        </LoaderContainer>
    );
};

export default Loader;
