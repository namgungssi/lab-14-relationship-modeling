'use strict';

require ('dotenv').config ();
require ('./lib/_server.js')
.start (process.env.PORT);
