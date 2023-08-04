import React from "react";
import {Select, SelectChangeEvent, MenuItem} from "@mui/material";
import style from "./Sort.module.css";
import {SortRotation} from "../../services/constants";
import {PropsSort} from "../../services/interfaces";

export const Sort: React.FC<PropsSort> = ({value, onChange}): React.JSX.Element => {
    const handleChange = (event: SelectChangeEvent<typeof value>)  => {
        onChange(event.target.value);
    }

    return (
        <div className={style.sort}>
            <div className={style.wrapper}>
                <Select
                    data-testid="select"
                    size="small"
                    value={value}
                    onChange={handleChange}
                    defaultValue={SortRotation.DESC}>
                    <MenuItem data-testid="asc" value={SortRotation.ASC}>по возрастанию</MenuItem>
                    <MenuItem data-testid="desc" value={SortRotation.DESC}>по убыванию</MenuItem>
                </Select>
            </div>
        </div>
    );
}