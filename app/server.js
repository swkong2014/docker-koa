const Koa = require('koa');
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAlE1gWTpNrPT0NldFBbxwmhqHo7dYX6FY'
});
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
    googleMapsClient.directions({
        origin: 'Town Hall, Sydney, NSW',
        destination: 'Parramatta, NSW',
    }, function(response){
        console.log(response)
    })
});

if (!module.parent) app.listen(8080);