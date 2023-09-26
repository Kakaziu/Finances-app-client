import { Button } from "./styles";
import { Container } from "./styles";
import { Camp, Form } from "./styles";

const RegisterForm = () => {
  return (
    <Container>
      <Form>
        <h1>CADASTRE-SE</h1>

        <Camp>
          <input type="text" placeholder="Nome completo" />
        </Camp>
        <Camp>
          <input type="text" placeholder="E-mail" />
        </Camp>
        <Camp>
          <input type="text" placeholder="Senha" />
        </Camp>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
