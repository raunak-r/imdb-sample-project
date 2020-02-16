from rest_framework import serializers
from .models import *

class MovieSerializer(serializers.ModelSerializer):
	class Meta:
		model = Movie
		fields = ['id', 'title', 'description', 'no_of_ratings', 'avg_rating']

class RatingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Rating
		fields = ['id', 'user', 'movie', 'stars']