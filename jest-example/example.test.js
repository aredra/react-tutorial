// describe: test suite, it: test unit
// .to .not
describe("Expect test", () => {
  it("Add 1 + 2 to equals 3", () => {
    expect(1 + 2).toBe(3);
  });
  it("{age: 9999} to equal {age: 9999}", () => {
    expect({ age: 9999 }).toEqual({ age: 9999 });
  });
  it(".toHaveLength", () => {
    expect("Aredra").toHaveLength(6);
  });
  it(".toHaveProperty", () => {
    expect({ age: 9999, name: "Aredra" }).toHaveProperty("name");
    expect({ age: 9999, name: "Aredra" }).toHaveProperty("name", "Aredra");
  });
  it(".toBeDefined", () => {
    expect({ age: 9999, name: "Aredra" }.name).toBeDefined();
    // expect({ age: 9999, name: "Aredra" }.job).toBeDefined();
  });
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it(".toBeInstanceOf", () => {
    class Bar {}
    expect(new Bar()).toBeInstanceOf(Bar);
  });
});

describe("Async test", () => {
  it("async-await", async () => {
    function promise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(9999);
        }, 1000);
      });
    }

    const response = await promise();
    return expect(response).toBe(9999);
  });

  it("async-await error", async () => {
    function promise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Error"));
        }, 1000);
      });
    }

    let response;
    try {
      response = await promise();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
