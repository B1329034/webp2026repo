from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_api(request):
    # 這裡會去抓網址後面有沒有 ?name=誰
    # 如果沒抓到，預設就叫 'World'
    user_str = request.query_params.get('name', 'World')
    
    # 這裡把結果打包成 JSON 格式回傳
    data = {"message": f"hello, {user_str}"}
    return Response(data)
