import DetailTitle from "@/components/DetailTitle";
import Area from "@/containers/Area";
import DetailTemplate01 from "@/templates/DetailTemplate01";
import DetailTemplate02 from "@/templates/DetailTemplate02";
import DetailTemplate03 from "@/templates/DetailTemplate03";
import DetailTemplate04 from "@/templates/DetailTemplate04";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const detailData = [
    { id: "01", title: "텍스트에디터 꾸미기(feat. react-quill)" },
    { id: "02", title: "텍스트에디터 꾸미기(feat. ckEditor)" },
    { id: "03", title: "카카오/네이버/구글 로그인 구현하기" },
    { id: "04", title: "주소 검색 API 구현하기" },
    { id: "05", title: "웹 뷰를 모바일로 얹히기" },
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
        </Area>
    );
}

export default LibraryDetail;
