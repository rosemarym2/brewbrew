import { random } from './random';
import fetch from 'jest-fetch-mock'

beforeEach(() => {
    fetch.resetMocks()
})

test("testing the random function", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "test" }))
    const data = await random()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(data).toEqual({ data: "test" })
})

test("testing the random function", async () => {
    fetch.mockReject(() => "api failed")
    const data = await random()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(data).toEqual(null)
})  