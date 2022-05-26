import React from "react";
import { Container } from "./Home.styles";
import { Heading, Hero, SubHeading } from "./Home.styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Hero>
                <Heading>Hello.</Heading>
                <SubHeading>Shivam Kumar</SubHeading>
            </Hero>
        </Container>
    );
};

export default Home;
