import { createHighlighter } from "shiki";
import { createCssVariablesTheme } from "shiki";

// Create a custom CSS variables theme, the following are the default values
const myTheme = createCssVariablesTheme({
  name: "css-variables",
  variablePrefix: "--shiki-",
  variableDefaults: {},
  fontStyle: true,
});

export const highlighter = await createHighlighter({
  langs: ["bash"],
  themes: [myTheme], // register the theme
});

export const codeToHtml = (code: string, lang?: string) =>
  highlighter.codeToHtml(code, {
    lang: lang ? lang : "bash",
    theme: "css-variables", // use the theme
  });
