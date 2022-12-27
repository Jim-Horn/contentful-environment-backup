import getBackupName from "./getBackupName";

test("getBackupName should work", () => {
    expect(
        getBackupName("pre", new Date("2022-12-27T20:46:18.736Z"), "post")
    ).toBe("pre_2022-12-27_12-46-18_post");
});