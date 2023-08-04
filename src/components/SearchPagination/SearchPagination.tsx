import React from "react";
import {Link} from "react-router-dom";
import {Pagination, PaginationItem} from "@mui/material";
import styles from "./SearchPagination.module.css";
import {PropsSearchPagination} from "../../services/interfaces";

export const SearchPagination: React.FC<PropsSearchPagination> = (
    {
        totalPage,
        page,
        query
    }
): React.JSX.Element => {
    return (
        <div className={styles.blockPagination}>
            {
                Boolean(totalPage) && (
                    <Pagination
                        page={page}
                        size="large"
                        count={totalPage}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/search/${query}/${item.page}`}
                                {...item}
                            />
                        )}
                    />
                )
            }
        </div>
    );
}