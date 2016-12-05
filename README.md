### Rest your eyes while your command runs

Instead of opening twitter/reddit, rest your eyes!

Your screen will become bright again when the command finishes.

![rest your eyes](https://raw.githubusercontent.com/siddharthkp/rest-your-eyes/master/demo.gif)

#### Install

`npm install -g rest-your-eyes`

#### Usage

Run your commands prefixed with `rest`.

Example

`rest npm install`

`rest gulp build`

`rest git push`


Or add it to `package.json`:

```json
"scripts": {
  "test": "rest ava",
  "build": "rest babel src -d"
}
```
