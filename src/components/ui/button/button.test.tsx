import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Button, type ButtonProps } from "./button";

const children = "Button";

describe("Button", () => {
  afterEach(() => cleanup());

  const defaultProps: Omit<ButtonProps, "children"> = {};

  const setup = (props: typeof defaultProps) =>
    render(<Button {...props}>{children}</Button>);

  test("should render", () => {
    setup(defaultProps);

    expect(screen).toBeDefined();
  });

  test("should show the children", () => {
    setup(defaultProps);

    const children = screen.getByText(/button/i);
    expect(children).toBeDefined();
  });

  test("click at the button", async () => {
    setup(defaultProps);
    const user = userEvent.setup();

    const spyOn = vi.spyOn(user, "click");
    const button = screen.getByRole("button");

    await user.click(button);
    expect(spyOn).toHaveBeenCalledOnce();
  });
});
