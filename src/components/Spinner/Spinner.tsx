import React from "react";
import style from "./Spinner.module.css";
import {CircularProgress} from "@mui/material";

const Spinner: React.FC = (): React.JSX.Element => {
    return (
        <div className={style.wrapper}>
            <div className={style.blockSpinner}>
                <CircularProgress />
            </div>
        </div>
    );
}

export default Spinner;