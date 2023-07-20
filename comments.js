//create web server
var express = require('express');
var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({ 
	defaultLayout:'main',
	helpers: {
		section: function(name, options){
			if(!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		}
	} 
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//set port
app.set('port', process.env.PORT || 3000);

//static middleware
app.use(express.static(__dirname + '/public'));

//middleware to parse POST data
app.use(require('body-parser')());

//middleware to parse cookies
app.use(require('cookie-parser')(credentials.cookieSecret));

//middleware to parse querystrings
app.use(require('express-query')(require('qs')));

//middleware to parse form data
app.use(require('multer')());

//middleware to parse multipart
app.use