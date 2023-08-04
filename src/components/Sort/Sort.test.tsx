import React from "react";
import {screen, render} from "@testing-library/react";
import {Sort} from "./Sort";
import userEvent from '@testing-library/user-event';

describe("Testing the Sort component", () => {
    test("snapshot of open select", async () => {
        const onChange = jest.fn();
        render(<Sort value="desc" onChange={onChange}  />);
        await userEvent.dblClick(screen.getByRole("button"));
        const listBox = screen.getByRole('listbox');
        expect(listBox).toMatchSnapshot();
    })
})