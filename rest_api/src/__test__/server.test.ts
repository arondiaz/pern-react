describe("Nuestro primer test", () => {
  test("Debe verificar que 1 + 1 sean 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("1 + 1 no debe ser 3", () => {
    expect(1 + 1).not.toBe(3);
  });
});
