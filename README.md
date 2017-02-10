[![Build Status](https://travis-ci.org/telemark/micro-status-saksbehandling-vigo.svg?branch=master)](https://travis-ci.org/telemark/micro-status-saksbehandling-vigo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-status-saksbehandling-vigo

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-status-saksbehandling-vigo.svg)](https://greenkeeper.io/)

Shows status for saksbehandling vigo

## API

### **/raw**

Returns json of unformatted data.

#### GET

```bash
$ curl https://vigo.saksbehandling.status.t-fk.win/raw
```

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://vigo.saksbehandling.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://vigo.saksbehandling.status.t-fk.win/html
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-saksbehandling-vigo.png "Robohash image of micro-status-saksbehandling-vigo")