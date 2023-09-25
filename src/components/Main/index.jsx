import { Container, FinanceContainer, MainTag } from "./styles";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";

const Main = () => {
  return (
    <MainTag>
      <Container>
        <FinanceContainer>
          <div>
            <strong>Entradas</strong>

            <HiArrowSmUp size="22" color="green" />
          </div>

          <span>R$1.000,00</span>
        </FinanceContainer>
        <FinanceContainer>
          <div>
            <strong>Saídas</strong>

            <HiArrowSmDown size="22" color="red" />
          </div>

          <span>R$500,00</span>
        </FinanceContainer>
        <FinanceContainer>
          <div>
            <strong>Total</strong>

            <MdOutlineAttachMoney size="22" color="green" />
          </div>

          <span>R$500,00</span>
        </FinanceContainer>
      </Container>
    </MainTag>
  );
};

export default Main;
