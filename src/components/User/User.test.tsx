import React from "react";
import {UserBlock} from "./User";
import {screen, render} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Testing button", () => {
    let user = {
        id: 2,
        login: "fgjgj",
        avatarUrl: "ghjfj",
    }

    test("changing button text", async () => {
        const getData = jest.fn();
        render(<UserBlock user={user} getData={getData}  />);
        await userEvent.click(screen.getByTestId("btn"));
        expect(screen.getByTestId("btn").textContent).toBe("спрятать");
        await userEvent.click(screen.getByTestId("btn"));
        expect(screen.getByTestId("btn").textContent).toBe("подробнее");
    })
})