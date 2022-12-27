import getEnvToDelete from "./getEnvToDelete";

const envs = [
    {
        name: "auto_2022-12-27_07-07-53_BAK",
        id: "auto_2022-12-27_07-07-53_BAK",
        status: "ready",
    },
    {
        name: "master-2021-01-11",
        id: "master-2021-01-11",
        status: "ready",
    },
    {
        name: "master-2021-01-11 [active]",
        id: "master",
        status: "ready",
    },
];

describe("Testing getEnvToDelete", () => {
    test("it should return the proper environment to delete", () => {
        expect(getEnvToDelete(envs, "auto", "BAK")).toStrictEqual({
            id: "auto_2022-12-27_07-07-53_BAK",
            name: "auto_2022-12-27_07-07-53_BAK",
            status: "ready",
        });
    });

    test("it should return undefined if no matching environment is found", () => {
        expect(getEnvToDelete(envs, "foo", "BAK")).toStrictEqual(undefined);
    });
});