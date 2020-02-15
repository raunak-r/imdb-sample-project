from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers

from .views import *

app_name = 'api'
router = routers.DefaultRouter()

router.register('movie', MovieViewSet)
router.register('rating', RatingViewSet)

urlpatterns = [
	path('', include(router.urls)),
]