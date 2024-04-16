import plugin from 'tailwindcss/plugin';
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        "theme-light": {
          "--primary-color": "#1890ff",
          "--success-color": "#52c41a",
          "--warning-color": "#faad14",
          "--error-color": "#ff4d4f",
        },
        "theme-dark": {
          "--primary-color": "#1890ff",
          "--success-color": "#52c41a",
          "--warning-color": "#faad14",
          "--error-color": "#ff4d4f",
        },

      });
    }),
  ],
} satisfies Config;

const light = {
  primary: '#6750A4', // Main color used across screens and components
  onPrimary: '#FFFFFF', // Text and icons shown against the primary color
  primaryContainer: '#EADDFF', // Standout container color for key components
  onPrimaryContainer: '#21005D', // Contrast-passing color shown against the primary container

  secondary: '#625B71', // Accent color used across screens and components
  onSecondary: '#FFFFFF', // Text and icons shown against the secondary color
  secondaryContainer: '#E8DEF8', // Less prominent container color, for components like tonal buttons
  onSecondaryContainer: '#1D192B', // Contrast-passing color shown against the secondary container

  tertiary: '#7D5260',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFD8E4', // Contrasting container color, for components like input fields
  onTertiaryContainer: '#31111D', // Contrast-passing color shown against the tertiary container

  error: '#B3261E', // Indicates errors, such as invalid input in a date picker
  onError: '#FFFFFF', // Used for text and icons on the error color
  errorContainer: '#F9DEDC', 
  onErrorContainer: '#410E0B',

  surface: '#FEF7FF', // Surface color for components like cards, sheets, and menus
  onSurface: '#1D1B20', // Text and icons shown against the surface color
  surfaceVariant: '#E7E0EC', // Alternate surface color, can be used for active states
  onSurfaceVariant: '#49454F', // For text and icons to indicate active or inactive component state
  surfaceContainer: '#F3EDF7', 

  outline: '#79747E', // Subtle color used for boundaries
  outlineVariant: '#CAC4D0', // Outline-variant is used to define the border of a component where 3:1 contrast ratio isn’t required, a container, or a divider.
}

const dark = {
  primary: '#D0BCFF', // Main color used across screens and components
  onPrimary: '#381E72', // Text and icons shown against the primary color
  primaryContainer: '#4F378B', // Standout container color for key components
  onPrimaryContainer: '#EADDFF', // Contrast-passing color shown against the primary container

  secondary: '#CCC2DC', // Accent color used across screens and components
  onSecondary: '#332D41', // Text and icons shown against the secondary color
  secondaryContainer: '#4A4458', // Less prominent container color, for components like tonal buttons
  onSecondaryContainer: '#E8DEF8', // Contrast-passing color shown against the secondary container

  tertiary: '#EFB8C8',
  onTertiary: '#492532F',
  tertiaryContainer: '#633B48', // Contrasting container color, for components like input fields
  onTertiaryContainer: '#FFD8E4', // Contrast-passing color shown against the tertiary container

  error: '#F2B8B5', // Indicates errors, such as invalid input in a date picker
  onError: '#601410', // Used for text and icons on the error color
  errorContainer: '#8C1D18', 
  onErrorContainer: '#F9DEDC',

  surface: '#141218', // Surface color for components like cards, sheets, and menus
  onSurface: '#E6E0E9', // Text and icons shown against the surface color
  surfaceVariant: '#49454F', // Alternate surface color, can be used for active states
  onSurfaceVariant: '#CAC4D0', // For text and icons to indicate active or inactive component state
  surfaceContainer: '#211F26', 

  outline: '#938F99', // Subtle color used for boundaries
  outlineVariant: '#49454F', // Outline-variant is used to define the border of a component where 3:1 contrast ratio isn’t required, a container, or a divider.
}

export default config;
