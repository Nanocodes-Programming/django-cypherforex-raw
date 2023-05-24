from rest_framework import serializers  
from . import models
import json
from django.utils import timezone
from django.utils.timesince import timesince

class mentorshipprogramseri(serializers.ModelSerializer):
    features = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
   
    class Meta:
        model = models.mentorshipprogram
        fields = ('__all__')
        # fields = ['features','packagename','price']
        # read_only_fields = []
        # write_only_fields= [ ]
    def get_features(self, obj):
        data =obj.features
        json_data =json.loads(data)
        return json_data
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
    

class mentorshipsubscriptionsseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.mentorshipsubscriptions
        fields = ('__all__')
        # read_only_fields = []
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)

class Ebookseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Ebook
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
class Blogseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Blog
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
        
        
class Testimonyseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Testimony
        fields = ('__all__')
        # read_only_fields = []
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
        

class Seminarseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    features = serializers.SerializerMethodField()
    class Meta:
        model = models.Seminar
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
        
class Signalsseri(serializers.ModelSerializer):
    features = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Signals
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_features(self, obj):
        data =obj.features
        json_data =json.loads(data)
        return json_data
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        



        

class Videosseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Videos
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
        
        


class Website_settingseri(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    class Meta:
        model = models.Website_setting
        fields = ('__all__')
        read_only_fields = ['*']
        # write_only_fields= [ ]
    def get_created_at(self, obj):
        return timesince(obj.created_at)

    def get_updated_at(self,obj):
        return timesince(obj.updated_at)
        
       
        
        
        


