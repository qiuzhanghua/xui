<script setup lang="ts">
import { reactive } from "vue";
import {
  type ComponentSize,
  type ComponentColor,
  type ComponentShape,
  ComponentBaseProps,
} from "../types";
export interface ButtonProps extends ComponentBaseProps {
  href?: string;
  size?: ComponentSize;
  color?: ComponentColor;
  shape?: ComponentShape;
  wide?: boolean;
  glass?: boolean;
  disabled?: boolean;
  animation?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const props = defineProps<ButtonProps>();
const classObject = reactive({
  btn: true,
  "btn-neutral": props.color === "neutral",
  "btn-primary": props.color === "primary",
  "btn-secondary": props.color === "secondary",
  "btn-accent": props.color === "accent",
  "btn-ghost": props.color === "ghost",
  "btn-link": props.color === "link",
  "btn-info": props.color === "info",
  "btn-success": props.color === "success",
  "btn-warning": props.color === "warning",
  "btn-error": props.color === "error",
  "btn-lg": props.size === "lg",
  "btn-md": props.size === "md",
  "btn-sm": props.size === "sm",
  "btn-xs": props.size === "xs",
  "btn-wide": props.wide,
  "btn-block": props.fullWidth,
  glass: props.glass,
  "btn-square": props.shape === "square",
  "btn-circle": props.shape === "circle",
  loading: props.loading,
  "loading-spinner": props.loading,
  disabled: props.disabled,
  "no-animation": !props.animation,
});
</script>

<template>
  <button :class="[classObject, props['class']]">
    <span v-if="loading" class="loading loading-spinner"></span>
    <slot>Daisy Button</slot>
  </button>
</template>
