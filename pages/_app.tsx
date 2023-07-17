import { AppProps } from "next/app";
import "../app/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default App;
