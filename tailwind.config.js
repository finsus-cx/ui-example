import finsusPreset from '@finsus-cx/ui/tailwind-preset';

export default {
  presets: [finsusPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@finsus-cx/ui/dist/**/*.js",
  ],
}
