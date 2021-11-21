import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border-bottom: #243238 2px solid;
    padding: 1.4rem 0px;
    display: flex;
    justify-content: space-between;
`;

const MenuLeft = styled.div`
    display: flex;
    justify-content: left;
`;
const MenuRight = styled.div`
    display: flex;
    justify-content: right;
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
    &:first-child {
        margin: 0px;
        margin-right: 1rem;
    }
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Navbar = ( props ) => {
    return (
        <Wrapper>
            <MenuLeft>
                <MenuItem onClick={() => props.goToHandler('home')}>Home</MenuItem>
                <MenuItem onClick={() => props.goToHandler('skills')}>Skills</MenuItem>
                <MenuItem onClick={() => props.goToHandler('projects')}>Projects</MenuItem>
                <MenuItem onClick={() => props.goToHandler('contact')}>Contact</MenuItem>
            </MenuLeft>
            <MenuRight>Hello</MenuRight>
        </Wrapper>
    );
}
