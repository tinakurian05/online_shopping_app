from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Octane', 'Octane'),
        ('Regalia', 'Regalia'),
        ('Raga', 'Raga'),
        ('Edge', 'Edge'),
        ('Neo', 'Neo'),
        ('Automatic', 'Automatic'),
        ('Karishma', 'Karishma'),
        ('Smartwatches', 'Smartwatches'),
        ('Nebula', 'Nebula'),
        ('Couple Watches', 'Couple Watches'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='store_images/', blank=True)

    def __str__(self):
        return self.name
