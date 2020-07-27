import "@testing-library/jest-dom";
import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en Hook useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de retornar counter con valor enviado por props", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe de incrementar counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  test("Debe de decrementar counter ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(99);
  });

  test("Debe de resetear counter ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
