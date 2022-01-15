
# Api do Whatsapp 🚀
> Um servidor de API do WhatsApp gratuito do serviço https://apigratis.com.br 

### Sobre
- Ainda estamos em desenvolvimentos, erros podem ocorrer
- Esse projeto foi inspirado do projeto <a href="https://github.com/salman0ansari/whatsapp-api-nodejs" target="_blank"> original </a>
## Instalando as dependencias 

```bash
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh

```

```bash
bash nodesource_setup.sh && sudo apt -y install nodejs
```

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

```bash
node -v && yarn -v
```

### Executar

```bash
yarn start server.js
```

### Use

```bash
http://localhost:9190
```

### WebHook

```bash
nano .env
```
Altere as variáveis ``WEBHOOK_URL`` e ``WEBHOOK_KEY``   

### Documentações
<a href="https://whatsapp-srv08.apigratis.com.br/api-docs" target="_blank"> Swagger </a> | <a href="https://documenter.getpostman.com/view/11074732/UVXgMHmq" target="_blank"> Postman </a>
