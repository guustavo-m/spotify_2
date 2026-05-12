import { StatusBar } from 'expo-status-bar';
import { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

const GREEN       = '#1DB954';
const BLACK       = '#121212';
const DARK_GRAY   = '#181818';
const MEDIUM_GRAY = '#282828';
const LIGHT_GRAY  = '#B3B3B3';
const WHITE       = '#FFFFFF';

const MUSICAS = [
  { id: '1',  titulo: 'Blinding Lights',   artista: 'The Weeknd',       album: 'After Hours',      duracao: '3:20', cor: '#FF6B6B' },
  { id: '2',  titulo: 'Shape of You',      artista: 'Ed Sheeran',       album: 'Divide',           duracao: '3:54', cor: '#4ECDC4' },
  { id: '3',  titulo: 'Levitating',        artista: 'Dua Lipa',         album: 'Future Nostalgia', duracao: '3:23', cor: '#A8E6CF' },
  { id: '4',  titulo: 'Stay',              artista: 'The Kid LAROI',    album: 'F*CK LOVE 3',      duracao: '2:21', cor: '#FFD93D' },
  { id: '5',  titulo: 'Peaches',           artista: 'Justin Bieber',    album: 'Justice',          duracao: '3:18', cor: '#FF8B94' },
  { id: '6',  titulo: 'drivers license',   artista: 'Olivia Rodrigo',   album: 'SOUR',             duracao: '4:02', cor: '#6C5CE7' },
  { id: '7',  titulo: 'Montero',           artista: 'Lil Nas X',        album: 'Montero',          duracao: '2:18', cor: '#FD79A8' },
  { id: '8',  titulo: 'good 4 u',          artista: 'Olivia Rodrigo',   album: 'SOUR',             duracao: '2:58', cor: '#00B894' },
  { id: '9',  titulo: 'Industry Baby',     artista: 'Lil Nas X',        album: 'Montero',          duracao: '3:32', cor: '#E17055' },
  { id: '10', titulo: 'Save Your Tears',   artista: 'The Weeknd',       album: 'After Hours',      duracao: '3:36', cor: '#74B9FF' },
];

const CATEGORIAS = [
  { id: '1', nome: 'Pop',       cor: '#E040FB' },
  { id: '2', nome: 'Rock',      cor: '#FF5252' },
  { id: '3', nome: 'Hip-Hop',   cor: '#FF6D00' },
  { id: '4', nome: 'Eletrônica',cor: '#00E5FF' },
  { id: '5', nome: 'Sertanejo', cor: '#69F0AE' },
  { id: '6', nome: 'Funk',      cor: '#FFD740' },
];

function MusicCard({ musica }) {

  return (
    <View style={styles.musicCard}>
      <View style={styles.musicCapa, { backgroundColor: musica.cor }}>
        <Text style={styles.musicCapaLetra}>
          {""}
        </Text>
      </View>
      <View style={styles.musicInfo}>
        <Text
          style={styles.musicTitulo}
        >
          {musica.titulo}
        </Text>
        <Text style={styles.musicArtista}>
          {musica.artista} · {musica.album}
        </Text>
      </View>
      <View style={styles.musicAcoes}>
        <Text style={styles.musicDuracao}>{musica.duracao}</Text>
      </View>
      </View>
  );
}



export default function App() {
  const [busca, setBusca] = useState('');
  
  function handleBusca() {
    if (!busca) {
      Alert.alert('Atenção', 'Busca feita incorretamente');
    } else {
      Alert.alert('Sucesso', 'Veja suas músicas');
    }
  }
  
  return (
    <ScrollView style={styles.scrollArea}>
        <View style={styles.banner}>
          <Text style={styles.bannerSub}>Bem-vindo ao</Text>
          <Text style={styles.bannerTitulo}>Spotify 2</Text>
          <Text style={styles.bannerDesc}>
            Sua música, do seu jeito.
          </Text>
          <Image style={styles.bannerLogo} source={require('./assets/spotify_logo.png')}></Image>
        </View>

        <Text style={styles.secaoTitulo}>Explorar por Categoria</Text>
        <View
          style={styles.categoriasScroll}
        >
          {CATEGORIAS.map(cat => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoriaChip, { backgroundColor: cat.cor, borderColor: cat.cor }]}
            >
              <Text style={[styles.categoriaTexto, { color: 'white' }]}>{cat.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buscaHeader}>
          <Text style={styles.secaoTitulo}>Busque pelo artista</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Busque pelo nome do artista..."
              placeholderTextColor={LIGHT_GRAY}
              value={busca}
              onChangeText={setBusca}
            />
          <TouchableOpacity
            style={styles.buscaButton}
            onPress={handleBusca}
          >
          <Text style={styles.buscaButtonText}>
            BUSCAR
          </Text>
        </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bannerVerde}>
          <Image style={styles.bannerLogoVerde} source={require('./assets/ouvinte.png')}></Image>
          <Text style={styles.bannerSubVerde}>Curta a sua </Text>
          <Text style={styles.bannerTituloVerde}>Música</Text>
          <Text style={styles.bannerDescVerde}>
            Sem interrupções.
          </Text>
        </View>

        <Text style={styles.secaoTitulo}>As Mais Tocadas</Text>
        <View style={styles.musicasScroll}>
          {MUSICAS.map(m => (
            <MusicCard
              key={m.id}
              musica={m}
            />
          ))}
        </View>
        <View style={styles.buscaHeader}>
          <Text style={styles.secaoTitulo}>Não encontrou ? Busque pelo nome</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Busque sua música..."
              placeholderTextColor={LIGHT_GRAY}
              value={busca}
              onChangeText={setBusca}
            />
          <TouchableOpacity
            style={styles.buscaButton}
            onPress={handleBusca}
          >
          <Text style={styles.buscaButtonText}>
            BUSCAR
          </Text>
        </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.secaoBottom}>Desenvolvido por : Gustavo Millamonte</Text>
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
scrollArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  banner: {
    backgroundColor: MEDIUM_GRAY,
    margin: 20,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: GREEN,
    position: 'relative',
  },
  bannerLogo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 35,
    right: 40,
  },
  bannerSub: {
    color: LIGHT_GRAY,
    fontSize: 13,
  },
  bannerTitulo: {
    color: WHITE,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },
  bannerDesc: {
    color: LIGHT_GRAY,
    fontSize: 14,
    marginTop: 8,
  },
  secaoTitulo: {
    color: WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  categoriasScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 8,
    gap: 8,
  },
  categoriaChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  categoriaTexto: {
    fontSize: 12,
    fontWeight: '600',
    color: WHITE,
  },
  musicasScroll: {
    paddingHorizontal: 20,
  },
  musicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_GRAY,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: MEDIUM_GRAY,
  },
  musicCapa: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicCapaLetra: {
    color: WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  musicInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  musicTitulo: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '600',
  },
  musicArtista: {
    color: LIGHT_GRAY,
    fontSize: 12,
    marginTop: 2,
  },
  musicAcoes: {
    alignItems: 'center',
  },
  musicDuracao: {
    color: LIGHT_GRAY,
    fontSize: 12,
  },
  spacer: {
    height: 30,
  },
  buscaHeader: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: MEDIUM_GRAY,
    color: WHITE,
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    height: 48,
  },
  buscaButton: {
    backgroundColor: GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 18,
    height: 48,
  },
  buscaButtonText: {
    color: WHITE,
    fontSize: 13,
    fontWeight: 'bold',
  },
  secaoBottom: {
    color: LIGHT_GRAY,
    textAlign: 'center',
    marginTop: 15,
  },
  bannerVerde: {
    backgroundColor: GREEN,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    marginTop: 30,
    padding: 24,
    position: 'relative',
  },
  bannerLogoVerde: {
    width: 110,
    height: 110,
    position: 'absolute',
    bottom: 16,
    right: 30,
    opacity: 0.85,
  },
  bannerSubVerde: {
    color: BLACK,
    fontSize: 13,
  },
  bannerTituloVerde: {
    color: WHITE,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },
  bannerDescVerde: {
    color: BLACK,
    fontSize: 14,
    marginTop: 8,
  },
});
