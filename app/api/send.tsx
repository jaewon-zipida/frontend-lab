import axios from "./axios";

// 기본 RequestConfig 타입 정의
type RequestConfig = {
    url: string;
    method: string;
    headers?: {
        "Content-Type"?: string;
        Authorization?: string;
    };
    data?: string | FormData;
};

// contentType이 있는 경우 추가될 속성들을 정의한 타입
type RequestConfigWithContentType = RequestConfig & {
    headers: {
        "Content-Type": string;
    };
};

// body가 있을 경우 추가될 속성들을 정의한 타입
type RequestConfigWithBody = RequestConfig & {
    data: string | FormData;
};

// isAuth가 true일 경우 추가될 속성들을 정의한 타입
type RequestConfigWithIsAuth = RequestConfig & {
    headers: {
        "Content-Type": string;
        Authorization: string;
    };
};

type FinalRequestConfig =
    | RequestConfig
    | RequestConfigWithContentType
    | RequestConfigWithBody
    | RequestConfigWithIsAuth;

const Send = async (
    url: string, // /api/v1/...
    method: string, // GET, POST, PUT, DELETE
    contentType: string | undefined, // content-type : formData, json
    body: string | FormData | undefined, // 보낼 데이터
    isAuth: boolean, // 토큰 필요 여부
    isConsole: boolean // 요청 값을 확인하고 싶을 때
) => {
    const token = "my token";

    let config: FinalRequestConfig = {
        url,
        method,
    };

    // contentType이 있는 경우
    if (contentType) {
        config = {
            ...config,
            headers: {
                "Content-Type":
                    contentType === "formData" ? "multipart/form-data" : "application/json",
            },
        };
    }

    // body가 있는 경우
    if (body) {
        config = { ...config, data: body };
    }

    // 토큰이 필요한 경우
    if (isAuth && token) {
        config = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            },
        };
    }

    // 콘솔에 찍을 경우
    if (isConsole) {
        console.log(`API 요청 세팅값 : ${JSON.stringify(config)}`);
    }

    console.log("요청 한번만 하는거 맞제?");
    return (await axios(config)).data;
};

export default Send;
