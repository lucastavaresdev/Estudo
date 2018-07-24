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


deletar um banco
entrar no banco
    ```
    use nomedoBanco
    db.dropDatabase()
    ```

##Exibindo criando e removendo coleções

- Criar uma collection

    ```
    db.createCollection("alunos")
    ```

- Para ver todas as collections no banco

    ```
    db.getCollectionNames()
    ```

- para remover uma collection 
    ```
    db.nomedacollection.drop()
    ```

##Inserindo documentos no mongo


BD RELACIONAIS VS MONGO DB
![](2018-07-23-17-23-27.png)

As collections não define uma estrutura como nas tabelas

Todo documento é auto contido e auto descritivo

Não tem uma estrutura rigida o que da flexibilidade 


Salvando os dados numa collection

    ´´´
        db.alunos.save({
            nome:'Jose',
            idade: 30,
            sexo: 'M',
            cpf: '123.123.123-12',
            rg: '123.123.123-1',
            matricula: abcd123
        })

        db.alunos.save({
            nome:'maria',
            idade: 25,
            sexo: 'F',
            matricula: aaa1234,
        })


        db.alunos.save({
            nome:'Fernanda',
            idade: 23,
            sexo: 'F',
            matricula: curso,
            cursos_interrese: [
                {curso: 'curso1'},
                {curso: 'curso2'}
            ]
        })
    ´´´







