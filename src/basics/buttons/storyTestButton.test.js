import React from "react";
import { render, screen } from "@testing-library/react";
import { Disabled } from "./buttons.stories.js";

test("displays the button as disabled when isDisabled prop is true", () => {
  render(<Disabled {...Disabled.args} />);

  expect(screen.getByRole("button")).toBeDisabled();
});
