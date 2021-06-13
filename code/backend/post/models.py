import uuid

from django.db import models


class PostModel(models.Model):
    """Post Model"""

    class Meta:
        db_table = 'post'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name='タイトル', max_length=30)
    content = models.TextField()
    
