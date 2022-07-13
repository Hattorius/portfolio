import styled from "styled-components";
import { useRef, useState, useEffect } from 'react';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const FavoritesTitle = styled.div`
    width: 100%;
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .3rem;
    padding-right: 1rem;
    font-size: 22px;
    cursor: pointer;
    transition: 150ms;

    &:hover {
        background: #f8f8f8;
    }
`;

const FavoritesWrapper = styled.div`
    flex-grow: 1;
    overflow-x: hidden;
`;

const FavoritesContent = styled.div`
    width: 300%;
    padding: .3rem;
    background: #fcfcfc;
    display: flex;
`;

const FavoritesItem = styled.div`
    display: flex;
    gap: 10px;
`;

const Item = styled.div`
    position: relative;
`;

const ItemOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    transition: 250ms;
    &:hover {
        opacity: 1;
    }
`;

export const Favorites = (props: {
    favorites: {
        title: string,
        items: {
            title: string,
            image: string,
            link: string
        }[]
    }[]
}) => {
    const [active, setActive] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const refFavoritesWrapper = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemWidth(refFavoritesWrapper.current.offsetWidth);
        }, 300);
        return () => clearInterval(interval);
    }, [])

    const goTo = (i: number) => {
        setActive(i);
        refFavoritesWrapper.current.scrollTo({
            top: 0,
            left: refFavoritesWrapper.current.offsetWidth * i,
            behavior: 'smooth'
        });
    }

    return (
        <Wrapper>
            <div>
                {props.favorites.map((favorites, i) => <FavoritesTitle key={i} style={active == i ? {background: '#fcfcfc'} : {}} onClick={() => goTo(i)}>{favorites.title}</FavoritesTitle>)}
            </div>
            <FavoritesWrapper ref={refFavoritesWrapper}>
                <FavoritesContent>
                    {props.favorites.map((favorites, i) => (
                        <FavoritesItem style={{width: 'calc(' + itemWidth + 'px + .4rem)'}} key={i}>
                            {favorites.items.map((item, ii) => (
                                <Item key={ii}>
                                    <img src={item.image} style={{height: 300}}/>
                                    <ItemOverlay onClick={() => window.open(item.link, "_blank")}>
                                        {item.title}
                                    </ItemOverlay>
                                </Item>
                            ))}
                        </FavoritesItem>
                    ))}
                </FavoritesContent>
            </FavoritesWrapper>
        </Wrapper>
    );
}