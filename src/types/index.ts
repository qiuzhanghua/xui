export type ComponentBrandColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "link";

export type ComponentStateColor = "info" | "success" | "warning" | "error";

export type ComponentColor = ComponentStateColor | ComponentBrandColor;

export type ComponentStatus = "active" | "disable";

export type ComponentSize = "lg" | "md" | "sm" | "xs" | "wide" | "block";

export type ComponentShape = "circle" | "square";

export interface ComponentBaseProps {
  class?: string;
  // 'data-theme'?: string;
}
