import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @font-face {
    font-family: Pepi-Regular;
    src: url(/Pepifont/PepiBlack-Regular.otf);
  }
  @font-face {
    font-family: Pepi-Italic;
    src: url(/Pepifont/PepiBlack-Italic.otf);
  }
  @font-face {
    font-family: Pepi-Bold;
    src: url(/Pepifont/PepiBold-Bold.otf);
  }
  @font-face {
    font-family: Pepi-BoldItalic;
    src: url(/Pepifont/PepiBold-BoldItalic.otf);
  }
  @font-face {
    font-family: Pepi-HairItalic;
    src: url(/Pepifont/PepiHair-Italic.otf);
  }
  @font-face {
    font-family: Pepi-HairRegular;
    src: url(/Pepifont/PepiHair-Regular.otf);
  }
  @font-face {
    font-family: Pepi-HeavyItalic;
    src: url(/Pepifont/PepiHeavy-Italic.otf);
  }
  @font-face {
    font-family: Pepi-HeavyRegular;
    src: url(/Pepifont/PepiHeavy-Regular.otf);
  }
  @font-face {
    font-family: Pepi-LightItalic;
    src: url(/Pepifont/PepiLight-Italic.otf);
  }
  @font-face {
    font-family: Pepi-LightRegular;
    src: url(/Pepifont/PepiLight-Regular.otf);
  }
  @font-face {
    font-family: Pepi-MediumItalic;
    src: url(/Pepifont/PepiMedium-Italic.otf);
  }
  @font-face {
    font-family: Pepi-MediumRegular;
    src: url(/Pepifont/PepiMedium-Regular.otf);
  }
  @font-face {
    font-family: Pepi-RegularItalic;
    src: url(/Pepifont/PepiRegular-Italic.otf);
  }
  @font-face {
    font-family: Pepi-Regular;
    src: url(/Pepifont/PepiRegular-Regular.otf);
  }
  @font-face {
    font-family: Pepi-SemiBold;
    src: url(/Pepifont/PepiSemiBold.otf);
  }
  @font-face {
    font-family: Pepi-SemiBoldItalic;
    src: url(/Pepifont/PepiSemiBold-Italic.otf);
  }
  @font-face {
    font-family: Pepi-ThinItalic;
    src: url(/Pepifont/PepiThin-Italic.otf);
  }
  @font-face {
    font-family: Pepi-ThinRegular;
    src: url(/Pepifont/PepiThin-Regular.otf);
  }
  @font-face {
    font-family: Pepi-UltraItalic;
    src: url(/Pepifont/PepiUltra-Italic.otf);
  }
  @font-face {
    font-family: Pepi-UltraRegular;
    src: url(/Pepifont/PepiUltra-Regular.otf);
  }
  * {
    font-family: Pepi-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.input}; 
    border-radius: 10px;
  }
`;

export default ResetCSS;
