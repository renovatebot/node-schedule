import { isEOL, json, Schedule } from "../index";

test("all releases in schedule.json contain the required properties", () => {
  Object.keys(json).forEach((version) => {
    const release = (json as Schedule)[version];
    expect(typeof release.start).toBe("string");
    expect(typeof release.end).toBe("string");
  });
});

test("isEOL - throws", () => {
  expect(isEOL.bind(null, false)).toThrowError(/Invalid version type/);
  expect(isEOL.bind(null, true)).toThrowError(/Invalid version type/);
  expect(isEOL.bind(null, undefined)).toThrowError(/Invalid version type/);
  expect(isEOL.bind(null, "v0.11")).toThrowError(/Unknown version v0.11/);
});

test("isEOL accepts numbers and strings", () => {
  expect(isEOL("0.10")).toBe(true);
  expect(isEOL("v0.10")).toBe(true);
  expect(isEOL("v0.10.48")).toBe(true);
  expect(isEOL(5)).toBe(true);
  expect(isEOL("5")).toBe(true);
  expect(isEOL("v5")).toBe(true);
  expect(isEOL("v5.12.0")).toBe(true);
  expect(isEOL("v6")).toBe(true);
  expect(isEOL("v7")).toBe(true);
  expect(isEOL("v8")).toBe(true);
  expect(isEOL("v9")).toBe(true);
});
