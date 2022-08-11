const { expect } = require("chai");
const cMA = require("../11-CloclMinuteAdder/ClockMinuteAdder");
describe("Sumando minutos", function () {
  it("Poniendo en hora el reloj", () => {
    const cMA = clockMinuteAdder("09:00", 20);
    expect(cMA).toBe("09:20");
    const cMA = clockMinuteAdder("01:30", 30);
    expect(cMA).toBe("02:00");
    const cMA = clockMinuteAdder("12:45", 100);
    expect(cMA).toBe("01:45");
  });
});
