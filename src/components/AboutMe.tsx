import React from "react";
import styled from "styled-components";
import avatar from './../images/avatar.png';

const Wrapper = styled.div``;

const Content = styled.div`
    padding: 1rem;
    background-color: #0E1E25;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 1px 3px 0px #000000; 
    box-shadow: 0px 1px 3px 0px #000000;
    width: 100%;
    max-width: 650px;
    display: flex;
    color: #fff;
`;

const Title = styled.div`
    width: 100%;
    color: white;
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 2px;
    margin-left: 1rem;
`;

const Image = styled.div`
    background-image: url(${avatar});
    height: 8rem;
    width: 8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 1rem;
    border-radius: .8rem;
`;

const Text = styled.div``;

const Small = styled(Text)`
    font-size: 10px;
`;

export const AboutMe = ( props ) => {
    return (
        <Wrapper>
            <Title>About me</Title>
            <Content>
                <Image/>
                <Text>
                    Hi, I'm Aaron<br/>
                    A 19 year old developer from NL<br/>
                    Over 7 years of experience developing the web<br/>
                    4 years experience in freelance development<br/><br/>
                    <Small>(Currently being bored at university)</Small>
                </Text>
            </Content>
        </Wrapper>
    );
}