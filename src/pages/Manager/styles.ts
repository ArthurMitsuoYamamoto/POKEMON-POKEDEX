import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Cor de fundo leve
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  input: {
    width: '100%', // Largura total do componente
    padding: 10, // Espaçamento interno
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 10, // Margem inferior para espaçamento
    backgroundColor: '#fff', // Fundo branco para o input
  },
  button: {
    width: '100%', // Largura total do botão
    padding: 15, // Espaçamento interno
    backgroundColor: '#007BFF', // Cor do botão
    borderRadius: 5, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto no botão
    marginBottom: 10, // Margem inferior para espaçamento
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
  pokemonItem: {
    flexDirection: 'row', // Layout em linha
    justifyContent: 'space-between', // Espaço entre o texto e o botão
    alignItems: 'center', // Alinha verticalmente no centro
    padding: 10, // Espaçamento interno
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 10, // Margem inferior para espaçamento
    shadowColor: '#000', // Cor da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 2, // Elevação para Android
  },
});

export default styles;
