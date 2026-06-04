import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { createElement } from "react";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import Toogle from "./Toogle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Toogle",
  component: Toogle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: "boolean",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    value: false,
    onClickToogle: fn(),
  },
} satisfies Meta<typeof Toogle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return createElement(Toogle, {
      ...args,
      value,
      onClickToogle: () => {
        args.onClickToogle?.();
        updateArgs({ value: !value });
      },
    });
  },
};
