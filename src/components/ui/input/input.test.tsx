import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";

import { Input, type InputProps } from "./input";

const placeholder = "Input placeholder";

describe("Input", () => {
  afterEach(() => cleanup());

  const defaultProps: InputProps = {};

  const setup = (props: typeof defaultProps) => render(<Input {...props} />);

  test("should render", () => {
    setup(defaultProps);

    expect(screen).toBeDefined();
  });

  test("initially should not show a value and must show the placeholder", () => {
    setup({ ...defaultProps, placeholder });

    const input: HTMLInputElement = screen.getByRole("textbox");
    const placeholderElement = screen.getByPlaceholderText(placeholder);

    expect(input.value).toBe("");
    expect(placeholderElement).toBeDefined();
  });

  test("update the input when the user type", async () => {
    setup(defaultProps);
    const user = userEvent.setup();
    const input: HTMLInputElement = screen.getByRole("textbox");

    await user.type(input, "Hello");

    expect(input.value).toBe("Hello");
  });
});
