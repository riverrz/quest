import React from "react";

import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";
import styles from "./index.module.css";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <a
                href="https://github.com/pankod"
                target="_blank"
                data-testid="pankod-logo"
            >
                <PankodIcon color="white" width="140" height="28" />
            </a>
            <div className={styles.icons} data-testid="icons-container">
                <a href="https://github.com/pankod" target="_blank">
                    <GithubIcon color="white" width="28" height="29" />
                </a>
                <a href="https://twitter.com/PankodDev" target="_blank">
                    <TwitterIcon color="white" width="28" height="28" />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                    target="_blank"
                >
                    <YoutubeIcon color="white" width="28" height="29" />
                </a>
                <a
                    href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                    target="_blank"
                >
                    <LinkedinIcon color="white" width="28" height="32" />
                </a>
            </div>
        </div>
    );
};
