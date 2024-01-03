import getDateString from "./getDateString";

test('getDateString should properly parse the date', ()=>{expect(
                                                              getDateString(
                                                                  new Date(
                                                                      "2022-12-27T20:46:18.736Z"
                                                                  )
                                                              )
                                                          ).toBe(
                                                              "2022-12-27_12-46"
                                                          );})