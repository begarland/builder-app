"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ConfettiButton from "./components/ConfettiButton/ConfettiButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ConfettiButton, {
  name: "ConfettiButton",
  inputs: [
    {
      name: "buttonText",
      type: "string",
    },
  ],
});
