#Mongodb

local onde fica o mongodb

C:\Program Files\MongoDB\Server\4.0\bin


mongo.exe - acesso
mongod.exe - servidor

ctrl + shift botao direito, abrir prompt de comando aqui

inicia o mongod.exe primeiro
inicia o mongo.exe

##Exibindo criando e removendo banco de dados


exibir o banco de dados

    ```
        show dbs
    ```

selecionar/criar o banco de dados (o comando so cria a partir do momento que tem uma collection )
    ```
    use nomedoBanco
    ```
para criar uma collection

    ```
    db.Alunos.save({nome:lucas})
    ```

deletar um banco
entrar no banco
    ```
    use nomedoBanco
    db.dropDatabase()
    ```
