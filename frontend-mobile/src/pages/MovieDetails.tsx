import React, { useState, useEffect } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../@types/Movie';
import { getMovieById } from '../services';
import { colors, text, theme } from '../styles';
import star from '../assets/star.png';


interface MovieDetailsProps {
  route: any;
}

export default function MovieDetailts({ route: { params: { id } } }: MovieDetailsProps) {

  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(false);

  async function loadMovieData() {
    setLoading(true);
    const res = await getMovieById(id);
    setMovie(res.data);
    setLoading(false);
  }

  useEffect(() => {
    loadMovieData();
  }, []);

  return (
    <View style={theme.container}>
      {loading ?
        (<ActivityIndicator size="large" color={colors.light} />) :
        (
          <ScrollView>
            <View style={{ height: "100%" }}>

              <View style={theme.movieDetails}>
                <Image source={{ uri: movie?.imgUrl }} style={theme.movieImg} />
                <View style={theme.movieTextContainer}>
                  <Text style={text.movieTitle}> {movie?.title}</Text>
                  <Text style={text.movieYear}> {movie?.year}</Text>
                  <Text style={text.movieSubTitle}> {movie?.subTitle}</Text>
                  <View style={theme.borderCard}>
                    <Text style={text.movieSynoposis}> {movie?.synoposis}</Text>
                  </View>
                </View>
              </View>


              <View style={theme.movieDetails}>
                <Text> Form Avalicao</Text>
              </View>

              <View style={theme.movieDetails}>
                {movie?.reviews.map((review) => (
                  <View style={theme.movieTextContainer} key={review.id}>
                    <View style={theme.nameReviewContainer}>
                      <Image source={star} />
                      <Text style={text.reviewName}>{review.user.name}</Text>
                    </View>
                    <View style={theme.borderCard}>
                      <Text style={text.movieSynoposis}>{review.text}</Text>
                    </View>
                  </View>
                ))
                }
              </View>


            </View>
          </ScrollView>
        )}
    </View>
  )
}

