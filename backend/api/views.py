from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication

from django.contrib.auth.models import User
from .models import Movie, Rating
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class MovieViewSet(viewsets.ModelViewSet):
	queryset = Movie.objects.all()
	serializer_class = MovieSerializer
	authentication_classes = (TokenAuthentication, )

	@action(detail=True, methods=['POST'])
	def rate_movie(self, request, pk=None):
		if 'stars' in request.data:
			movie = Movie.objects.get(id=pk)
			user = request.user
			# print(user)
			# print(movie.id)
			# print(pk)
			stars = request.data['stars']

			try:
				rating = Rating.objects.get(user=user.id, movie=movie.id)
				rating.stars = stars
				rating.save()
			except:
				rating = Rating.objects.create(user=user, movie=movie, stars=stars)

			serializer = RatingSerializer(rating, many=False)
			response = {
				'message' : 'Successful',
				'result' : serializer.data
			}
			return Response(response, status=status.HTTP_200_OK)	
		else:
			response = {'message' : "Please provide stars"}
			return Response(response, status=status.HTTP_400_BAD_REQUEST)

class RatingViewSet(viewsets.ModelViewSet):
	queryset = Rating.objects.all()
	serializer_class = RatingSerializer
	authentication_classes = (TokenAuthentication, )