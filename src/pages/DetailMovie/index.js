import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Linking} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Button, Gap} from '../../components';
import {fetchMovieVideos} from '../../services';
import {colors, fonts} from '../../utils';
const DetailMovie = ({route, navigation}) => {
  const [videoId, setVideoId] = useState('');
  const [up, setUp] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setVideoId(await fetchMovieVideos(route.params.id));
    };
    fetchData();
  }, [route.params.id]);
  if (!videoId) {
    return (
      <View style={styles.page1}>
        <Text style={styles.text}>Maaf Video Trailer Tidak Tersedia</Text>
        <Gap height={30} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  const gotoNetflix = () => {
    const uri = 'https://www.netflix.com/in/title';
    Linking.openURL(`${uri}/${videoId.id}`);
  };

  const switchToDown = () => {
    setUp(false);
  };

  const switchToUp = () => {
    setUp(true);
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <Gap height={30} />
        <View style={styles.header}>
          <Button type="back" onPress={() => navigation.goBack()} />
          <Gap width={150} />
          <Text style={styles.tailer}>Trailer</Text>
        </View>
        <Gap height={30} />
        {route.params.id === 0 ? (
          <Text style={styles.text}>No Data</Text>
        ) : (
          <YoutubePlayer
            width={400}
            height={400}
            play={false}
            volume={50}
            key={videoId.id}
            videoId={videoId.key}
          />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Gap height={20} />
          <Text style={styles.text}>{route.params.release}</Text>
          <Gap height={20} />
          <Text style={styles.text}>
            Rating: {(route.params.rating / 2).toFixed(1)}{' '}
          </Text>
          <Gap height={20} />
          <View style={styles.overview}>
            <Text style={styles.text}>Overview</Text>
            {up && <Button type="up" onPress={switchToDown} />}
            {!up && <Button type="down" onPress={switchToUp} />}
          </View>
          <Gap height={20} />
        </View>
        {!up && (
          <Text style={styles.contentOverview}>{route.params.overview}</Text>
        )}
        <Gap height={20} />
        <View style={{justifyContent: 'flex-end'}}>
          <Gap width={50} />
          <Button title="Watch Now" type="secondary" onPress={gotoNetflix} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  page1: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: -120,
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    paddingHorizontal: 16,
    color: colors.primary,
  },
  contentOverview: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    paddingHorizontal: 16,
    color: colors.primary,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    paddingHorizontal: 16,
    color: colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tailer: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
    marginRight: 20,
  },
  overview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
