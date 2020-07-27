import "@testing-library/jest-dom";
import { useForm } from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en Hook useForm", () => {
  const initialForm = {
    name: "daniel",
    email: "daniel@danielavila.org",
  };

  test("Debe de retornar un formulario por defecto ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValue, handleInputChange, reset] = result.current;

    expect(formValue).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de cambiar el valor del formulario (name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "avila",
        },
      });
    });

    const [formValue] = result.current;

    expect(formValue).toEqual({
      ...initialForm,
      name: "avila",
    });
  });

  test("Debe de reestablecer formulario con valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "avila",
        },
      });
      reset();
    });

    const [formValue] = result.current;
    expect(formValue).toEqual(initialForm);
  });
});
