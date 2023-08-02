import React from "react";
import style from "./Error.module.css";

export const Error: React.FC = (): React.JSX.Element => {
    return (
        <div className={style.error}>Произошла обшика при загрузке данных</div>
    );
}