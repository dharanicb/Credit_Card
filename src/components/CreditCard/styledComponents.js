import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 #d3d9e0, 0 6px 20px 0 #d3d9e0;
  display: flex;
  height: 100vh;
  @media screen and (max-height: 576px) {
    display: flex;
    flex-direction: column;
    height: 120vh;
  }
`
export const CardContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  text-align: center;
  @media screen and (max-height: 576px) {
    width: 100%;
  }
`
export const CreditCardName = styled.h1`
  color: #d3d9e0;
  text-decoration: underline #ffd773;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 30px;
  @media screen and (max-height: 576px) {
    font-size: 22px;
  }
`
export const CardImage = styled.div`
  margin: 10px;
  border-radius: 17px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 300px;
  width: 80%;
  align-self: center;
  margin-top: 130px;
  @media screen and (max-height: 576px) {
    margin-top: 30px;
  }
`
export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 80px;
  text-align: start;
  margin-left: 25px;
  @media screen and (max-height: 576px) {
    font-size: 18px;
  }
`

export const CardName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 10px;
  text-align: start;
  margin-left: 25px;
  @media screen and (max-height: 576px) {
    font-size: 18px;
  }
`

export const CardHolderName = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 15px;
  padding-top: 80px;
  text-align: start;
  margin-left: 25px;
`

export const PaymentSession = styled.div`
  width: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 576px) {
    margin-top: 50px;
    width: 100%;
    margin-bottom: 10px;
  }
`
export const PaymentContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 #d3d9e0, 0 6px 20px 0 #d3d9e0;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`
export const PaymentTittle = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 28px;
  @media screen and (max-height: 576px) {
    font-size: 19px;
  }
`

export const ReadLineInput = styled.input`
  height: 30px;
  width: 70%;
  margin: 10px;
  font-family: 'Roboto';
  font-size: 12px;
  box-shadow: 0 4px 8px 0 #d3d9e0;
  border-width: 0px;
`
