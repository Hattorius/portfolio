import { IconProps } from "@iconify/react";
import { ReactElement, useRef, useState } from "react";
import styled from "styled-components";

const LanguageLable = styled.span`
    background: #e6e6e6;
    padding: 2px 8px;
    user-select: none;
`;

const LanguageDescription = styled.div`
    display: block;
    position: absolute;
    background: #f5f5f5;
    width: 300px;
    z-index: 10;
    padding: 10px;
    border-radius: 5px;
    user-select: none;
`;

const Title = styled.h3`
    margin: 0;
`;

const Link = styled.a`
    color: #0d9eff;
    text-decoration: none;
    
    &:hover {
        color: #077bc9;
    }
`;

export const Language = (props: {
    lang: string,
    url: string,
    desc: string
}) => {
    const [show, setShow] = useState(false);
    const refDescription = useRef(null);

    const showDescription = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.nativeEvent.relatedTarget as Element;
        const rect = el.getBoundingClientRect();
        refDescription.current.style.left = rect.left.toString() + 'px';
        setShow(true);
    }

    const hideDescription = () => {
        setShow(false);
    }

    return (
        <>
            &nbsp;
            <LanguageLable onMouseLeave={hideDescription} onMouseEnter={showDescription}>
                {props.lang}
                <LanguageDescription ref={refDescription} style={{display: show ? 'block' : 'none'}}>
                    <Title>{props.lang}</Title>
                    {props.desc} <br />
                    <Link href={props.url} target="_blank">Read more</Link>
                </LanguageDescription>
            </LanguageLable>
        </>
    );
}
