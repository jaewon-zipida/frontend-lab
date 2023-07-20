import { ContainerProps } from "@/constants/types/container";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const ContentsArea = styled.div`
    width: 840px;
    padding-top: 100px;
`;

const Layout = ({ children }: ContainerProps) => {
    return (
        <Container>
            <ContentsArea>{children}</ContentsArea>
        </Container>
    );
};

export default Layout;
