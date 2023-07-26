import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Layout from "../app/containers/Layout";
// common css
import "styles/global.scss";

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
// const GlobalStyle = createGlobalStyle`
//     html,
//     body,
//     div,
//     span,
//     applet,
//     object,
//     iframe,
//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6,
//     p,
//     blockquote,
//     pre,
//     a,
//     abbr,
//     acronym,
//     address,
//     big,
//     cite,
//     code,
//     del,
//     dfn,
//     em,
//     img,
//     ins,
//     kbd,
//     q,
//     s,
//     samp,
//     small,
//     strike,
//     strong,
//     sub,
//     sup,
//     tt,
//     var,
//     b,
//     u,
//     i,
//     center,
//     dl,
//     dt,
//     dd,
//     ol,
//     ul,
//     li,
//     fieldset,
//     form,
//     label,
//     legend,
//     table,
//     caption,
//     tbody,
//     tfoot,
//     thead,
//     tr,
//     th,
//     td,
//     article,
//     aside,
//     canvas,
//     details,
//     embed,
//     figure,
//     figcaption,
//     footer,
//     header,
//     hgroup,
//     menu,
//     nav,
//     output,
//     ruby,
//     section,
//     summary,
//     time,
//     mark,
//     audio,
//     video {
//         margin: 0;
//         padding: 0;
//         border: 0;
//         font-size: 100%;
//         font: inherit;
//         vertical-align: baseline;
//     }
//     /* HTML5 display-role reset for older browsers */
//     article,
//     aside,
//     details,
//     figcaption,
//     figure,
//     footer,
//     header,
//     hgroup,
//     menu,
//     nav,
//     section {
//         display: block;
//     }
//     body {
//         line-height: 1;
//     }
//     ol,
//     ul {
//         list-style: none;
//     }
//     blockquote,
//     q {
//         quotes: none;
//     }
//     blockquote:before,
//     blockquote:after,
//     q:before,
//     q:after {
//         content: "";
//         content: none;
//     }
//     table {
//         border-collapse: collapse;
//         border-spacing: 0;
//     }

//     body {
//         background-color: #F5F3FF;
//     }

//     .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,
//     .ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners {
//         border-top-left-radius: 8px !important;
//         border-top-right-radius: 8px !important;
//         background-color: #f7f7f7;
//     }
//     .ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
//     .ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
//         border-bottom-left-radius: 8px !important;
//         border-bottom-right-radius: 8px !important;
//     }
// `;

export default App;
