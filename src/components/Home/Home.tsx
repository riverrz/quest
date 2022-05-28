import React from "react";
import { Halo, Sphere } from "@components/common";
import { Container } from "./Home.styles";
import {
    Heading,
    Hero,
    SubHeading,
    Description,
    SubHeadingContainer,
    Spacer,
    TopSection,
    SphereContainer,
} from "./Home.styles";

const Home: React.FC = () => {
    return (
        <Container>
            <TopSection />
            <Hero>
                <SphereContainer left>
                    <Sphere />
                </SphereContainer>
                <Halo left right />
                <Heading>Hello.</Heading>
                <SubHeadingContainer>
                    <Spacer />
                    <div>
                        <SubHeading>Shivam Kumar</SubHeading>
                        <Description>
                            Full-Stack developer <br />
                            based in Delhi
                        </Description>
                    </div>
                </SubHeadingContainer>
                <SphereContainer right>
                    <Sphere />
                </SphereContainer>
            </Hero>
        </Container>
    );
};

export default Home;
