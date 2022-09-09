# Iniciar projeto

1. nest new hello-prisma
   deletar arquivos de /src, deixar apenas app.module.ts

#Instalar prisma

1. npm install prisma --save-dev
2. npx prisma init
3. Criar db no postgress, configurar banco e senha no .env

# Rodar prisma

1. npx prisma migrate dev
2. nest g resource module/book

# Criar conexão com o banco

1. dentro de /src. criar /database/prisma.service.ts
   1.1. Colocar o comando da documentação dentro dele
2. Chamar ele dentro de book.module.ts
