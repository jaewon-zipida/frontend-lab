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
            <Card number="01" title="텍스트 에디터 꾸미기" onMoveDetail={onMoveDetail} />
            <Card number="02" title="SNS 카카오 로그인" onMoveDetail={onMoveDetail} />
            <Card number="03" title="주소검색 API 구현하기" onMoveDetail={onMoveDetail} />
            <Card number="04" title="웹뷰 모바일로 얹히기" onMoveDetail={onMoveDetail} />
        </div>
    );
}
export default Home;
