# Logix - Sistema Inteligente de Logística

**Logix** é um sistema inteligente de logística criado para centralizar, automatizar e otimizar toda a cadeia logística de uma empresa. O sistema atua como o núcleo operacional, integrando gestão de estoque, controle de pedidos, rastreamento de entregas, rotas, transporte e relatórios em tempo real.

Sistema desenvolvido com HTML, CSS e JavaScript puro, sem uso de banco de dados. Criado apenas para fins educacionais.

## 📋 Características

### Página de Login
- **Design moderno** inspirado em interfaces profissionais
- **Layout em duas colunas**: branding à esquerda e formulário à direita
- Interface responsiva e adaptável
- Validação de formulário em tempo real
- Campo de email com validação
- Toggle "Lembrar dados de login" funcional
- Link "Esqueceu a senha?"
- Botão de login com Google (visual)
- Animações suaves e transições

### Dashboard Logístico
- **Interface completa** com sidebar e navegação superior
- **Cards de métricas** em tempo real:
  - Pedidos em Aberto
  - Entregas em Atraso
  - SLA de Entrega
  - Rotas Otimizadas
  - Itens em Estoque
  - Veículos Ativos
  - Entregas Hoje
- **Solicitação de rotas** com dropdown e botão de ação
- **Seção "Pedidos Aguardando Processamento"** com lista scrollável
- **Seção "Rastreamento de Entregas"** com:
  - Sistema de abas (Em Trânsito, Entregues, Pendentes, Rastreamento)
  - Tabela completa com ordenação
  - Filtros e busca avançada
  - Badges de status de entrega
- **Navegação suave** com scroll otimizado
- **Scrollbars personalizadas** para melhor UX

## 🎯 Funcionalidades do Logix

O Logix oferece:

- ✅ **Visão centralizada** de toda a operação logística
- ✅ **Rastreamento de cargas e pedidos** em tempo real
- ✅ **Gestão de estoque** com alertas inteligentes
- ✅ **Otimização de rotas** e prazos de entrega
- ✅ **Integração com transportadoras**, ERP e e-commerce
- ✅ **Painéis (dashboards)** claros e objetivos
- ✅ **Relatórios analíticos** para tomada de decisão

O sistema é rápido, confiável, escalável e fácil de usar, com foco em eficiência operacional, redução de custos e aumento da previsibilidade logística. O Logix representa o controle total do fluxo logístico, do ponto de origem até a entrega final.

## 🔑 Credenciais Padrão

- **Email:** `admin@logix.com`
- **Senha:** `admin123`

## 🚀 Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Digite as credenciais acima no campo de email e senha
3. (Opcional) Marque "Lembrar dados de login" para salvar o email
4. Clique em "Entrar"
5. Você será redirecionado para o dashboard administrativo completo

## 📁 Estrutura de Arquivos

```
sistema-login/
│
├── index.html          # Página de login (layout duas colunas)
├── dashboard.html      # Dashboard administrativo completo
├── styles.css          # Estilos CSS (design moderno)
├── script.js           # Lógica de autenticação e validação
└── README.md          # Este arquivo
```

## 🎨 Design e Interface

### Página de Login
- **Lado esquerdo**: Fundo escuro com logo "Logix" e depoimento
- **Lado direito**: Formulário branco com campos de email e senha
- Cores principais: Roxo/Púrpura (#8b5cf6) para acentos
- Tipografia: Inter (Google Fonts)

### Dashboard
- **Sidebar esquerda**: Elementos de navegação rápida
- **Top Navigation**: Logo Logix, menu horizontal (Dashboard, Pedidos, Estoque, Relatórios, Entregas) e perfil do usuário
- **Cores**: Cinza e preto (#333) para elementos principais, fundo branco
- Layout responsivo e adaptável
- Métricas logísticas em tempo real

## ⚠️ Importante

Este sistema é **apenas para fins educacionais**. Ele não utiliza banco de dados e as credenciais estão hardcoded no JavaScript. **NÃO use este sistema em produção!**

## 🔒 Segurança

- O estado de login é mantido apenas no `sessionStorage` do navegador
- Ao fechar a aba/janela, o usuário é deslogado automaticamente
- O dashboard verifica a autenticação periodicamente (a cada 5 segundos)
- Validação de email no formato correto
- Proteção de rotas (redireciona se não estiver logado)

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com:
  - Flexbox e Grid Layout
  - Animações e transições
  - Scrollbars personalizadas
  - Design responsivo
- **JavaScript (ES6+)** - Funcionalidades interativas:
  - Validação de formulários
  - Gerenciamento de sessão
  - Navegação suave
  - Interações dinâmicas
- **SessionStorage API** - Armazenamento de sessão
- **LocalStorage API** - Lembrar dados de login (opcional)
- **Google Fonts (Inter)** - Tipografia moderna

## ✨ Funcionalidades Especiais

### Login
- ✅ Validação de email em tempo real
- ✅ Toggle "Lembrar dados" salva email no localStorage
- ✅ Mensagens de erro animadas
- ✅ Limpeza automática de erros ao digitar
- ✅ Redirecionamento automático se já estiver logado

### Dashboard
- ✅ Cards de métricas interativos
- ✅ Sistema de abas funcional
- ✅ Tabela com scroll suave
- ✅ Listas scrolláveis com scrollbars personalizadas
- ✅ Navegação com mouse otimizada
- ✅ Hover effects em todos os elementos interativos
- ✅ Design responsivo para mobile

## 📝 Notas

- O sistema não persiste dados entre sessões (exceto email se "Lembrar" estiver marcado)
- Não há recuperação de senha funcional
- Não há registro de novos usuários
- Login com Google é apenas visual (não funcional)
- Todas as validações são feitas no lado do cliente
- Os dados do dashboard são estáticos (para demonstração)

## 🔄 Atualizações Recentes

- ✨ Novo design de login inspirado em interfaces modernas
- ✨ Dashboard administrativo completo
- ✨ Navegação suave com scroll otimizado
- ✨ Scrollbars personalizadas
- ✨ Sistema de abas e filtros
- ✨ Tabelas interativas com ordenação
- ✨ Layout responsivo aprimorado

## 📱 Responsividade

O sistema é totalmente responsivo e funciona bem em:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (até 768px)

---

**Desenvolvido para fins educacionais** 🎓