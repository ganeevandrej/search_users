import React from "react";
import style from "./Sort.module.css";
import { Select, SelectChangeEvent, MenuItem } from "@mui/material";


interface PropsSort {
    sort: string;
    setParamSort: (select: string) => void
}

const Sort: React.FC<PropsSort> = ({ sort, setParamSort }): React.JSX.Element => {
    const handleChange = (event: SelectChangeEvent<typeof sort>)  => {
        setParamSort(event.target.value);
    }

    return (
        <div className={style.sort}>
            <div className={style.wrapper}>
                <Select size="small" value={sort} onChange={ handleChange } defaultValue="desc" >
                    <MenuItem value="asc">по возрастанию</MenuItem>
                    <MenuItem value="desc">по убыванию</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default Sort;