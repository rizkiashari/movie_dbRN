import axios from 'axios';

const apiKey = '779ac0f172ef3f22c3585a35ed6c047f';
const uri = 'https://api.themoviedb.org/3';
const movieUri = `${uri}/movie`;
const nowPlaying = `${uri}/movie/now_playing`;
const moviePopular = `${uri}/movie/popular`;
const topRated = `${uri}/movie/top_rated`;
const discover = `${uri}/discover/movie/`;

export const fetchTopRated = async () => {
  try {
    const {data} = await axios.get(topRated, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/w780';

    const modifieData = data.results.map(item => ({
      id: item['id'],
      poster: posterUrl + item['poster_path'],
      title: item['title'],
      overview: item['overview'],
      release: item['release_date'],
      rating: item['vote_average'],
      vote: item['vote_count'],
    }));

    return modifieData;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const latestMovie = async () => {
  try {
    const {data} = await axios.get(nowPlaying, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/w780';

    const modifieData = data.results.map(item => ({
      id: item['id'],
      poster: posterUrl + item['poster_path'],
      title: item['title'],
      overview: item['overview'],
      release: item['release_date'],
    }));

    return modifieData;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const fetchMovies = async () => {
  try {
    const {data} = await axios.get(nowPlaying, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });
    const modifData = data.results.map(item => ({
      id: item['id'],
      backPoster: item['backdrop_path'],
      poster: item['poster_path'],
      title: item['title'],
      overview: item['overview'],
      rating: item['vote_average'],
      release: item['release_date'],
    }));
    return modifData;
  } catch (error) {
    console.log('Error', error);
  }
};

export const fetchMoviePopular = async () => {
  try {
    const {data} = await axios.get(moviePopular, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });
    const modifData = data.results.map(item => ({
      id: item['id'],
      backPoster: item['backdrop_path'],
      poster: item['poster_path'],
      title: item['title'],
      overview: item['overview'],
      rating: item['vote_average'],
      release: item['release_date'],
    }));
    return modifData;
  } catch (error) {
    console.log('Error', error);
  }
};

export const fetchDiscover = async () => {
  try {
    const {data} = await axios.get(discover, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/w780';

    const modifieData = data.results.map(item => ({
      id: item['id'],
      poster: posterUrl + item['poster_path'],
      overiew: item['overview'],
      releaseDate: item['release_date'],
      title: item['title'],
      rating: item['vote_average'],
      release: item['release_date'],
    }));

    return modifieData;
  } catch (error) {
    console.log('Error', error);
  }
};

export const fetchMovieVideos = async id => {
  try {
    const {data} = await axios.get(`${movieUri}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data['results'][0];
  } catch (error) {
    console.log('Error: ', error);
  }
};
