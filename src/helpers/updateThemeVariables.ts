export const updateThemeVariables = (theme: string) => {
  const root = document.documentElement;

  const darkThemeStyles = {
    "--body-color": "#00150F",
    "--text-color": "rgb(255,255,255,0.6)",
    "--title-color": "#FFFFFF",
    "--secondary-color": "#00D094",
    "--social-border-color-2": "rgb(255,255,255,0.08)",
    "--wh-color": "#1B2D29",
    "--tertiary-color": "#002A1E",
    "--partner-color": "#003E2C",
    "--floating-content-bg-color": "rgba(63,81,75,0.8)",
    "--floating-content-bg-color-2": "rgba(255,255,255,0.08)",
    "--bg-trans-color": "rgba(237,242,248,0.02)",
    "--bg-color": "rgba(237,242,248,0.08)",
    "--border-color": "rgba(230,237,251,0.12)",
    "--border-color-2": "rgba(255,255,255,0.08)",
    "--box-shadow": "0px 12px 30px rgba(14, 4, 0, 0.24)",
    "--bg-grad-color": "#253A33",
    "--bg-grad-color-3": "rgba(32,56,51,0.5)",
    "--bg-grad-color-trans-3": "rgba(2,29,21,0)",
    "--service-item-border-color": "#091E19",
    "--bg-shape-color-2": "rgba(213,229,249,0.16)",
    "--bg-shape-color-trans-2": "rgba(255,255,255,0.04)",
  };

  const lightThemeStyles = {
    "--body-color": "#FFFFFF",
    "--text-color": "#6B777F",
    "--title-color": "#0C263A",
    "--secondary-color": "#0A4FD5",
    "--social-border-color-2": "#ECEFF2",
    "--wh-color": "#ffffff",
    "--tertiary-color": "#E0FAF2",
    "--partner-color": "#EDF2F8",
    "--floating-content-bg-color": "rgba(255,255,255,0.9)",
    "--floating-content-bg-color-2": "rgba(255,255,255,0.5)",
    "--bg-trans-color": "rgba(237,242,248,0.22)",
    "--bg-color": "#EDF2F8",
    "--border-color": "#E6EDFB",
    "--border-color-2": "#E6EDFB",
    "--box-shadow": "0px 12px 30px rgba(33, 85, 186, 0.08)",
    "--bg-grad-color": "#FFF",
    "--bg-grad-color-3": "#E9EfF7",
    "--bg-grad-color-trans-3": "rgba(240, 244, 250, 0.16)",
    "--service-item-border-color": "#fff",
    "--bg-shape-color-2": "#D5E5F9",
    "--bg-shape-color-trans-2": "rgba(255,255,255,0.22)",
  };

  const selectedThemeStyles =
    theme === "dark" ? darkThemeStyles : lightThemeStyles;

  Object.entries(selectedThemeStyles).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};
