from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from . import serializers
from .models import *
from rest_framework import status 
import json
# Create your views here.

class mentorshipview(APIView):
    def get(self, request):
        mentorings = mentorshipprogram.objects.all()
        # mentorings.features = json.dumps(mentorings.features )
        serier = serializers.mentorshipprogramseri(mentorings, many=True)
        print(serier.data)
        return Response({'status': 'success', "data":serier.data}, status= 200) 
    
        
    
    # def post(self, request):
    #     postdata = request.data
    #     seri = serializers.mentorshipprogramseri(data=postdata)
    #     if seri.is_valid():
    #         seri.save()
    #     else:
    #         return Response({"status": "error", "data": seri.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class Ebookseriview(ListAPIView):
    queryset  = Ebook.objects.all()
    serializer_class = serializers.Ebookseri


class  Blogseriview(ListAPIView):
    queryset  = Blog.objects.all()
    serializer_class = serializers.Blogseri
    

class  Testimonyview(ListAPIView):
    queryset  = Testimony.objects.all()
    serializer_class = serializers.Testimonyseri
    

class  Seminarview(ListAPIView):
    queryset  = Seminar.objects.all()
    serializer_class = serializers.Seminarseri
    

class  Signalsview(ListAPIView):
    queryset  = Signals.objects.all()
    serializer_class = serializers.Signalsseri
    

class  Videosview(ListAPIView):
    queryset  = Videos.objects.all()
    serializer_class = serializers.Videosseri
    

class  websiteview(ListAPIView):
    queryset  = Website_setting.objects.all()
    serializer_class = serializers.Website_settingseri
    

    

    
