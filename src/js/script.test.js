import { convertToEnglish } from "./convertToEnglish.js";
import { convertToMorse } from "./convertToMorse.js";

describe("Test cases for converting English to Morse Code", () => {
  test("Should convert English to Morse correctly", () => {
    expect(convertToMorse("HelLo")).toBe(".... . .-.. .-.. ---");
    expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
    expect(convertToMorse("My name is Jack")).toBe(
      "-- -.-- / -. .- -- . / .. ... / .--- .- -.-. -.-"
    );
    expect(convertToMorse("    My naMe is jAck")).toBe(
      "/ / / / -- -.-- / -. .- -- . / .. ... / .--- .- -.-. -.-"
    );
  });
  test("Should insert error character if an untranslatable character is present", () => {
    expect(convertToMorse("he$llo")).toBe(".... . # .-.. .-.. ---");
    expect(convertToMorse("My na^me is #$ck")).toBe(
      "-- -.-- / -. .- # -- . / .. ... / # # -.-. -.-"
    );
    expect(convertToMorse("    m*y na@me is #+ck  ")).toBe(
      "/ / / / -- # -.-- / -. .- # -- . / .. ... / # # -.-. -.- / /"
    );
  });
});

describe("Test cases for converting Morse Code to English", () => {
  test("Should convert Morse to English correctly", () => {
    expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
    expect(
      convertToEnglish("-- -.-- / -. .- -- . / .. ... / .--- .- -.-. -.-")
    ).toBe("MY NAME IS JACK");
  });
  test("Should insert error character if an untranslatable character is present", () => {
    expect(convertToEnglish(".....")).toBe("5");
    expect(convertToEnglish(".... / $.. . / ...")).toBe("H #E S");
    expect(convertToEnglish("...#  4.0 98")).toBe("####");
  });
});
