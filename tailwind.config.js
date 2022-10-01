/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{tsx,jsx}", "./comp/**/*.{tsx,jsx}"],
  theme: {
    colors: {
      surface: "var(--a-surface)",
      "surface-hover": "var(--a-surface-hover)",
      "surface-subdued": "var(--a-surface-subdued)",
      "surface-danger-subdued": "var(--a-surface-danger-subdued)",
      "surface-warning-subdued": "var(--a-surface-warning-subdued)",
      "icon-warning": "var(--a-icon-warning)",
      "surface-info-subdued": "var(--a-surface-info-subdued)",
      "icon-info": "var(--a-icon-info)",
      "surface-neutral-subdued": "var(--a-surface-neutral-subdued)",
      "surface-neutral-subdued-hover": "var(--a-surface-neutral-subdued-hover)",
      "surface-neutral-moderate": "var(--a-surface-neutral-moderate)",
      "surface-success-subdued": "var(--a-surface-success-subdued)",
      "surface-success-moderate": "var(--a-surface-success-moderate)",
      "icon-success": "var(--a-icon-success)",
      "icon-default": "var(--a-icon-default)",
      "surface-decorative-1": "var(--a-surface-decorative-1)",
      "data-blue-subtle": "var(--a-data-blue-subtle)",
      "data-blue-moderate": "var(--a-data-blue-moderate)",
      "border-subtle": "var(--a-border-subtle)",
    },
    textColor: {
      default: "var(--a-text)",
      muted: "var(--a-text-muted)",
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};
