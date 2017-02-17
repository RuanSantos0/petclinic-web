angular.module('app.services', [])

.service('CadDono',['$http','ApiEndpoint',function($http,ApiEndpoint){

    //var api_url = ApiEndpoint.url ;

    var ret = {
        find: function(data){

          return $http.post(api_url+'/todo',data).then(function(resp){
                return resp.data;
          });

      },
          all: function(){

            return $http.get(api_url).then(function(resp){
                  return resp.data;
              });

          },
          add: function(data){

            return $http.post(api_url+'/CadDono', data).then(function(resp){
                  return resp.data;
              });

          },
        }
       ret.all();

       return ret;

}])

.service('CadPet',['$http','ApiEndpoint',function($http,ApiEndpoint){

}]);
