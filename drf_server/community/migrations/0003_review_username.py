# Generated by Django 3.2.3 on 2021-05-24 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0002_auto_20210523_1154'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='username',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]