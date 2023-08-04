import React from "react";
import {screen, render} from "@testing-library/react";
import {SearchBlock} from "./SearchPage";
import userEvent from '@testing-library/user-event';

describe("Testing Select", () => {
    test("check for state change", async () => {
        const getData = jest.fn();
        render(<SearchBlock getData={getData}  />);
        await userEvent.dblClick(screen.getByRole("button"));
        const asc = screen.getByTestId("asc");
        await userEvent.click(asc);
        expect(screen.getByRole("button").textContent).toBe("по возрастанию");
        await userEvent.dblClick(screen.getByRole("button"));
        const desc = screen.getByTestId("desc");
        await userEvent.click(desc);
        expect(screen.getByRole("button").textContent).toBe("по убыванию");
    })
})