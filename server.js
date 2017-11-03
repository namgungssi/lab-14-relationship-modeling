'use strict';

require ('dotenv').config ();
require ('./lib/_server.js')
.start (process.env.PORT);


//how do I save db in .gitignore?
