import styled from "styled-components";
import { VideoIndex } from "../components/VideoIndex";
import { Icon } from '@iconify/react';
import { Technologies } from "../components/Technologies";
import scylla from "../../public/scylla.png"
import { Language } from "../components/Language";
import clientside_hashing from "../../public/clientside-hashing.png";
import { useRef, useState } from "react";

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 1rem;
`;

const BiggerPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding: 1rem;
`;

const SmallerPage = styled.div`
    width: 100vw;
    position: relative;
    min-height: 40vh;
    padding: 1rem;
`;

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    padding: 1rem;
`;

const Text = styled.p`
    margin: 0;
`;

const Title = styled.h1`
    margin: 0;
    margin-bottom: .4rem;
`;

const SubTitle = styled.h1`
    margin: 0;
    margin-bottom: .4rem;
    color: #141414;
`;

const WhatIDoHolder = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1000px) {
        display: none;
    }
`;

const WhatIDo = styled.div`
    padding: 10px;
    display: flex;
    margin-bottom: 1rem;
`;

const BiggerText = styled.p`
    margin: 0;
    font-size: 1.4rem;
`;

const EvenBiggerText = styled.p`
    margin: 0;
    font-size: 2rem;
    text-align: center;
`;

const LanguagesWrapper = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100%;
`;

const StoriesWrapper = styled.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
    gap: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;

    @media (min-width: 1020px) {
        padding-left: 2rem;
    }
`;

const Story = styled.div`
    background: transparent;
    border: 2px solid #fff;
    width: max-content;
    height: max-content;
    padding: 1rem;
    color: #fff;
    cursor: pointer;

    background: linear-gradient(to left, #409cff 50%, #fff 50%) right;
    background-size: 200%;
    transition: 150ms ease-out;

    &:hover {
        background-position: left;
        color: #409cff;
    }
`;

const StoryImageHolder = styled.div`
    max-width: 300px;
    width: 100%;
`;

const StoryImage = styled.img`
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1.3rem;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 200px;
    transition: 500ms;

    @media (max-width: 1024px) {
        position: inherit;
    }
`;

const OverlayButtonHolder = styled.div`
    width: 100%;
    flex-grow: 1;
    text-align: right;
`;

const OverlayButton = styled.button`
    background: transparent;
    padding: 1rem;
    border: 2px solid #fff;
    color: #fff;
    font-size: 1.4rem;
    margin-right: 1rem;
    cursor: pointer;

    background: linear-gradient(to left, transparent 50%, #fff 50%) right;
    background-size: 200%;
    transition: 150ms ease-out;

    &:hover {
        background-position: left;
        color: #409cff;
    }

    @media (max-width: 1024px) {
        margin-right: 0;
    }
`;

const SpecialPage = styled(Page)`
    background: linear-gradient(to right, #4ca1fc 50%, #f5b5f2 50%) left;
    background-size: 200%;
    transition: 700ms ease-out;
`;

const SpecialWrapper = styled(Wrapper)`
    background: linear-gradient(to right, #409cff 50%, #f598f0 50%) left;
    background-size: 200%;
    transition: 500ms ease-out;
`;

