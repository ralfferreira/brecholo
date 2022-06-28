import styled from 'styled-components'
export const Container = styled.div`
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Shadows Into Light', cursive, sans-serif;
    flex-direction: column;
    height: 97vh;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 50%;
    }
`
export const Text = styled.div`
    h1 {
        text-align: center;
        font-size: 2em;
    }
`
export const Social = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 40px;
        :hover {
            cursor: pointer;
        }
    }
`