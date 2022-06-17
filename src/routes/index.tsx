import styled from "styled-components";
import { VideoIndex } from "../components/VideoIndex";
import { Icon } from '@iconify/react';
import { Technologies } from "../components/Technologies";
import { Language } from "../components/Language";
import { useEffect, useRef, useState } from "react";

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
    display: flex;
    gap: 3rem;
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

const Content = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Contact = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ContactHalf = styled.div`
    flex-grow: 1;
`;

const ContactTable = styled.table`
    width: 100%;
`;

const ContactRow = styled.tr``;

const ContactValue = styled.td`
    padding-top: 1rem;
    font-size: 1.2rem;
`;

const Link = styled.a`
    color: #000;
`;

const CornerLinesHolder = styled.div`
    position: absolute;
    top: 2rem;
    right: 3rem;
    height: 300px;
    width: 300px;
    overflow: hidden;

    @media (max-width: 1140px) {
        display: none;
    }
`;

const CornerLinesContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const CornerLine = styled.div`
    transform: rotateY(0deg) rotate(45deg);
    height: .3rem;
    width: 500%;
    background: linear-gradient(to right, #4ca1fc 50%, #f5b5f2 50%) left;
    background-size: 200%;
    position: absolute;
    transition: 150ms;
`;

const Yline = styled.div`
    position: absolute;
    height: 100vh;
    width: 1rem;
    top: 0;
    left: 10%;
    background: #f2f2f2;

    @media (max-width: 1530px) {
        display: none;
    }
`;

const DegDegreeBox = styled.div`
    width: 3rem;
    height: 3rem;
    background: linear-gradient(to right, #4ca1fc 50%, #f5b5f2 50%) left;
    background-size: 200%;
    position: absolute;
    transition: 150ms;
    transform: rotateY(0deg) rotate(45deg);
    transition: all .5s ease-in-out;

    &:hover {
        transform: rotate(315deg);
    }

    @media (max-width: 960px) {
        display: none;
    }
`;

const Box = styled.div`
    width: 4rem;
    height: 3rem;
    background: linear-gradient(to right, #4ca1fc 50%, #f5b5f2 50%) left;
    background-size: 200%;
    position: absolute;
    transition: all .5s ease-in-out;

    &:hover {
        width: 6rem;
        height: 4rem;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

const SmallIntro = styled.div`
    margin-left: 6%;
    padding-left: 2rem;
    width: max-content;
    padding-right: 2rem;
    padding-bottom: 10px;
    transition: 450ms ease-in-out;
    border-width: 0px;

    &:hover {
        transform: rotateY(0deg) rotate(-30deg);
        border: 2px solid black;
    }
