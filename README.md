# Console d'exploitation de MonEDM
Application de back office pour l'exploitation de Mon Espace E-Démarches.

## Packaging
```
cd app
yarn install
yarn build
cp -rf build ../front-build
cd ..
mvn package
```
Le package produit un jar exécutable.

## Usage en local
Définir, **au choix**, soit les variables d'environnement suivantes:
```
MONGODB_DATABASE=
MONGODB_HOST=
MONGODB_PASSWORD=
MONGODB_PORT=
MONGODB_USER=
```
**Ou sinon** créer un fichier **admin-preuves-juridiques.yml** dans le même répertoire que le fichier.jar, qui contient: (remplacer les variables)
```
server:
  port: 8086

spring:
  data:
    mongodb:
      host: ${MONGODB_HOST}
      port: ${MONGODB_PORT}
      username: ${MONGODB_USER}
      password: ${MONGODB_PASSWORD}
      database: ${MONGODB_DATABASE}
```
Puis dans les deux cas, pour lancer l'appli:
```
export JKS_FILE_PATH=xxx.jks
export JKS_FILE_PASSWORD=xyz
export VERSION=x.x
java -Djavax.net.ssl.trustStore=${JKS_FILE_PATH}\
 -Djavax.net.ssl.trustStorePassword=${JKS_FILE_PASSWORD}\
 -Dspring.profiles.active=dev\
 -jar admin-preuves-juridiques-${VERSION}.jar
```
Puis ouvrir un navigateur sur **http://localhost:8086/enu-console-admin/**

## Structure du code du projet

### Back end java
Dans la racine du projet, src/main standard. Le packaging est géré par Maven.

Le projet utilise Spring Boot: https://spring.io/

Une base MongoDB est nécessaire.

### Front end js / react
Le front utilise la structure standard d'un projet nodejs. Le packaging peut se faire avec npm ou yarn.

On utilise Material UI: https://mui.com/material-ui/getting-started/overview/

Et ReactJS: https://react.dev/

## License
Copyright 2023 État de Genève

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
