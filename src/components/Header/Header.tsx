import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header: React.FC = (): React.JSX.Element => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValue(event.target.value);
    }

    const clickBtn = () => {
        !!value && navigate(`search/${value}/1`);
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
                        onClick={ clickBtn }
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
