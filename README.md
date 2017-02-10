## The Development Excercise

### Overview
Thanks for your interest in Waymark! The development team will use this exercise to help determine if you may be a suitable candidate for the position. Please spend no more than **8 hours** completing this project.

### Description
Build an application that allows a user to search for a business. Allow the user to search with a business name, business phone number, and business zip code. Business name or business phone number are required to submit a search.

On search, identify the business, and then display to the user a set of information related to that business:
* The business name, phone number, email, mailing address, and industry/category
* Up to 5 photos that best represent the business
* For each photo, display one or more tags that describe its contents (e.g. 'dog', 'hamburger', 'wombat')
* Five sample ad headlines for the business, featuring the business info (e.g. 'Nailzz, the best nail salon in Worcester!')
    - e.g.

### 3rd Party Requirements
  - [Clairifai API](https://developer.clarifai.com/quick-start/)
    - As discussed below, the Javascript library has been pre-installed if you want to use it.
    - API Credentials
      - App Id: `NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe`
      - App Secret: `c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9`

### Deliverable
Upon completion, please send us a link to your copy of this repository on (preferably on GitHub). We prefer you not use GitHub's forking because they are public by default.

For example:
- Clone this repository
  - e.g. `git clone https://github.com/stikdev/devproject-findabusiness.git`
- Create an empty GitHub repository
  - e.g. `https://github.com/your-user-name/devproject-findabusiness.git`
- Add a remote to your empty repository
  - e.g. `git remote add my-origin https://github.com/your-user-name/devproject-findabusiness.git`
- Then you should be able to commit your changes and push them up to your repository
  - e.g. `git push my-origin master`

## The Development Environment

### Requirements

- node LTS (v6)

### Installation

1. Clone this repository
2. Run `npm install` to install dependencies

### Scripts

- `npm run clean` will clean out the compiled code. Currently this is everything in `dist/js/`.
- `npm run build` will run a webpack build of the JS/CSS.
- `npm run watch` will run a webpack build of JS/CSS and watch for changes.
- `npm run serve` will serve up the `dist/` directory at `localhost:8080`.
- `npm run test` will run the unit tests.

### How It Works

By default, the core of the application runs through `src/main.js`. Within `main.js`, we've provided a few examples of the configurations available to you, ranging from bare-bones JS, to CoffeeScript+React, to AngularJS. Comment out any of the examples in `main.js` to see them in action.

To start:
1. In one terminal session `npm run watch` to compile the JS/CSS. This will both compile `src/main.js` into `dist/js/main.bundle.js` and re-compile if any changes are made.
2. In another terminal session `npm run serve` to serve up the `dist/` directory at `localhost:8080`.

By default, `localhost:8080` is configured to serve up `dist/index.html`, which runs the Javscript example within `dist/js/main.bundle.js`.

If you want to forego all of the Javascript bundling, feel free to simply store your JS/CSS within the `dist` directory.

### Out-of-the-Box Stuff

For your convenience, we've configured a bunch of stuff so you can feel as comfortable as possible with this exercise. Feel free to use (or not) any of them.

The following libraries have been pre-installed/configured:

- Bundling
  - [Webpack](https://webpack.js.org)
- Javascript Syntaxes
  - [CoffeeScript](http://coffeescript.org)
  - ES2015
  - JSX
- Javscript 'Frameworks'
  - [jQuery](https://jquery.com)
  - [React/ReactDOM](https://facebook.github.io/react/)
  - [Angular (1.6.x)](https://angularjs.org)
- Stylesheets
  - [SASS support](http://sass-lang.com)
  - [SASS Bootstrap](http://getbootstrap.com)
- Libraries/Utilities
  - [axios](https://github.com/mzabriskie/axios)
    - HTTP client
- Testing
  - [mocha](https://mochajs.org)
  - [chai](http://chaijs.com)
- 3rd Party Clients
  - [clarifai](https://developer.clarifai.com/quick-start/)
    - For use with the clairifai web API
