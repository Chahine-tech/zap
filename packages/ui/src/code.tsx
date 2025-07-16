import { type JSX } from "solid-js";
import { cn } from "./lib/utils";

export function Code(props: {
  children: JSX.Element;
  className?: string;
}): JSX.Element {
  return (
    <code 
      class={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        props.className
      )}
    >
      {props.children}
    </code>
  );
}
