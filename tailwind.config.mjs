import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
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
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				neon: {
					pink: "hsl(var(--neon-pink))",
					cyan: "hsl(var(--neon-cyan))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				display: ["var(--font-display)", "system-ui", "sans-serif"],
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
			},
			backgroundImage: {
				"grid-neon":
					"linear-gradient(to right, hsl(var(--neon-cyan) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--neon-pink) / 0.06) 1px, transparent 1px)",
				"hero-glow":
					"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--neon-pink) / 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, hsl(var(--neon-cyan) / 0.2), transparent), radial-gradient(ellipse 50% 30% at 0% 20%, hsl(var(--neon-cyan) / 0.15), transparent)",
			},
			boxShadow: {
				neon: "0 0 20px hsl(var(--neon-pink) / 0.45), 0 0 40px hsl(var(--neon-cyan) / 0.2)",
				"neon-sm": "0 0 12px hsl(var(--neon-pink) / 0.35)",
			},
			animation: {
				"pulse-slow": "pulse-slow 4s ease-in-out infinite",
				"gradient-shift": "gradient-shift 8s ease infinite",
			},
			keyframes: {
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" },
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
		},
	},
	plugins: [tailwindcssAnimate],
};
