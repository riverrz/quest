import { styled } from "@styles/stitches.config";
import React, { useEffect, useRef, useState } from "react";

const StyledCursor = styled("div", {
    width: 50,
    height: 50,
    border: "3px solid $white",
    position: "absolute",
    borderRadius: "50%",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-out",
    "&::before": {
        position: "absolute",
        content: "",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 20,
        height: 20,
        backgroundColor: "$white",
        borderRadius: "50%",
        transitionDuration: "100ms",
        transitionTimingFunction: "ease-out",
    },
    variants: {
        active: {
            true: {
                transform: "scale(0.8)",
                "&::after": {
                    opacity: 0.7,
                },
            },
        },
    },
});

export const Cursor: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function mouseMoveHandler(e: MouseEvent) {
            if (!ref.current) {
                return;
            }
            ref.current.style.top = `${e.pageY - 10}px`;
            ref.current.style.left = `${e.pageX - 10}px`;
        }
        function mouseDownHandler() {
            setIsActive(true);
            setTimeout(() => {
                setIsActive(false);
            }, 300);
        }
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mousedown", mouseDownHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mousedown", mouseDownHandler);
        };
    }, []);
    return <StyledCursor ref={ref} active={isActive} />;
};
