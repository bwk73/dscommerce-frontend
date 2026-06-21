# DSCommerce — Frontend

Interface web do sistema de e-commerce DSCommerce, desenvolvida durante o curso da escola [DevSuperior](https://github.com/devsuperior), ministrado pelo professor [Nélio Alves](https://github.com/nelioalves) (UFU).

> Este repositório contém o **frontend** do sistema. O backend está disponível em: [dscommerce](https://github.com/bwk73/dscommerce)

## Sobre o projeto

O frontend consome a API REST do DSCommerce, exibindo o catálogo de produtos por categoria, permitindo login/cadastro de usuários, gestão de pedidos e, para administradores, gestão de produtos. A navegação pelo catálogo é livre; ações como criar ou alterar pedidos exigem login.

## Autenticação

O frontend possui tela de login e cadastro de usuários, integrada com o fluxo OAuth2/JWT do backend:

- O token JWT recebido após o login é decodificado com `jwt-decode`, permitindo extrair informações do usuário autenticado (como seu papel — cliente ou administrador) sem precisar consultar o backend novamente.
- O token é persistido na pasta `localStorage`, mantendo o usuário autenticado entre sessões/recarregamentos de página.
- As rotas da aplicação (`routes`) são protegidas de acordo com o papel do usuário, restringindo páginas administrativas a quem tem `ROLE_ADMIN`.

## Estrutura do projeto

```
src/
├── components/    Componentes de interface reutilizáveis
├── localStorage/  Persistência do token JWT no navegador
├── models/        Tipagens TypeScript do domínio (Product, Order, User, etc.)
├── routes/        Definição e proteção das rotas da aplicação
├── services/       Comunicação com a API REST do backend
└── utils/         Funções utilitárias
```

## Tecnologias

- React
- TypeScript
- Vite
- React Router DOM
- React Select
- Axios
- jwt-decode

## Conceitos aplicados

- Consumo de API REST autenticada (OAuth2 + JWT)
- Decodificação e persistência de token JWT no cliente
- Proteção de rotas por papel de usuário (role-based routing)
- Tipagem de domínio com TypeScript
- Separação por responsabilidade (components / services / models / routes)

## Como executar

```bash
npm install
npm run dev
```

> Certifique-se de que o [backend](https://github.com/bwk73/dscommerce) esteja em execução para que as chamadas à API funcionem corretamente.

## Contexto

Este projeto foi desenvolvido durante minha jornada de transição de carreira da fisioterapia para o desenvolvimento de software, como parte da formação prática oferecida pela DevSuperior.
