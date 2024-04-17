import { Builder, withChildren } from "@builder.io/react"; // import withChildren

export const Hero = (props: any) => <div>{props.children}</div>;

// pass your custom component to withChildren()
const HeroWithBuilderChildren = withChildren(Hero);

// specify defaultChildren when you register the component
Builder.registerComponent(HeroWithBuilderChildren, {
  name: "Hero",
  // Adding defaults is important for easy usability
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "I am child text block!" } },
    },
  ],
});
