import React, {useState} from "react";
import { Button, TextField } from "@mui/material";
import style from "./Header.module.css";

interface PropsHeader {
    getSearchParam: ( query: string ) => void
}

const Header: React.FC<PropsHeader> = ({ getSearchParam }): React.JSX.Element => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValue(event.target.value);
    }

    return(
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.blockInput}>
                    <TextField
                        value={value}
                        onChange={ handleChange }
                        label="Введите login"
                        fullWidth
                        size="small"
                        variant="outlined" />
                </div>
                <div className={style.blockBtn}>
                    <Button
                        onClick={() => getSearchParam(value) }
                        variant="outlined"
                        size="large"
                    >
                        Поиск
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
