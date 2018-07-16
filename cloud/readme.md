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


 # Criando maquina com debian

 sudo su - console de root
 apt-get update - para atualizar a lista de repositorio e a no debian

 ##instalando o apeche no linux 

```
    Entrar na maquina

    sudo su // permissão de admin

    apt-get update // atualiza a lista de repositorios

    apt-get install apache2 // instala o pache

    Y // autoria o uso de tamanho em disco para a intalação
```


 clicar no ip da maquina virtual.
 
só retirar o S do do http para funcionar

#Azure
Antes de criar a maquina virtual crair um grupo de recursos


Na hora de criar a maquina virtual tem dropdown 
* Selecione um modelo de implantação

modelo classico = é o processo de instalação classico.
A outra opção é o modelo atual


Noções basicas 
    1)nome, tipo de grupo, etc
    2) HTTP, HTTPS, RDP(para conexão a maquina remotamente)

Tamanho
    Tipo de maquina (esta no doc Azure)
    VALORES SÃO UMA ESTIMATIVA 


RESUMO
    Baixar modelo e parâmetros

    pode criar automaticamente se precisar fazer mais de uma vez e salvar como padrao



Depois de Criar 

IAM - controle de quem usa


- conectando na vm no windows
criclar em conectar
baixar rdp
usuario e senha



*para alterar o nome do cloud e so clicar em maq virtual e definir o nome - caso desligue a maquina o  ip muda porem o nome não
*nao esquecer que se for usar o mysql tem q liberar a porta em regreas de entrada



para conectar a maq linux usar o mobaXterm ou o Putty

NO PUTTY 

colocar o ip
SIM(para gerar a chave ssh)


No mobal


https://mobaxterm.mobatek.net/download-home-edition.html

criar um novo terminal
colocar o nome de usuario mais o ip 
nomeusu@123.456.0.789

o mobal da para mecher graficamente
