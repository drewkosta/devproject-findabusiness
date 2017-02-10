## The Development Exercise

### Overview
Thanks for your interest in Waymark! The development team will use this exercise to help determine if you may be a suitable candidate for the position. Please spend no more than **8 hours** completing this project.

### Description
Build an application that allows a user to search for a business using a business name, business phone number, and business zip code. To submit a search, the user should be required to provide a zip code, as well as either a phone number or a business name (or  both).

On search, identify the business, and then display to the user a set of information related to that business:
- The business name, phone number, email, address, and industry/category
- Up to 5 photos that best represent the business
- For each photo, display one or more tags that describe its contents (e.g. 'dog', 'hamburger', 'wombat')
- Five sample ad headlines for the business, featuring the business info
    - E.g. if the returned business was `Astro Coffee; (313) 808-0351; astrocoffee@gmail.com; 1234 Main St. Detroit, MI; coffee shops`, your headlines might be:
      - 'Check out Astro Coffee, the best coffee shop in Detroit'
      - 'Detroit's best coffee shot -- call (313) 808-0351'
      - 'Check out Astro Coffee and join our mailing list! Write astrocoffee@gmail.com'
      - Etc.

### 3rd Party Requirements
  - Use the [Google Places API](https://developers.google.com/places/web-service/) to search for a business, retrieve business info, and find business photos.
    - Call format
      - `https://maps.googleapis.com/maps/api/place/[service]/json?[params]`
    - Services
      - Text search: `/textsearch`
        - E.g., `https://maps.googleapis.com/maps/api/place/textsearch/json?key=[KEY]&query=[query]`
      - Details: `/details`
        - E.g., `https://maps.googleapis.com/maps/api/place/details/json?key=[KEY]&placeid=[place_id]`
      - Photo: `/photo`
        - E.g., `https://maps.googleapis.com/maps/api/place/photo?key=[KEY]&photoreference=[photoreference]`
    - API Credentials
      - API Key: `AIzaSyBfmjsT-RvKxn7in_6OEkfFdNlFWqoV73s`
  - Use the [Clairifai API](https://developer.clarifai.com/quick-start/) to tag images based on their content.
    - As discussed below, the Javascript library has been pre-installed if you want to use it.
    - API Credentials
      - App Id: `NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe`
      - App Secret: `c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9`

### Deliverable
Upon completion, please send us a link to your copy of this repository (preferably on GitHub). Please do not fork the repo; instead, follow these steps:

- Clone this repository
  - E.g. `git clone https://github.com/stikdev/devproject-findabusiness.git`
- Create an empty GitHub repository
  - E.g. `https://github.com/your-user-name/devproject-findabusiness.git`
- Add a remote to your empty repository
  - E.g. `git remote add my-origin https://github.com/your-user-name/devproject-findabusiness.git`
- Then you should be able to commit your changes and push them up to your repository
  - E.g. `git push my-origin master`

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

By default, the core of the application runs through `src/main.js`. Within `main.js`, we've provided a few examples of the configurations available to you, ranging from bare-bones JS, to CoffeeScript+React, to AngularJS. Uncomment any of the examples in `main.js` to see them in action.

To start:

1. In one terminal session `npm run watch` to compile the JS/CSS. This will compile `src/main.js` into `dist/js/main.bundle.js`, and then re-compile when any changes are made.
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
  - CJSX
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

## Questions?
If you have any questions or issues, please feel free to reach out to anyone on the team, or simply ping us at [tech@waymark.com](mailto:tech@waymark.com). Go Wombats!
