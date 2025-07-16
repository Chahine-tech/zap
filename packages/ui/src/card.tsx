import { type JSX } from "solid-js";
import { cn } from "./lib/utils";

export function Card(props: {
  className?: string;
  title: string;
  children: JSX.Element;
  href: string;
}): JSX.Element {
  return (
    <a
      class={cn(
        "block rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200",
        props.className
      )}
      href={`${props.href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center">
          {props.title} <span class="ml-2 text-muted-foreground">→</span>
        </h2>
        <p class="text-muted-foreground">{props.children}</p>
      </div>
    </a>
  );
}
