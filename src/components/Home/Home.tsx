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
    CanvasContainer,
} from "./Home.styles";
import Canvas from "@components/common/Canvas";

interface HomeProps {
    isTransitioning: boolean;
}

const Home: React.FC<HomeProps> = ({ isTransitioning }) => {
    return (
        <Container>
            <TopSection />
            <Hero>
                <Halo left right />
                {!isTransitioning && (
                    <CanvasContainer>
                        <Canvas />
                    </CanvasContainer>
                )}
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
