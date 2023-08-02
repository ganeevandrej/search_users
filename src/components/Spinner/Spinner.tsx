import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import styles from "./Spinner.module.css";

export const Spinner: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div  className={styles.spinner}>
                <CircularProgress  size={50} />
            </div>
        </div>
    );
}