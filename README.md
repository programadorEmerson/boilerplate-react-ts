
# Boilerplate Project

Este projeto é uma base para aplicações modernas usando React, Styled Components e React Router Dom, com o ambiente de desenvolvimento otimizado pelo Vite. Destinado para a criação de aplicações robustas e escaláveis.

## 🚀 Início Rápido

Para rodar este projeto localmente, você precisará de Node.js (versão 20 ou superior) instalado na sua máquina. Aqui estão os passos para começar:

### Pré-requisitos

- Node.js versão 20.x

### Instalação de Dependências

Para instalar as dependências necessárias, execute o seguinte comando:

```bash
npm install
```

### Executando o Ambiente de Desenvolvimento

Para iniciar o ambiente de desenvolvimento, use a flag homologation ou production, isso carrega o arquivo .env.homologation ou .env.production:

```bash
npm run dev homologation
npm run dev production
ou
yarn dev homologation
yarn dev production
```

Isto irá abrir o projeto no seu navegador padrão utilizando o host personalizado `local.meusite.com.br`.

## 🛠 Configuração do Vite

O Vite está configurado para utilizar HTTPS e um host personalizado para desenvolvimento local. As configurações chave incluem:

- **HTTPS**: Uso de certificados SSL para uma conexão segura.
- **Host Personalizado**: `local.meusite.com.br`, configurado para ser acessado na porta 3000.

## 📦 Dependências

Além de `react` e `react-dom`, este projeto utiliza:

- `react-router-dom` para gerenciamento de rotas.
- `styled-components` para estilização.
- `eslint` e `typescript` para análise estática e tipagem.

## 🔧 Configuração do TypeScript

TypeScript está configurado com opções rigorosas para garantir a melhor qualidade de código:

- `strict` para todos os cheques rigorosos.
- Resolução de módulos para a integração com bundlers.
- Caminhos personalizados através do `baseUrl` e `paths` para facilitar a importação de módulos.

## 🚨 Testes

Utilizando `vitest` com configuração personalizada para a execução de testes unitários e de integração, excluindo pastas específicas e focando na cobertura de código importante.

## 🚨 Cobertura de Testes

Utilizamos `coverage` e para verificar a cobertura de testes e garantir que atenda aos padrões estabelecidos que são 90%:

```bash
npm run coverage
```

## 📝 Padrões de Commit

Usamos `commitizen` com `cz-conventional-changelog` para padrões de commit, facilitando o rastreamento de mudanças e colaboração.
   ```
   yarn commit ou npm run commit
   ```

## 💡 Configurando Hosts Locais

Para acessar o projeto através do host `local.meusite.com.br`, você precisa adicionar uma entrada ao seu arquivo de hosts. Siga os passos abaixo para cada sistema operacional:

### Linux

1. Abra o terminal.
2. Edite o arquivo de hosts com o comando: `sudo nano /etc/hosts`.
3. Adicione a linha abaixo das entradas existentes para `localhost`:
   ```
   127.0.0.1       local.meusite.com.br
   ```
4. Salve e feche o arquivo.

### Windows

1. Abra o Bloco de Notas como Administrador.
2. Abra o arquivo localizado em `C:\Windows\System32\drivers\etc\hosts`.
3. Adicione a linha abaixo das entradas existentes para `localhost`:
   ```
   127.0.0.1       local.meusite.com.br
   ```
4. Salve e feche o arquivo.

## 💡 Scripts Adicionais
Além dos scripts de desenvolvimento e teste, este projeto inclui scripts para build e outras operações via npm:

1. build: Compila a aplicação para produção. ex: `npm run build` `homologation` ou `production`
2. commit: Ajuda a formatar mensagens de commit seguindo padrões definidos.

## 📚 Documentação Adicional

Para mais informações sobre as tecnologias usadas:

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)

Este README serve como ponto de partida para a utilização e desenvolvimento do projeto boilerplate. Ele oferece instruções claras e práticas para instalação, configuração e execução de testes, assim como detalhes sobre as principais dependências e padrões de commit.