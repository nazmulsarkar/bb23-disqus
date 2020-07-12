# Running the API (disqus-api folder)

> Go to root project folder (disqus-api)

    $ cd <project-root>
    $ yarn install -d
    # development
    $ yarn run start

    # watch mode
    $ yarn run start:dev

    # incremental rebuild (webpack)
    $ yarn run webpack
    $ yarn run start:hmr

    # production mode
    $ yarn run start:prod


# Nuxt on VueJS client (disqus folder)

    # install dependencies
    # Go to root project folder (disqus)
    $ cd <project-root>
    $ yarn install -d

    # serve with hot reload at localhost:3000
    $ yarn dev

    # build for production and launch server
    $ yarn build
    $ yarn start

    # generate static project
    $ yarn generate
