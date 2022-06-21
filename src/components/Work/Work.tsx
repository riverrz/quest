import { Spacer } from "@components/common";
import React from "react";
import {
    Container,
    Heading,
    Description,
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
                    <Description>
                        You can't use up creativity <br />
                        The more you use,
                        <br />
                        the more you have
                    </Description>
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
