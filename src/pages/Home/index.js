import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Action'

const list = [
  {
    id: 1,
    label: 'Maquiagem Lula',
    value: '350,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'PIX para Luis Fernando',
    value: '100,00',
    date: '22/05/2022',
    type: 0 //depesas
  },
  {
    id: 3,
    label: 'Salario',
    value: '1.500,00',
    date: '22/05/2022',
    type: 1 //receita
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Teste" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
