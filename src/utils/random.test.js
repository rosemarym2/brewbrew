import { random } from "./random";
import fetch from "jest-fetch-mock";
// manual
// test("collects data", async () => {
//   // beforeEach(() => {
//   //   fetch.resetMocks();
//   // });
//   fetch.mockResponseOnce(JSON.stringify([{ test: "data" }]));

//   // const data = await random()

//   await random().then((res) => {
//     expect(res).toEqual([{ test: "dat" }]);
//   });
// });

beforeEach(() => {
  fetch.resetMocks()
})

// happy path
test("collects data", async () => {
  fetch.mockResponseOnce(JSON.stringify([{ test: "data" }]));
  const data = await random();
  expect(data).toEqual([{ test: "data" }]);
  expect(fetch).toHaveBeenCalledTimes(1)
});


// sad path
test("catches error and returns null", async () => {
  fetch.mockReject(() => "API failure")

  const data = await random()
  expect(data).toEqual(null)
  expect(fetch).toHaveBeenCalledTimes(1)
})

