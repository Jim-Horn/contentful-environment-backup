import cleanString from "./cleanString";

const testData = [
    { dirty: "", clean: "" },
    { dirty: "a-b", clean: "a_b" },
    { dirty: "#$*(@1", clean: "_____1" },
    { dirty: "\n\nalpha# 1,2,3!", clean: "__alpha__1_2_3_" },
    { dirty: "Some long string", clean: "Some_long_string" },
];

describe("cleanString should remove characters that aren't alpha-numeric", () => {
    testData.forEach((el) => {
        test(`cleanString("${el.dirty}") should return "${el.clean}"`, () => {
            expect(cleanString(el.dirty)).toBe(el.clean);
        });
    });
});
