import React, { useState, useEffect } from 'react';
import { Image, View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../@types/Movie';
import { getMovieById, saveReview } from '../services';
import { colors, movieDetailsPage, text, theme } from '../styles';
import star from '../assets/star.png';
import { hasRoleMember } from '../services/auth';
import { Review } from '../@types/Review';
import Toast from 'react-native-tiny-toast';

interface MovieDetailsProps {
  route: any;
}

export default function MovieDetailts({ route: { params: { id } } }: MovieDetailsProps) {

  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>();
  const [loading, setLoading] = useState(false);
  const [loadingReview, setLoadingReview] = useState(false);
  const [member, setMember] = useState(false);

  const [review, setReview] = useState<Review>({
    "movieId": id,
    "text":""
  });

  async function loadMovieData() {
    setLoading(true);
    const res = await getMovieById(id);
    setMovie(res.data);
    setReviews(res.data.reviews);
    setLoading(false);

  }

  async function loadMovieReviewsData() {
    setLoadingReview(true);
    const res = await getMovieById(id);
    setReviews(res.data.reviews);
    setLoadingReview(false);
  }

  async function isMember() {
    const result = await hasRoleMember();
    setMember(result);
  }

  async function handleAvaliation() {

    if(review.text?.trim().length===0)
    {
      Toast.show("A avaliação não pode ser vazia!");
    }
    else
    {
      await saveReview(review)
      await loadMovieReviewsData();
      setReview({ "movieId": id,   "text":"" });
    }
  }

  useEffect(() => {
    loadMovieData();
    isMember();
  }, []);

  return (
    <View style={theme.container}>
      {loading ?
        (<ActivityIndicator size="large" color={colors.light} />) :
        (
          <ScrollView keyboardShouldPersistTaps={'always' }>
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


              {member ?
                <View style={movieDetailsPage.movieDetailsForm}>

                  <TextInput style={movieDetailsPage.textInput}
                    placeholder="Digite sua avaliação aqui"
                    autoCapitalize="none"
                    value={review.text}
                    onChangeText={
                      (e) => {
                        setReview({ ...review, "text": e })
                      }
                    }
                  />

                  <TouchableOpacity
                    style={movieDetailsPage.button}
                    activeOpacity={0.8}
                    onPress={() => handleAvaliation()}
                  >
                    <Text style={text.reviewButtonTitle}>SALVAR AVALIAÇÃO</Text>
                  </TouchableOpacity>


                </View> :
                null
              }

              {loadingReview ?
                (<ActivityIndicator size="large" color={colors.light} />) :
                null
              }
              <View style={theme.movieDetails}>
                  {reviews?.map((review) => (
                    <View style={theme.movieTextContainer} key={review.id}>
                      <View style={theme.nameReviewContainer}>
                        <Image source={star} />
                        <Text style={text.reviewName}>{review.user?.name}</Text>
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

