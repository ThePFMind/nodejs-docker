Nodeclub
=

[![build status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]

[travis-image]: https://img.shields.io/travis/cnodejs/nodeclub.svg?style=flat-square
[travis-url]: https://travis-ci.org/cnodejs/nodeclub
[coverage-image]: https://img.shields.io/coveralls/cnodejs/nodeclub.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/cnodejs/nodeclub?branch=master
[david-image]: https://img.shields.io/david/cnodejs/nodeclub.svg?style=flat-square
[david-url]: https://david-dm.org/cnodejs/nodeclub
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

## Introduction

Nodeclub is to use ** Node.js ** and ** MongoDB ** developed community system, elegant interface, feature-rich, compact and fast,
Chinese technical community has Node.js [CNode (http://cnodejs.org)] (http://cnodejs.org) has been applied, but you can use it to build their own communities.

## Installation and deployment

* Windows system does not guarantee compatibility *

Line running is Node.js v1.5, MongoDB is v2.6, Redis is v2.8.9.

```
1. Install `node.js [must]` `mongodb [must]` `redis [must]`
2. Start mongodb and redis
3. `$ make install` installation dependencies Nodeclub
4. `cp config.default.js config.js` modify the configuration files as needed
5. `$ make test` to ensure that the services are normal
6. `$ node app.js`
7. visit `localhost: 3000`
8. done!
```
or
```
1. Install Node VagrantBox
$ git clone https://github.com/semmypurewal/node-dev-bootstrap.git [my_project]
* update Vagrantfile to enable Radis
$ vagrant up

2. Copy project to [my_project]/app/
$ git clone https://pitchaya@bitbucket.org/thepfmind_tm/carload-forum-nodejs.git app

3. Access VagrantBox
$ vagrant ssh

4. Install CNodejs
`[vbox]$ make install` installation dependencies Nodeclub
`[vbox]cp config.default.js config.js` modify the configuration files as needed
`[vbox]$ make test` to ensure that the services are normal

5. Run app
`[vbox]$ node app.js`
visit `localhost: 3000`
```

## Test

Running the test

`` `bash
$ Make test
`` `

Coverage test run

`` `bash
$ Make test-cov
`` `

## Contributions

Have any comments or suggestions are welcome lift issue, or direct reference to [alsotang] (https://github.com/alsotang)

## License

MIT
