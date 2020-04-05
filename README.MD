## CURSO DE NPM


## Pré configurações padrões para projetos (https://docs.npmjs.com/misc/config)
npm config set init-author-name [Nome do Autor do documento]
npm config set init-author-email [E-mail do Autor do documento]
npm config set init-license [Licensa do projeto]

npm config delete [A configuração que deseja deletar]

npm get (Verifica as configurações padrões criadas do npm)

## Criando um projeto npm
npm init
npm init --yes (para criar um projeto npm já pré-configurado default no package json)

## Instalando depêndencias
npm install [pacote que quer instalar]
npm install [pacote que quer instalar]@[versão do pacote]

## Removendo depêndencia
npm remover [pacote que quer remover]
npm rm [pacote que quer remover]
npm uninstall [pacote que quer remover]

## Remover depêndencias inutilizadas
npm prune

## Atualizando depêdencias
npm install [pacote que quer atualizar]@[versão que quer atualizar] ou [* prá última versão]
npm update (atualiza todas as depências do pacote)
npm outdated (Verifica se existe atualizações dos plugins existentes)

## Listagem de depedências
npm list
npm list --depth=0 (lista as depêndencias do projeto de forma resumida)
npm list -g --depth=0 (lista as depêndencias do projeto de forma resumida global)

## Criando depêndencias de dev
npm install [pacote que quer instalar] --save-dev

## Versionamento Semantico
X.X.X - Primeiro seria para atualizações grandes ou seja que impacta na anterior
X.X.X - Segundo seria atualização no pacote de novas funcionalidades que não quebra nada na versão
X.X.X - Terceira opção (Bug fix) correção de bugs

## Possibilidade de comandos no criados no pacote
npm start - Inicia a aplicação é necessário criar esse comando primeiramente no package.json para depois utiliza-lo

## Criando plugins globais no projeto (Não recomendado)
npm install [pacote que quer instalar] -g
npm link [nome do pacote para lincar ao projeto]
npm remove [pacote que quer remover] -g

