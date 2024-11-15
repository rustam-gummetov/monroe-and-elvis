import styled from "styled-components"

export const Price = styled.div`
    margin: 30px 70px;
    height: auto;
    border-radius: 30px;
    display: grid;
    justify-content: center;
    /* background-color: #0f0f0f; */
    /* min-width: 1200px; */

    /* @media (max-width: 1200px) {
        height: 700px;
    }

    @media (max-width: 1050px) {
        height: 500px;
    } */

    @media (max-width: 767px) {
        display: block;
        height: auto;
        min-width: 200px;
        width: 333px;
        background-color: black;
        margin: 30px auto;
    }
`

export const Text = styled.p`
    color: white;
    /* padding-top: 30px; */
    font-size: 60px;
    line-height: 100px;
    text-align: center;

    @media (max-width: 1600px) {
        font-size: 50px;
        line-height: 80px;
    }

    @media (max-width: 1350px) {
        font-size: 40px;
        line-height: 70px;
    }

    @media (max-width: 1200px) {
        font-size: 35px;
        line-height: 60px;
    }

    @media (max-width: 1050px) {
        font-size: 30px;
        line-height: 50px;
    }

    @media (max-width: 910px) {
        font-size: 25px;
        line-height: 40px;
    }

    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 60px;
    }
`

export const Pictures = styled.div`
    /* height: 900px; */
    border-radius: 30px;
    /* display: inline-block; */
    padding-top: 30px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px 15px;
    justify-content: center;
    width: auto;

    @media (max-width: 767px) {
        width: 333px;
        padding-top: 15px;
        /* height: 500px; */
        gap: 20px;
        grid-template-columns: auto;
    }
`

export const Image = styled.img`
    height: 800px;
    /* padding: 5px; */

    /* @media (max-width: 1200px) {
        height: 500px;
    }

    @media (max-width: 1050px) {
        height: 300px;
    } */

    @media (max-width: 767px) {
        width: 100%;
        /* padding: 2px; */
        height: auto;
    }
`

export const Text2 = styled.p`
    display: block;
    color: #5c5959;
    /* padding-bottom: 30px; */
    font-size: 20px;
    padding-top: 20px;

    /* @media (max-width: 767px) {
        display: block;
        color: #5c5959;
        padding-bottom: 30px;
        font-size: 20px;
    } */
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    font-size: 25px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 3px solid #9e29d4;
    background-color: #9e29d4;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    display: flex;
	flex-wrap: wrap;
	justify-content: center ;
    /* position: relative; */
    z-index: 1; 
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;

    :hover {
        border: 3px solid #682e83;
        background-color: #682e83;
    }

    @media (max-width: 767px) {
        height: 70px;
        padding: 0 10px;
    }
`

export const TextButton = styled.p`
    font-size: 25px;
    color: white;

    @media (max-width: 767px) {
        padding-bottom: 3px;
    }
`

export const Link = styled.a`
    text-decoration: none;
`