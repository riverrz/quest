import React from "react";
import { Halo, Spacer } from "@components/common";
import { Container } from "./Home.styles";
import {
    Heading,
    Hero,
    SubHeading,
    Description,
    SubHeadingContainer,
    TopSection,
} from "./Home.styles";

const Home: React.FC = () => {
    return (
        <Container>
            <TopSection />
            <Hero>
                <Halo left right />
                <Heading>Hello.</Heading>
                <SubHeadingContainer>
                    <Spacer />
                    <div>
                        <SubHeading>Shivam Kumar</SubHeading>
                        <Description>
                            Full-Stack developer <br />
                            based in Gurgaon
                        </Description>
                    </div>
                </SubHeadingContainer>
            </Hero>
        </Container>
    );
};

export default Home;
