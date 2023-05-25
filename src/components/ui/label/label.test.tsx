import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

import { Label, type LabelProps } from "./label";

const children = "Label";

describe("Label", () => {
  afterEach(() => cleanup());

  const defaultProps: Omit<LabelProps, "children"> = {};

  const setup = (props: typeof defaultProps) =>
    render(<Label {...props}>{children}</Label>);

  test("should render", () => {
    setup(defaultProps);

    expect(screen).toBeDefined();
  });

  test("should show the children", () => {
    setup(defaultProps);

    const children = screen.getByText(/label/i);
    expect(children).toBeDefined();
  });
});
