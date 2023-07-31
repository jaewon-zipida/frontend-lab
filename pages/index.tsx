import { useRouter } from "next/router";
import Card from "../app/components/Card";

function Home() {
    const router = useRouter();
    const onMoveDetail = (number: string) => {
        router.push(`/library/${number}`);
    };
    return (
        <div>
            <p style={{ marginBottom: 20 }}>
                Lee Jaewon <span style={{ fontWeight: "bold" }}>LAB</span>
            </p>
            <Card
                number="01"
                title="텍스트에디터 꾸미기(feat. react-quill)"
                onMoveDetail={onMoveDetail}
            />
            <Card
                number="02"
                title="텍스트에디터 꾸미기(feat. ckEditor)"
                onMoveDetail={onMoveDetail}
            />
            <Card
                number="03"
                title="카카오/네이버/구글 로그인 구현하기"
                onMoveDetail={onMoveDetail}
            />
            <Card number="04" title="주소검색 API 구현하기" onMoveDetail={onMoveDetail} />
            <Card number="05" title="웹뷰 모바일로 이식하기" onMoveDetail={onMoveDetail} />
            <Card number="06" title="드래그 앤 드랍 구현하기" onMoveDetail={onMoveDetail} />
            <Card number="07" title="스켈레톤 적용하기" onMoveDetail={onMoveDetail} />
            <Card
                number="08"
                title="무한스크롤링에 화면이동 시 높이값 유지 구현하기"
                onMoveDetail={onMoveDetail}
            />
            <Card
                number="09"
                title="useForm, yup 사용해서 유효성 검사 로직 짜기"
                onMoveDetail={onMoveDetail}
            />
        </div>
    );
}
export default Home;
