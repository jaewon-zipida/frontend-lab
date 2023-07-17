import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    const onMoveDetail = () => {
        router.push("/library/타이틀");
    };
    return (
        <div>
            테스트
            <button onClick={onMoveDetail}>상세로</button>
        </div>
    );
}
export default Home;
