
## Índice

- [Sobre](#sobre)
- [Pré-requisitos](#pré-requisitos)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como baixar o projeto](#como-baixar-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Criadores](#criadores)
- [Iniciando o Projeto](#iniciando-o-projeto)
- [Modificando o Projeto](#modificando-o-projeto)
- [Depuração e Suporte](#depuração-e-suporte)
- [Aprenda Mais](#aprenda-mais)



## 🤔 Sobre

Projeto **POKEMON-POKEDEX**, criado para listar os pokémons da [API PokeAPI](https://pokeapi.co/).

---

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- **Node.js**: Recomendado usar a versão LTS mais recente. Baixe [aqui](https://nodejs.org/).
- **npm ou yarn**: Gerenciadores de pacotes para Node.js. npm geralmente vem com Node.js, e o yarn pode ser instalado [aqui](https://yarnpkg.com/getting-started/install).
- **Expo CLI (opcional)**: Para projetos Expo, instale Expo CLI globalmente com `npm install -g expo-cli` ou `yarn global add expo-cli`.
- **Android Studio**: Necessário para configurar o ambiente Android. Baixe [aqui](https://developer.android.com/studio).
- **VSCode**: Baixe o Visual Studio Code [aqui](https://code.visualstudio.com/).
- **Java Development Kit (JDK)**: O JDK 11 ou superior é necessário para o desenvolvimento Android. Baixe [aqui](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Configuração do Ambiente**: Verifique se as variáveis de ambiente `JAVA_HOME` e `ANDROID_HOME` estão configuradas corretamente.

---

## 💻 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias principais:

- [React Native](https://reactnative.dev): Biblioteca para desenvolvimento de aplicativos móveis utilizando React.
- [Expo](https://expo.dev): Plataforma para construir aplicativos React Native de forma rápida e eficiente.
- [Styled-Components](https://styled-components.com/): Biblioteca para estilizar componentes React de maneira fácil e eficiente.
- [Typescript](https://www.typescriptlang.org/): Linguagem que adiciona tipos estáticos ao JavaScript, aumentando a segurança e robustez do código.
- [Axios](https://axios-http.com/): Biblioteca para realizar requisições HTTP de forma simplificada.
- [Reanimated V2](https://docs.swmansion.com/react-native-reanimated/): Biblioteca que permite criar animações e efeitos de transição avançados no React Native.

Além dessas, outras tecnologias foram utilizadas para melhorar a funcionalidade e experiência do aplicativo:

- [React Navigation](https://reactnavigation.org/): Gerenciador de navegação entre telas no React Native.
- [Async Storage](https://react-native-async-storage.github.io/async-storage/): Armazenamento de dados de forma assíncrona no dispositivo, ideal para persistência de dados locais.
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/): Biblioteca para lidar com gestos de toque e interações no aplicativo.

---

## 📦 Como baixar o projeto

```bash
# Clonar o repositório
$ git clone https://github.com/ArthurMitsuoYamamoto/POKEMON-POKEDEX.git

# Entrar na pasta do projeto
$ cd POKEMON-POKEDEX

# Instalar as dependências com Yarn (ou npm)
$ yarn install

# Iniciar o projeto com Expo
$ expo start
```

---

## 🗂 Estrutura de Pastas

```
.POKEMON-POKEDEX
├── src/
│   ├── api/
│   │   └── pokemon.ts
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   └── CircularProgress.tsx
│   │   ├── molecules/
│   │   │   └── IconButton.tsx
│   │   ├── organisms/
│   │   │   ├── AddPokemonCard.tsx
│   │   │   ├── AddPokemonFlatList.tsx
│   │   │   ├── CustomModal.tsx
│   │   │   ├── PokemonCard.tsx
│   │   │   └── PokemonFlatList.tsx
│   │   ├── pages/
│   │   │   ├── AddPokemon.tsx
│   │   │   ├── Catalogue.tsx
│   │   │   ├── Counter.tsx
│   │   │   └── Profile.tsx
│   │   └── templates/
│   │       ├── AddPokemonTemplate.tsx
│   │       ├── CatalogueTemplate.tsx
│   │       ├── CounterTemplate.tsx
│   │       └── ProfileTemplate.tsx
│   ├── interfaces/
│   │   ├── atoms.interface.ts
│   │   ├── organisms.interface.ts
│   │   ├── pokemon.interface.ts
│   │   ├── profile.interface.ts
│   │   └── templates.interface.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── pokemonSlice.ts
│   │   └── userSlice.ts
│   ├── types/
│   │   └── pokemon.type.ts
│   └── utils/
│       └── navigation.type.ts
```

---

## 💻 Funcionalidades

- **Tabs**: Estrutura de navegação com tabs usando `createBottomTabNavigator` do `@react-navigation/bottom-tabs`. As tabs disponíveis são "Profile", "Catalogue" e "Counter".
- **Profile**: Exibe informações do perfil do usuário, como nome, data de nascimento e avatar, permitindo edição.
- **Catalogue**: Exibe uma lista de pokémons.
- **Counter**: Exibe um contador, permitindo aumento ou diminuição do valor.
- **Imagens**: Carrega imagens de perfil e ícones de pokémons usando o componente `Image` do React Native.
- **Redux**: Gerenciamento de estado global com Redux, contendo informações do perfil e lista de pokémons.
- **API**: Faz chamadas para a API do Pokémon usando Axios para buscar informações de pokémons.
- **Modais**: Exibe modais personalizados com `CustomModal`.

---

## 🤝 Criadores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ArthurMitsuoYamamoto" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/135779587?v=4" width="100px;" alt="Foto do github Arthur Mitsuo Yamamoto"/><br>
        <sub>
          <b>Arthur Mitsuo Yamamoto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/FrancineldoLuan" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/127765135?v=4" width="100px;" alt="Foto do github Francineldo Luan"/><br>
        <sub>
          <b>Francineldo Luan</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/RamonCezarinoLopez" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/126570736?v=4" width="100px;" alt="Foto do github Ramon Cezarino Lopez"/><br>
        <sub>
          <b>Ramon Cezarino Lopez</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/EnzoLafer" target="_blank">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEjlIh2Qt9RGQ/profile-displayphoto-shrink_100_100/0/1718626134472?e=1730937600&v=beta&t=jQtnmzUzU4MsX8V60lwFP1SEJmzaXLOaE6sDA-HIUm0" width="100px;" alt="Foto do github Enzo Lafer Gallucci"/><br>
        <sub>
          <b>Enzo Lafer Gallucci</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DanielAraujoFaria" target="_blank">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQE8kCKYGe8mig/profile-displayphoto-shrink_200_200/0/1674257256462?e=1730332800&v=beta&t=WU_GhGeOTY1dOQymUMzC4

iyFdmOguxtcElTLnG4Eewg" width="100px;" alt="Foto do github Daniel Araujo Faria"/><br>
        <sub>
          <b>Daniel Araujo Faria</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

Ops! Vou preencher essas seções agora:

---

## 🏃 Iniciando o Projeto

Para rodar o projeto em sua máquina, siga os passos:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ArthurMitsuoYamamoto/POKEMON-POKEDEX.git
   ```

2. **Instale as dependências:**

   ```bash
   cd POKEMON-POKEDEX
   yarn install  # ou use npm install se preferir
   ```

3. **Inicie o Expo:**

   ```bash
   expo start
   ```

4. **Execute em um emulador ou dispositivo físico:**
   - Conecte um dispositivo Android ou iOS e escaneie o QR code exibido no terminal ou no navegador.
   - Use um emulador Android ou iOS, caso configurado.

---

## 🚧 Modificando o Projeto

Para modificar o projeto, você pode fazer ajustes nos arquivos dentro das pastas `src/components`, `src/pages`, e `src/store`. Algumas sugestões de personalização:

- **Adicionar novas páginas**: Na pasta `src/pages`, crie um novo arquivo para sua página e configure a navegação no arquivo de rotas.
- **Alterar o estilo de componentes**: Use a pasta `src/components` para editar ou criar novos componentes com `styled-components`.
- **Gerenciamento de estado**: Modifique os arquivos em `src/store` para adicionar novos estados globais ou modificar os existentes.

---

## 🐞 Depuração e Suporte

Caso encontre erros durante o desenvolvimento:

- **Erro de instalação de dependências**: Verifique se o Node.js e o Expo estão atualizados.
- **Erros na API**: Confirme se as URLs e endpoints da PokeAPI estão corretos.
- **Depuração de estado global**: Utilize o [Redux DevTools](https://github.com/reduxjs/redux-devtools) para inspecionar e modificar o estado da aplicação em tempo real.

Se persistirem os problemas, consulte a [documentação oficial do Expo](https://docs.expo.dev/) e [React Native](https://reactnative.dev/).

---

## 🌐 Aprenda Mais

Para aprender mais sobre as tecnologias utilizadas neste projeto:

- [Documentação do React Native](https://reactnative.dev/)
- [Guia do Expo](https://docs.expo.dev/)
- [Styled-Components](https://styled-components.com/docs)
- [Redux e Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/docs/intro)


