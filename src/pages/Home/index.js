import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CommingSoon,
  Gap,
  DiscoverMovie,
  Loading,
  TopRate,
  Button,
} from '../../components';
import LatestMovie from '../../components/molecules/LatestMovie';
import {
  fetchDiscover,
  fetchMovies,
  fetchTopRated,
  latestMovie,
} from '../../services';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  const [discover, setDiscover] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      setDiscover(await fetchDiscover());
      setNowPlaying(await fetchMovies());
      setLatestMovies(await latestMovie());
      setTopRated(await fetchTopRated());
    };
    setLoading(false);
    fetchApi();
  }, []);

  return (
    <>
      {!loading && <Loading />}
      {loading && (
        <View style={styles.page}>
          <ScrollView>
            <Gap height={20} />
            <Text style={styles.text}>Now Playing</Text>
            <Gap height={10} />
            <View style={styles.wrapperScroll}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.nowPlaying}>
                  {nowPlaying.map((item, index) => (
                    <CommingSoon
                      key={item.id}
                      image={item.poster}
                      title={item.title}
                      onPress={() => navigation.navigate('DetailMovie', item)}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
            <Gap height={20} />
            <Text style={styles.text}>Latest Movie</Text>
            <Gap height={20} />
            <View style={styles.wrapperScroll}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.nowPlaying}>
                  {latestMovies.slice(10, 16).map((item, index) => (
                    <LatestMovie
                      key={item.id}
                      image={item.poster}
                      title={item.title}
                      onPress={() => navigation.navigate('DetailMovie', item)}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
            <Gap height={10} />
            <Text style={styles.text}>Discover</Text>
            <View style={styles.wrapperScroll}>
              <Gap height={20} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.nowPlaying}>
                  {discover.map((item, index) => (
                    <DiscoverMovie
                      key={item.id}
                      judul={item.title}
                      image={item.poster}
                      rating={(item.rating / 2).toFixed(1)}
                      onPress={() => navigation.navigate('DetailMovie', item)}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
            <Gap height={30} />
            <Text style={styles.text}>Top Rate</Text>
            <Gap height={20} />
            <View style={styles.topRate}>
              {topRated.slice(6, 20).map((item, index) => (
                <TopRate
                  key={item.id}
                  release={item.release}
                  title={item.title}
                  image={item.poster}
                  vote={item.vote}
                  rating={(item.rating / 2).toFixed(1)}
                  onPress={() => navigation.navigate('DetailMovie', item)}
                />
              ))}
            </View>
            <Gap height={5} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  nowPlaying: {
    marginLeft: 16,
    flexDirection: 'row',
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    paddingHorizontal: 16,
    color: colors.primary,
  },
  wrapperScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  topRate: {
    marginBottom: 16,
  },
  search: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6 / 2,
    width: '100%',
    height: 45,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 45,
  },
  buttonSearch: {
    position: 'absolute',
    right: 22,
    top: 12,
  },
});
