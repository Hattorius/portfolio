import styled from "styled-components";
import home from "../../public/home.jpg";

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    max-width: 1040px;
`;

export const VideoIndex = () => {
    return (
        <Wrapper>
            <Image src={home}/>
        </Wrapper>
    );
}