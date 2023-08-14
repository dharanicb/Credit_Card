import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CreditCardName,
  CardImage,
  CardNumber,
  CardName,
  CardImageContainer,
  PaymentSession,
  PaymentContainer,
  PaymentTittle,
  ReadLineInput,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <CreditCardName>CREDIT CARD</CreditCardName>
        <CardImageContainer>
          <CardImage data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderName>CARDHOLDER NAME</CardHolderName>
            <CardName>{cardName}</CardName>
          </CardImage>
        </CardImageContainer>
      </CardContainer>
      <PaymentSession>
        <PaymentContainer>
          <PaymentTittle>Payment Method</PaymentTittle>
          <ReadLineInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <ReadLineInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardName}
          />
        </PaymentContainer>
      </PaymentSession>
    </MainContainer>
  )
}
export default CreditCard
