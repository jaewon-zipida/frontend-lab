import { AppProps } from "next/app";
import Layout from "../app/containers/Layout";
// common css
import "styles/global.scss";
import Script from "next/script";
declare global {
    // Kakao 함수를 전역에서 사용할 수 있도록 선언
    interface Window {
        Kakao: any;
    }
}
function App({ Component, pageProps }: AppProps) {
    function kakaoInit() {
        // 페이지가 로드되면 실행
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log(window.Kakao.isInitialized());
    }
    return (
        <Layout>
            <Component {...pageProps} />
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>
        </Layout>
    );
}

export default App;
