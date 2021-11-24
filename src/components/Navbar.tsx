import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border-bottom: #243238 2px solid;
    padding: 1.4rem 0px;
    @media (max-width: 679px) {
        padding: .4rem 0px;
    }
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
`;

const MenuLeft = styled.div`
    display: block;
    justify-content: center;
    width: 100%;
    @media (min-width: 680px) {
        display: flex;
    }
`;

const MenuItem = styled.div`
    color: #747E82;
    font-size: 1rem;
    transition: 250ms;
    cursor: pointer;
    margin: 0px 1rem;
    &:hover {
        color: #fefefe;
    }
    @media (min-width: 680px) {
        &:first-child {
            margin: 0px;
            margin-right: 1rem;
        }
    }
    @media (max-width: 679px) {
        padding: 4px;
        text-align: center;
    }
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const EggsOrSomething = styled(MenuItem)`
    color: #575a5c;
    display: none;
    @media (min-width: 680px) {
        display: block;
    }
`;

export const Navbar = ( props ) => {
    return (
        <Wrapper>
            <MenuLeft>
                <MenuItem className={(props.currentPage === 'aboutme.md' ? 'active' : '')} onClick={() => props.goToHandler('aboutme.md')}>aboutme.md</MenuItem>
                <EggsOrSomething>/</EggsOrSomething>
                <MenuItem className={(props.currentPage === 'projects.md' ? 'active' : '')} onClick={() => props.goToHandler('projects.md')}>projects.md</MenuItem>
                <EggsOrSomething>/</EggsOrSomething>
                <MenuItem className={(props.currentPage === 'epic_blog.md' ? 'active' : '')} onClick={() => props.goToHandler('epic_blog.md')}>epic_blog.md</MenuItem>
                <EggsOrSomething>/</EggsOrSomething>
                <MenuItem className={(props.currentPage === 'contact.md' ? 'active' : '')} onClick={() => props.goToHandler('contact.md')}>contact.md</MenuItem>
            </MenuLeft>
        </Wrapper>
    );
}
