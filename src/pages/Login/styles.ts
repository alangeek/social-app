import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  
`

export const BackgroundContainer = styled.div`
  img { 
    height: 100%;
    width: 50vw;
    object-fit: cover;
  }
`

export const RightContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
 

  h1 {
    margin-top: 60px;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 64px;
    font-style: normal;
    line-height: 83px;
  }

  h2 {
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height:40px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    font-style: normal;
    line-height: 19px;
    margin-top: 26px;
  }

  span {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`

export const Button = styled.button`
  background-color: #ff2f69;
  color: #fff;
  border-radius: 70px;
  height: 49px;
  width: 381px;
  padding: 14px 92px 14px 92;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`