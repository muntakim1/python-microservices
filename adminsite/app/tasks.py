from __future__ import absolute_import, unicode_literals
from celery import shared_task
from .models import Product
import requests
import random
import json


@shared_task
def addData(x, y):
    return x+y


@shared_task
def count_Product():
    print("Called")
    return Product.objects.count()


@shared_task
def populate_Product():

    data = requests.get(
        'https://api.evaly.com.bd/go-catalog/api/v1/public/products?page=' +
        str(random.randint(1, 100))+'&limit=10')
    clean_json = json.loads(data.text)
    raw_data = clean_json["data"]
    for data in raw_data:
        product = Product()
        product.title = data['name']
        product.image = data['image_urls'][0]
        product.price = data['max_price']
        product.discounted_price = data['min_discounted_price']
        product.save()
    print(raw_data)
