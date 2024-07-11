import { validUser } from "./validUser";

describe("Валидация юзера", () => {
  test("Граничные значения", () => {
    expect(validUser({ name: "Hell", password: "123456" })).toBe(true);
  });

  test("Неправильный логин", () => {
    expect(validUser({ name: "Hel", password: "123456" })).toBe(false);
  });

  test("Неправильный пароль", () => {
    expect(validUser({ name: "Hell", password: "12345" })).toBe(false);
  });

  test("Неправильно все", () => {
    expect(validUser({ name: "Hel", password: "1234" })).toBe(false);
  });

  test("Пустой юзер", () => {
    expect(validUser({ name: "", password: "" })).toBe(false);
  });
});
