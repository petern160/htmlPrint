var https = require('https')


module.exports = function getHTML (options, callback) {

    https.get(options, function(response){
        if(response.statusCode !== 200){
            console.log('failed with status code '+ response.statusCode);
        }else{
            console.log('received')
        }
        var data = "";
        response.on("data", function(chunk){
            data += chunk;
            // console.log(chunk + '\n');
        })
        response.on ("end", function(){
            // console.log("data here " + data);
            callback(data);
        })
    })
  }
  