export const Index = () => {
    const [active, setActive] = useState(false);
    const refStoriesNProjects = useRef(null);

    return (
        <>
            <Page>
                <Wrapper>
                    <Text style={{paddingLeft: '10%', fontSize: '2.8rem'}}>hi</Text>
                    <Text style={{paddingLeft: '15%', fontSize: '2rem'}}>I'm Aaron</Text>
                    <Text style={{paddingLeft: '6%', fontSize: '1.7rem'}}>A 19 year old developer</Text>
                </Wrapper>
                <VideoIndex/>
            </Page>
            <Page style={{backgroundColor: '#f2f2f2'}}>
                <Wrapper>
                    <FlexBox>
                        <div style={{width: '488px'}}>
                            <Title><span style={{color: '#d1d1d1'}}>#</span> Who I am</Title>
                            <Text style={{padding: '1rem', fontSize: '1.3rem', paddingLeft: '2rem'}}>
                                I am a 19 year old full stack software engineer.
                                I've got over 7 years of experience writing code,
                                and would love to work with you!
                            </Text>
                        </div>
                        <div style={{padding: '1rem', flexGrow: '1'}}>
                            <WhatIDoHolder>
                                <WhatIDo>
                                    <Icon icon="mdi:school-outline" width="86" height="86" />
                                    <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                        <BiggerText>At school</BiggerText>
                                        <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                    </div>
                                </WhatIDo>
                                <WhatIDo>
                                    <Icon icon="mdi:home-outline" width="86" height="86" />
                                    <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                        <BiggerText>At home</BiggerText>
                                        <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                    </div>
                                </WhatIDo>
                                <WhatIDo>
                                    <Icon icon="mdi:weather-night" width="86" height="86" />
                                    <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                        <BiggerText>At night</BiggerText>
                                        <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                    </div>
                                </WhatIDo>
                            </WhatIDoHolder>
                        </div>
                    </FlexBox>
                </Wrapper>
            </Page>
            <BiggerPage>
                <Wrapper>
                    <Title><span style={{color: '#d1d1d1'}}>#</span> What I work with</Title>
                    <Text style={{fontSize: '1.3rem', paddingLeft: '2rem'}}>A truly full stack stack</Text>
                    <Technologies tech={[
                        {
                            title: 'Back-end',
                            technologies: [
                                {name: 'Express.js', icon: 'devicon-express-original'},
                                {name: 'Flask.py', icon: 'devicon-flask-original'},
                                {name: 'Laravel.php', icon: 'devicon-laravel-plain'}
                            ]
                        },
                        {
                            title: 'Front-end',
                            technologies: [
                                {name: 'React.js/ts', icon: 'devicon-react-original'},
                                {name: 'Svelte.js/ts', icon: 'devicon-svelte-plain'},
                                {name: 'Vue.js/ts', icon: 'devicon-vuejs-plain'}
                            ]
                        },
                        {
                            title: 'Databases',
                            technologies: [
                                {name: 'MySQL', icon: 'devicon-mysql-plain'},
                                {name: 'Sqlite3', icon: 'devicon-sqlite-plain'},
                                {name: 'MongoDB', icon: 'devicon-mongodb-plain'},
                                {name: 'ScyllaDB', icon: <img src={scylla} width="48"/>}
                            ]
                        },
                        {
                            title: 'Systems',
                            technologies: [
                                {name: 'Linux', icon: 'devicon-linux-plain'},
                                {name: 'Kubernetes', icon: 'devicon-kubernetes-plain'}
                            ]
                        },
                        {
                            title: 'Blockchain',
                            technologies: [
                                {name: 'Web3.js', icon: <Icon icon="simple-icons:web3dotjs" width="48"/>},
                                {name: 'Ethers.js', icon: <Icon icon="logos:ethers" width="48"/>},
                                {name: ' project', icon: <span style={{fontSize: 24}}>remix</span>},
                                {name: '.py', icon: <span style={{fontSize: 24}}>brownie</span>},
                                {name: '.js', icon: <span style={{fontSize: 24}}>truffle</span>},
                                {name: '.js', icon: <span style={{fontSize: 24}}>waffle</span>}
                            ]
                        },
                        {
                            title: 'Data science',
                            technologies: [
                                {name: 'Pandas', icon: 'devicon-pandas-original'}
                            ]
                        }
                    ]}/>

                    <SubTitle><span style={{color: '#d1d1d1'}}>##</span> Languages breakdown</SubTitle>
                    <LanguagesWrapper>
                        I use
                        <Language lang="html" url="https://en.wikipedia.org/wiki/HTML" desc="HTML is the standard markup language for websites"/>,
                        <Language lang="css" url="https://en.wikipedia.org/wiki/CSS" desc="CSS is used to specify the presentation of a document written in HTML"/> and
                        <Language lang="javascript" url="https://en.wikipedia.org/wiki/JavaScript" desc="Javascript is one of the core technologies of WWW, used for client side web page behavior"/>&nbsp;
                        for my front end tools. And use
                        <Language lang="javascript (node)" url="https://en.wikipedia.org/wiki/Node.js" desc="A Javascript runtime environment that executes Javascript outside a web browser"/>,
                        <Language lang="python" url="https://en.wikipedia.org/wiki/Python_(programming_language)" desc="A high-level general-purpose programming language focussed on code readability"/>,
                        <Language lang="php" url="https://en.wikipedia.org/wiki/PHP" desc="Another general-purpose scripting language but intented for the web"/> and
                        <Language lang="julia" url="https://en.wikipedia.org/wiki/Julia_(programming_language)" desc="A high-level, high-performance and dynamic programming language, general-purpose but mainly well suited for numerical analysis"/>&nbsp;
                        for back end programming. This website's back end is for instance made in
                        <Language lang="julia" url="https://en.wikipedia.org/wiki/Julia_(programming_language)" desc="A high-level, high-performance and dynamic programming language, general-purpose but mainly well suited for numerical analysis"/> using 
                        <Language lang="genie.jl" url="https://genieframework.com/" desc="Highly productive full-stack Julia web framework for developing modern web applications"/>.
                        And write cool smart contracts in
                        <Language lang="solidity" url="https://en.wikipedia.org/wiki/Solidity" desc="An OOP programming language for implementing smart contracts on ethereum based networks"/>.
                    </LanguagesWrapper>
                </Wrapper>
            </BiggerPage>
            <SpecialPage style={active ? {backgroundPosition: 'right'} : {}}>
                <SpecialWrapper ref={refStoriesNProjects} style={{backgroundPosition: active ? 'right' : 'left', position: 'relative', overflowX: 'hidden'}}>
                    <div style={{display: 'flex', width: '200%'}}>
                        <div style={{width: '100%'}}>
                            <Title style={{color: '#fff'}}><span style={{color: '#0250a3'}}>#</span> My epic stories</Title>
                            <Text style={{fontSize: '1.3rem', paddingLeft: '2rem', color: '#fff'}}>(most of times just me ranting around)</Text>
                            <StoriesWrapper>
                                <Story>
                                    <StoryImageHolder>
                                        <StoryImage src={clientside_hashing}/>
                                    </StoryImageHolder>
                                    Normalize client-side hashing
                                </Story>
                                <Story>
                                    <StoryImageHolder>
                                        <StoryImage src={clientside_hashing}/>
                                    </StoryImageHolder>
                                    Normalize client-side hashing
                                </Story>
                                <Story style={{alignSelf: 'flex-end'}}>
                                    More
                                </Story>
                            </StoriesWrapper>
                        </div>
                        <div>
                            <Title style={{color: '#fff', textAlign: 'right'}}>my projectS <span style={{color: '#993c94'}}>#</span></Title>
                            <Text style={{fontSize: '1.3rem', paddingLeft: '2rem', color: '#fff', textAlign: 'right'}}>(I made these while I was bored)</Text>
                            <StoriesWrapper>
                                <Story style={{alignSelf: 'flex-end'}} className={active ? "OverlayButton2" : ""}>
                                    More
                                </Story>
                                <Story className={active ? 'Story2' : ''}>
                                    <StoryImageHolder>
                                        <StoryImage src={clientside_hashing}/>
                                    </StoryImageHolder>
                                    Normalize client-side hashing
                                </Story>
                            </StoriesWrapper>
                        </div>
                    </div>
                    <Overlay style={active ? {marginRight: 'calc(-200px + 1rem)'} : {}}>
                        <OverlayButtonHolder>
                            <OverlayButton className={active ? "OverlayButton2" : ""} onClick={() => {
                                if (!active) {
                                    refStoriesNProjects.current.scrollTo({
                                        top: 0,
                                        left: 100000,
                                        behavior: 'smooth'
                                    });
                                } else {
                                    refStoriesNProjects.current.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }
                                setActive(!active);
                            }}>{active ? "View stories" : "View projects"}</OverlayButton>
                        </OverlayButtonHolder>
                    </Overlay>
                </SpecialWrapper>
            </SpecialPage>
            
        </>
    );
}
