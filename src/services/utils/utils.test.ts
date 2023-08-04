import { getTotalPage, createUrlSearchUsers } from "./index";

describe("Testing utils", () => {
    test('testing fn getTotalPage', () => {
        expect(getTotalPage(29)).toBe(1);
        expect(getTotalPage(75)).toBe(3);
        expect(getTotalPage(1000)).toBe(34);
        expect(getTotalPage(9000)).toBe(34);
    })

    test('testing fn createUrlSearchUsers', () => {
        expect(createUrlSearchUsers("qgfhjfgj", 45, "asc"))
            .toBe("search/users?q=qgfhjfgj&page=45&sort=repositories&order=asc");
    })
})