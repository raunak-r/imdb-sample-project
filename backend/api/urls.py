from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers

from .views import *

app_name = 'api'
router = routers.DefaultRouter()

urlpatterns = [
	path('', include(router.urls)),

    # url(r'^$', HomeView.as_view(), name='HomeView'),

    # url(r'^new-claim/$', NewClaimView.as_view(), name='NewClaimView'),
    # url(r'^dashboard/$', PolicyDashboardView.as_view(), name='PolicyDashboardView'),

    # url(r'^dashboard/policy/(?P<policy>\d+)$', UserDashboardView.as_view(), name='UserDashboardView'),
]