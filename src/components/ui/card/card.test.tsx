import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

import { Card, CardActions, CardContent, CardTitle } from "./card";

describe("Card", () => {
  afterEach(() => cleanup());

  const setup = () =>
    render(
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardContent>Card Content</CardContent>
        <CardActions>Card Actions</CardActions>
      </Card>
    );

  test("should render", () => {
    setup();

    expect(screen).toBeDefined();
  });
});
