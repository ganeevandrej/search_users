import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import styles from "./SearchPagination.module.css";

interface PropsSearchPagination {
    totalPage: number;
    page: string;
    query: string;
}

const SearchPagination: React.FC<PropsSearchPagination> =
    ({ totalPage, page, query }): React.JSX.Element => {
    return (
        <div className={styles.blockPagination}>
            {
                !!totalPage && (
                    <Pagination
                        page={page ? +page : 1}
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

export default SearchPagination;