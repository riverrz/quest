import { Spacer } from "@components/common";
import React from "react";
import {
    Container,
    Heading,
    SubHeading,
    SubHeadingContainer,
    WorkTilesContainer,
} from "./Work.styles";

const Work: React.FC = () => {
    return (
        <Container>
            <div>
                <Heading>Work.</Heading>
                <SubHeadingContainer>
                    <Spacer />
                    <SubHeading>Creativity</SubHeading>
                </SubHeadingContainer>
            </div>
            <WorkTilesContainer>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit delectus obcaecati sed voluptatibus sint reprehenderit
                    dolorum facilis explicabo! Iure odit debitis similique illum
                    sed dolorum reiciendis dolorem distinctio iste nostrum?
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit delectus obcaecati sed voluptatibus sint reprehenderit
                    dolorum facilis explicabo! Iure odit debitis similique illum
                    sed dolorum reiciendis dolorem distinctio iste nostrum?
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit delectus obcaecati sed voluptatibus sint reprehenderit
                    dolorum facilis explicabo! Iure odit debitis similique illum
                    sed dolorum reiciendis dolorem distinctio iste nostrum?
                </div>
            </WorkTilesContainer>
        </Container>
    );
};

export default Work;
