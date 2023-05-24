from django.db import models
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class mentorshipprogram(models.Model):
    features = models.TextField(null=True, blank=True, default=None, editable=True)
    packagename = models.CharField(null=False,blank=False,max_length=100,editable=True)
    price = models.DecimalField(blank=False,null=False,default=0.00, decimal_places=2, max_digits=6, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def delete_member(self, key):
        if key in self.data:
            del self.data[key]
            self.save()    

    def __str__(self):
        return self.packagename

    def __unicode__(self):
        return 





class mentorshipsubscriptions(models.Model):
    name = models.CharField(blank=False,max_length=200, null=False, editable=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2, editable=True)
    package = models.ForeignKey(mentorshipprogram,on_delete=models.CASCADE, editable=True)
    datesubscribed = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return f"{self.name} with package {self.package}"

    def __unicode__(self):
        return 





class Ebook(models.Model):
    ebook_title = models.CharField(blank=False, null=False,max_length=200,unique=True, editable=True)
    poster = models.CharField(blank=False, null=False,max_length=200, editable=True)
    ebook_description = models.TextField(blank=True,null=True, editable=True )
    ebook = models.FileField(upload_to="videos", default=ebook_title, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    

    def __str__(self):
        return self.ebook_title
    





class Blog(models.Model):
    blog_title = models.CharField(blank=False, null=False,max_length=200,unique=True, editable=True)
    poster = models.CharField(blank=False, null=False,max_length=200, editable=True)
    blog_body = models.TextField(blank=False,null=False, editable=True)
    blog_image = models.ImageField(upload_to="blog_image", default=blog_title, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    

    def __str__(self):
        return self.blog_title

    def __unicode__(self):
        return 
    
    
    
class Testimony(models.Model):
    testimony_title = models.CharField(blank=False, null=False,max_length=200,unique=True, editable=True)
    name = models.CharField(blank=False, null=False,max_length=200, editable=True)
    testimony_body = models.TextField(blank=False,null=False, editable=True)
    testimony_image = models.ImageField(upload_to="testimony_image", default=testimony_title, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    

    def __str__(self):
        return f"{self.testimony_title}  testimony by {self.name}"

    def __unicode__(self):
        return 
    





class Seminar(models.Model):
    seminar_title = models.CharField(blank=False, null=False,max_length=200,unique=True, editable=True)
    poster = models.CharField(blank=False, null=False,max_length=200, editable=True)
    seminar_body = models.TextField(blank=False,null=False, editable=True)
    seminar_image = models.ImageField(upload_to="blog_image", default=seminar_title, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    
    

    def __str__(self):
        return self.seminar_title

    def __unicode__(self):
        return 


class Signals(models.Model):
    features = models.TextField(null=True, blank=True, default=None, editable=True)
    signalname = models.CharField(null=False,blank=False,max_length=100, editable=True)
    price = models.DecimalField(blank=False,null=False,default=0.00, decimal_places=2, max_digits=6, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def delete_member(self, key):
        if key in self.data:
            del self.data[key]
            self.save()    

    def __str__(self):
        return self.signalname
    

  
    
class Signalsubscription(models.Model):
    name = models.CharField(blank=False,max_length=200, null=False, editable=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2, editable=True)
    signalpackage = models.ForeignKey(Signals,on_delete=models.CASCADE, editable=True)
    datesubscribed = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)   

    def __str__(self):
        return f"{self.name} with package {self.signalpackage}"
    


    def __unicode__(self):
        return 

    
    
    



class Videos(models.Model):
    video_title = models.CharField(blank=False, null=False,max_length=200,unique=True, editable=True)
    poster = models.CharField(blank=False, null=False,max_length=200, editable=True)
    video_description = models.TextField(blank=True,null=True , editable=True)
    video = models.FileField(upload_to="videos", default=video_title, editable=True)
    video_poster_image = models.ImageField(upload_to="videos_poster_image", default=video_title, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    

    def __str__(self):
        return self.video_title

    def __unicode__(self):
        return



    
    
class Website_setting(models.Model):
    phone = models.CharField(max_length=20, blank=True, default="Add phone number",null=True, editable=True)
    website_email = models.EmailField(max_length=254, null=True,blank=True, editable=True)
    address = models.TextField(null=True, blank=True, default=None, editable=True)
    facebook = models.CharField(blank=True, default="facebook",null=True,max_length=200, editable=True)
    twitter = models.CharField(blank=True, default="twitter",null=True,max_length=200, editable=True)
    instagram = models.CharField(blank=True, default="instagram",null=True,max_length=200, editable=True)
    telegram = models.CharField(blank=True, default="telegram",null=True,max_length=200, editable=True)
    youtube = models.CharField(blank=True, default="youtube",null=True,max_length=200, editable=True)
    company_logo = models.ImageField(upload_to="logo",blank=True, null=True,default="companylogo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    

    def __str__(self):
        return "website settings"

    def __unicode__(self):
        return 
    
    


    
    


    
class Newsletter(models.Model):
    email = models.EmailField(null=False,blank=False, unique=True)    

    def __str__(self):
        return self.email

    def __unicode__(self):
        return 
   