`;

export const Index = () => {
    const [active, setActive] = useState(false);
    const refStoriesNProjects = useRef(null);

    useEffect(() => {
        const elements = document.getElementsByClassName('moveme') as HTMLCollectionOf<HTMLElement>;
        const interval = setInterval(() => {
            for (var i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.left = (Math.random() * 10 + (Math.random() < 0.5 ? 90 : 0)).toString() + '%';
                element.style.top = (Math.random() * 10 + (Math.random() < 0.5 ? 90 : 0)).toString() + '%';
            }
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Page>
                <Wrapper>
                    <SmallIntro style={{borderColor: active ? '#f5b5f2' : '#4ca1fc'}}>
                        <Text style={{paddingLeft: '4%', fontSize: '2.8rem', width: 'max-content'}}>hi</Text>
                        <Text style={{paddingLeft: '9%', fontSize: '2rem', width: 'max-content'}}>I'm Aaron</Text>
                        <Text style={{fontSize: '1.7rem', width: 'max-content'}}>A 19 year old developer</Text>
                    </SmallIntro>
                </Wrapper>
                <VideoIndex/>
                <Yline/>
                <DegDegreeBox className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '30%', left: '20%'}}/>
                <Box className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '10%', left: '60%'}}/>
                <CornerLinesHolder>
                    <CornerLinesContent>
                        <CornerLine style={{top: 0, right: '-47rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-46rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-45rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-44rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-43rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-42rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-41rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-40rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-39rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-38rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-37rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-36rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-35rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-34rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-33rem', backgroundPosition: active ? 'right' : 'left'}}/>
                        <CornerLine style={{top: 0, right: '-32rem', backgroundPosition: active ? 'right' : 'left'}}/>
                    </CornerLinesContent>
                </CornerLinesHolder>
            </Page>
            <SmallerPage style={{backgroundColor: '#f2f2f2'}}>
                <Wrapper style={{marginBottom: '20vh'}}>
                    <FlexBox>
                        <div style={{width: '488px'}}>
                            <Title><span style={{color: '#d1d1d1'}}>#</span> Who I am</Title>
                            <Text style={{padding: '1rem', fontSize: '1.3rem', paddingLeft: '2rem'}}>
                                I am a 19 year old full stack software engineer.
                                I've got over 7 years of experience writing code,
                                and would love to work with you!
                            </Text>
                        </div>
                        <div style={{padding: '1rem', flexGrow: '1'}}></div>
                    </FlexBox>
                    <WhatIDoHolder>
                        <WhatIDo>
                            <Icon icon="mdi:school-outline" width="86" height="86" />
                            <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                <BiggerText>At school</BiggerText>
                            </div>
                        </WhatIDo>
                        <WhatIDo>
                            <Icon icon="mdi:home-outline" width="86" height="86" />
                            <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                <BiggerText>At home</BiggerText>
                            </div>
                        </WhatIDo>
                        <WhatIDo>
                            <Icon icon="mdi:weather-night" width="86" height="86" />
                            <div style={{flexGrow: '1', paddingLeft: '1rem'}}>
                                <EvenBiggerText style={{marginTop: '10px'}}>I code</EvenBiggerText>
                                <BiggerText>At night</BiggerText>
                            </div>
                        </WhatIDo>
                    </WhatIDoHolder>
                </Wrapper>
                <Yline style={{background: 'white'}}/>
                <DegDegreeBox className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '60%', left: '47%'}}/>
                <Box className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '80%', left: '10%'}}/>
            </SmallerPage>
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
                                {name: 'ScyllaDB', icon: <img src={"/public/scylla.png"} width="48"/>}
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
                <Yline/>
                <DegDegreeBox className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '40%', left: '94%'}}/>
                <Box className="moveme" style={{backgroundPosition: active ? 'right' : 'left', top: '30%', left: '90%'}}/>
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
                                        <StoryImage src={"/public/clientside-hashing.png"}/>
                                    </StoryImageHolder>
                                    Normalize client-side hashing
                                </Story>
                                <Story>
                                    <StoryImageHolder>
                                        <StoryImage src={"/public/clientside-hashing.png"}/>
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
                                        <StoryImage src={"/public/clientside-hashing.png"}/>
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
                <Yline style={{background: 'white'}}/>
                <DegDegreeBox className="moveme" style={{background: 'white', top: '30%', left: '90%'}}/>
                <Box className="moveme" style={{background: 'white', top: '30%', left: '70%'}}/>
            </SpecialPage>
            <Page>
                <Wrapper>
                    <Title><span style={{color: '#d1d1d1'}}>#</span> Contact me</Title>
                    <Content>
                        <Contact>
                            <ContactHalf>
                                <ContactTable>
                                    <ContactRow>
                                        <ContactValue>Name</ContactValue>
                                        <ContactValue>Aaron Jonk</ContactValue>
                                    </ContactRow>
                                    <ContactRow>
                                        <ContactValue>Phone number</ContactValue>
                                        <ContactValue>+31 681 413 874</ContactValue>
                                    </ContactRow>
                                    <ContactRow>
                                        <ContactValue>Email</ContactValue>
                                        <ContactValue>aaron@jonk.name</ContactValue>
                                    </ContactRow>
                                    <ContactRow>
                                        <ContactValue>Twitter</ContactValue>
                                        <ContactValue><Link href="https://twitter.com/HattyKrabby" target="_blank">@HattyKrabby</Link></ContactValue>
                                    </ContactRow>
                                    <ContactRow>
                                        <ContactValue>Linkedin</ContactValue>
                                        <ContactValue><Link href="https://www.linkedin.com/in/aaron-jonk-5a3054193/" target="_blank">Aaron Jonk</Link></ContactValue>
                                    </ContactRow>
                                </ContactTable>
                            </ContactHalf>
                            <ContactHalf>
                                Thank you image
                            </ContactHalf>
                        </Contact>
                    </Content>
                </Wrapper>
            </Page>
        </>
    );
}
