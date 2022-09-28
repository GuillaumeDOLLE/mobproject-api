const express = require('express');

const router = require('./router');

const app = express();

/** ********* */
/*  SWAGGER */
/** ******** */

const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: "1.0.0",
        title: "API Mob",
        license: {
            name: "MIT"
        },
        description: "API description",
        contact: {
        name: "API Support",
        email: "g.dolle12@gmail.com", 
        email: "mkarmensky@gmail.com"
        }
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic"
        },
        BearerAuth: {
            type: "http",
            scheme: "bearer"
        }
    },
    swaggerUIPath: "/api-docs", // URL where SwaggerUI will be rendered
    baseDir: __dirname, // Base directory which we use to locate your JSDOC files
    filesPattern: "./**/*.js", // Global pattern to find our jsdoc files (multiple patterns can be added in an array)
    exposeSwaggerUI: true // Expose OpenAPI UI

};

expressJSDocSwagger(app)(options);

/**
 * A newUser
 * @typedef {object} newUser
 * @property {string} firstname.required - The firstname
 * @property {string} lastname.required - The lastname
 * @property {string} nickname.required - The nickname
 * @property {string} mail.required - The email
 * @property {string} password.required - The password
 */

/**
 * A User
 * @typedef {object} User
 * @property {integer} id - the id
 * @property {string} firstname - The firstname
 * @property {string} lastname - The lastname
 * @property {string} nickname - The nickname
 * @property {string} mail - The email
 * @property {string} password - The password
 * @property {integer} trophies - Number of trophies
 * @property {integer} honor_point -  behavior score
 * @property {string} team - The team
 * @property {string} role - The role
 * @property {timestamptz} created_at - The timestamp with timezone when user profile was created
 * @property {timetsamptz} updated_at - The timestamp with timezone when user profile is updated
 * }
*/

/**
 * An AccessToken
 * @typedef {string} AccessToken
 */

/**
 * A RefreshToken
 * @typedef {string} RefreshToken
 */

/** ********* */
/*  EXPRESS */
/** ******** */

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;