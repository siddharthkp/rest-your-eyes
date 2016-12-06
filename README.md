### Rest your eyes while your command runs

Instead of opening twitter/reddit, rest your eyes!

Your screen will become bright again when the command finishes.

![rest your eyes](https://raw.githubusercontent.com/siddharthkp/rest-your-eyes/master/demo-install.gif)

#### Install

`npm install -g rest-your-eyes`

Expects node >= 4.6.2

#### Usage

Run your commands prefixed with `rest`.

Example

`rest npm install`

`rest npm test`

`rest gulp build`


Or add it to `package.json`:

```json
"scripts": {
  "test": "rest ava",
  "build": "rest babel src -d lib"
}
```

#### Credits

Kudos to [Kevin Mårtensson](https://github.com/kevva) for [brightness](https://github.com/kevva/brightness) ☀️
