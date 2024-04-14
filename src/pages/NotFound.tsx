import * as Style from '@/styles/pages/styles.not-found';

const NotFound = () => {
  return (
    <Style.Container>
      <Style.Header>Página Não Encontrada</Style.Header>
      <Style.Text>Ops! A página que você está procurando não existe.</Style.Text>
      <Style.StyledLink to="/">Voltar para a página inicial</Style.StyledLink>
    </Style.Container>
  );
};

export default NotFound;
