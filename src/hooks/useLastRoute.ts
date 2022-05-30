import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const useLastRoute = (): string => {
    const lastRoute = useRef("");
    const router = useRouter();

    useEffect(() => {
        lastRoute.current = router.pathname;
    }, [router.pathname]);

    return lastRoute.current;
};
