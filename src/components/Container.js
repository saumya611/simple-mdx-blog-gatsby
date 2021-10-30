import React from "react";
import { ContainerWrapper } from "../elements";
import { Nav } from "../components/Nav";
import Footer from "./Footer";

export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    );
}