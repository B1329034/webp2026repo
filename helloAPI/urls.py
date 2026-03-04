from django.contrib import admin
from django.urls import path
# 這一行是把我們剛剛寫好的 hello_api 功能匯入進來
from myapp.views import hello_api

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # 這就是我們新加的門牌！
    # 當網址是 /hello/ 的時候，就執行 hello_api
    path('hello/', hello_api),
]
