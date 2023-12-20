# Discord userspy
![preview](https://github.com/Nevesto/discord-userspy/assets/87545167/0d75ec35-e4f4-4cb0-8d0f-6d9d11f612da)

## About

This is a simple tool to spy members you don't have on friends list.

## Instalation

````
    Git clone https://github.com/Nevesto/discord-userspy.git
````

<br />


````
    cd discord-userspy
````

<br />

````
    npm i
````

## Usage

You need to get your discord account token and put on your .env file. Like is on .env.example.

<br />

- Use this code to get your discord token if you don't know how do this already. 

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

<br />

And use this command to start the tool:

````
    ts-node index.ts
````
<br />

*If you don't have "ts-node" you can use this command to download globbaly:

````
    npm i -g ts-node
````

<br />

### Todo

- Real time monitorament.
- Nickname Spy.
- Profile pics and banner scraper.