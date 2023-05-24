from django import forms
from .models import mentorshipprogram

class Mymentorshipprogramform(forms.ModelForm):
    features = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = mentorshipprogram
        fields = ('__all__')