from django.contrib import admin
from . import models as mylocalmodel
from django.db import models
# from .forms import Mymentorshipprogramform
import json
from django.contrib.admin.widgets import AdminTextareaWidget


# Register your models here.
admin.site.register(mylocalmodel.Blog)

admin.site.register(mylocalmodel.Ebook)


class ListTextareaWidget(AdminTextareaWidget):
    def value_from_datadict(self, data, files, name):
        value = super().value_from_datadict(data, files, name)
        return json.dumps(value.splitlines())
        # return json.dumps(value.splitlines(), ensure_ascii=False)
    # def value_omitted_from_data(self, data, files, name):
    #     # Return False so that the widget value is included in the form data
    #     return False

    

class Mymentorshipprogramcustom(admin.ModelAdmin):
    # form = Mymentorshipprogramform
    formfield_overrides = {
        models.TextField: {'widget': ListTextareaWidget},
    }
admin.site.register(mylocalmodel.mentorshipprogram,Mymentorshipprogramcustom)

admin.site.register(mylocalmodel.mentorshipsubscriptions)

admin.site.register(mylocalmodel.Seminar)

admin.site.register(mylocalmodel.Newsletter)

class Signalcustom(admin.ModelAdmin):
    # form = Mymentorshipprogramform
    formfield_overrides = {
        models.TextField: {'widget': ListTextareaWidget},
    }
admin.site.register(mylocalmodel.Signals,Signalcustom)

admin.site.register(mylocalmodel.Testimony)


admin.site.register(mylocalmodel.Videos)


admin.site.register(mylocalmodel.Website_setting)