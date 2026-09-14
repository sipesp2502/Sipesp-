# SIPESP — Site Institucional Estático

Site oficial estático do **SIPESP — Sindicato dos Porteiros do Estado de São Paulo**.

## Contatos configurados

- **WhatsApp / contato:** (11) 91644-9815
- **E-mail:** sipesp.sp@gmail.com
- **Instagram:** @sipesp.sp — https://www.instagram.com/sipesp.sp
- **Endereço:** Rua Antônio de Barros, 2.385 — 6º andar, Tatuapé, São Paulo — SP

## Funciona offline?

Sim. Para visualizar localmente, extraia todos os arquivos e abra `index.html` no navegador. O layout, imagens, CSS e JavaScript ficam na própria pasta.

> Recursos que dependem da internet, como abrir WhatsApp, Instagram ou enviar e-mail por um serviço externo, naturalmente exigem conexão.

## Publicar no GitHub Pages

O pacote já está preparado para hospedagem estática e não precisa de build, Node.js ou dependências.

### Opção 1 — Repositório comum

1. Crie um repositório no GitHub, por exemplo `sipesp-site`.
2. Extraia o ZIP.
3. Envie **o conteúdo da pasta extraída para a raiz do repositório**. O arquivo `index.html` deve ficar na raiz.
4. No GitHub, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch `main` e a pasta `/ (root)`.
7. Clique em **Save**.
8. Aguarde a URL do GitHub Pages ficar disponível.

### Opção 2 — Site de organização/usuário

Para usar uma URL do tipo `https://NOME.github.io/`, o repositório precisa se chamar exatamente `NOME.github.io`. Depois, envie estes arquivos para a branch `main`.

## Estrutura

- `index.html` — página principal
- `styles.css` — identidade visual e responsividade
- `script.js` — menu e formulário que prepara a mensagem para WhatsApp
- `logo.png` — logo SIPESP
- `banner.png` — banner institucional
- `whatsapp-qrcode.png` — QR Code do WhatsApp oficial
- `.nojekyll` — evita processamento desnecessário pelo Jekyll no GitHub Pages
- `README.md` — este guia

## Observações de manutenção

O telefone foi configurado no padrão internacional do WhatsApp como `5511916449815`, mas é exibido ao visitante como **(11) 91644-9815**. O formulário não armazena dados: ele monta a mensagem no navegador e abre o WhatsApp para o usuário concluir o envio.

Ao atualizar textos, preserve os nomes dos arquivos locais ou atualize também as referências em `index.html`.
