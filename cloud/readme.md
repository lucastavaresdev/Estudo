#Curso Google Cloud

##Criando uma maquina virtual

1) Criar o nome do projeto
2) Compute Engine 
3) Instâncias das Vms
    ```
        |1) Criar
        |2) Preencher Nome  Região 
        |3) Escolher o tipo de maquina, Influencia no preço 
        |4) Disco de inicialização (Tipo de Sistema verificar preço)
        |5) Identidade e acesso à API
        |6) Firewall (Http, Https)
        |7) Firewall (Http, Https)
        |8) Outras Configurações redes, discos etc
    ```

    ##Cloud Shell

general -produção
beta - je testado porem é beta
alpha- estaveis - a google pode alterar os comandos
preview - instaveis - a google pode alterar os comandos

##comandos

###comando das instancias

gcloud --version - versão do google cloud
gcloud components list - versão do google cloud

To install or remove components at your current SDK version [207.0.0], run:
  $ gcloud components install COMPONENT_ID
  $ gcloud components remove COMPONENT_ID

To update your SDK installation to the latest version [207.0.0], run:
  $ gcloud components update


gcloud compute instances list - ver as instancias 

gcloud compute instances start windowsserver01 - iniciar a instancia


gcloud compute instances stop windowsserver01 - parar a instancia

gcloud compute instances start windowsserver01 --zone=us-east1-b com a zona para criar um shellscript

###buckets = armazenamento


gsutil version - versão
gsutil --help - comandos
gsutil mb gs//bucket-001 - criar um bucket
pagina inicial storage


----------------------------------------------
 Criando um bucket

 //todo nome de bucket é global por isso que o nome pode dar conflito 

1) Storage
2) Criar um intervalo 

    ```
        |1) Nome() //nao colocar informaçoes relevante
        |2)Classe de Armaenamento (Importancia de escolha por causa do valor, é importante ver a disponibilidade do aquivo);


         

    ```
 ## Help no cloud shell

 gsutil --help