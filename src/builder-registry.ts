"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ConfettiButton from "./components/ConfettiButton/ConfettiButton";
import { Hero } from "./components/Hero/Hero";

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

Builder.registerComponent(Hero, {
  name: "Hero",
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "I am child text block!" } },
    },
  ],
  childRequirements: {
    message: "You can only put Buttons, Text, or Headings in a Hero",
    query: {
      "component.name": { $in: ["Button", "Text", "Heading"] },
    },
  },
});
