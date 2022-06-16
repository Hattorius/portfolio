import { IconProps } from "@iconify/react";
import { ReactElement, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    overflow-x: auto;
    gap: 10px;

    @media (max-width: 1040px) {
        padding: 0;
    }

    @media (max-width: 800px) {
        padding-left: 350px;
    }
`;

const Technology = styled.div`
    flex-grow: 1;
    transition: 150ms;
`;

const Title = styled.h2`
    font-weight: 500;
    text-align: center;
`;

const Icon = styled.div`
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`;

const IconI = styled.i`
    font-size: 48px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
`;

const Tech = styled.div`
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
`;

const TechIcon = styled.i`
    font-size: 48px;
`;

const TechName = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
`;

export const Technologies = (props: {
    tech: {
        title: string,
        technologies: {
            name: string,
            icon: string | ReactElement<IconProps, any>
        }[]
    }[]
}) => {
    const [active, setActive] = useState(0);

    return (
        <Wrapper>
            {props.tech.map((tech, i) => (
                <Technology onMouseEnter={() => setActive(i)} key={i} style={active == i ? {maxWidth: 'max-content'} : {maxWidth: '120px'}}>
                    <Title>{tech.title}</Title>
                    {tech.technologies.map((technology, ii) => {
                        if (active != i) {
                            return (
                                <Icon key={ii}>
                                    {typeof technology.icon == 'string' ? <IconI className={technology.icon}/> : <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'max-content'}}>{technology.icon}</div>}
                                </Icon>
                            );
                        }
                        return (
                            <Tech key={ii}>
                                {typeof technology.icon == 'string' ? <TechIcon className={technology.icon}/> : technology.icon}
                                <TechName>
                                    {technology.name}
                                </TechName>
                            </Tech>
                        );
                    })}
                </Technology>
            ))}
        </Wrapper>
    );
}