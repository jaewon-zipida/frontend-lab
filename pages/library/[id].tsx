import DetailTitle from "@/components/DetailTitle";
import Area from "@/containers/Area";
import DetailTemplate01 from "@/templates/DetailTemplate01";
import DetailTemplate02 from "@/templates/DetailTemplate02";
import DetailTemplate03 from "@/templates/DetailTemplate03";
import DetailTemplate04 from "@/templates/DetailTemplate04";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailTemplate05 from "/app/templates/DetailTemplate05";

const detailData = [
    // { id: "01", title: "텍스트에디터 꾸미기(feat. react-quill)" },
    { id: "02", title: "텍스트에디터 꾸미기(feat. ckEditor)" },
    { id: "03", title: "카카오/네이버/구글 로그인 구현하기" },
    { id: "04", title: "주소 검색 API 구현하기" },
    { id: "05", title: "웹 뷰를 모바일로 이식하기" },
    { id: "06", title: "드래그 앤 드랍 구현하기" },
    { id: "07", title: "스켈레톤 적용하기" },
    { id: "08", title: "무한스크롤링에 화면이동 시 높이값 유지 구현하기" },
    { id: "09", title: "useForm, yup 사용해서 유효성 검사 로직 짜기" },
];

function LibraryDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState("");

    useEffect(() => {
        const selectData = detailData.find((item) => item.id === id);
        if (selectData) {
            setTitle(selectData.title);
        }
    }, [id]);

    return (
        <Area>
            <DetailTitle number={id}>{title}</DetailTitle>
            {id === "01" && <DetailTemplate01 />}
            {id === "02" && <DetailTemplate02 />}
            {id === "03" && <DetailTemplate03 />}
            {id === "04" && <DetailTemplate04 />}
            {id === "05" && <DetailTemplate05 />}
        </Area>
    );
}

export default LibraryDetail;
