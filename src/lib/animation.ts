export const PageTransitionAnimation = {
    name: "Page Transition Animation",
    variants: {
        enterLeft: {
            left: "-90%",
        },
        enterRight: {
            left: "90%",
        },
        animate: {
            left: 0,
        },
        exitLeft: {
            left: "-100%",
        },
        exitRight: {
            left: "100%",
        },
    },
    transition: {
        duration: 1,
    },
};

export const SphereContainerAnimation = {
    rotateZ: -180,
    origin: "center",
    transition: { duration: 1 },
};
export const SphereAnimation = {
    opacity: [1, 0, 1],
    transition: { duration: 1 },
};
