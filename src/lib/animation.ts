export const pageTransitionAnimation = {
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
