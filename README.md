### @jamilservices/namespace-helper  
#### Personal namespace help module for javascript.

[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/)
[![Made with JavaScript](https://img.shields.io/badge/Made_with-JavaScript-blue?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![Made with Node.js](https://img.shields.io/badge/Node.js->=14-blue?logo=node.js&logoColor=white)](https://nodejs.org)
[![npm - @jamilservices/namespace-helper](https://img.shields.io/badge/npm-%40jamilservices%2Fnamespace--helper-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/namespace-helper)
[![yarn - @jamilservices/namespace-helper](https://img.shields.io/badge/yarn-%40jamilservices%2Fnamespace--helper-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/package/@jamilservices/namespace-helper)

[![jamilservicos - jamilservices-namespace-helper](https://img.shields.io/static/v1?label=jamilservicos&message=jamilservices-namespace-helper&color=blue&logo=github)](https://github.com/jamilservicos/jamilservices-namespace-helper)
[![stars - jamilservices-namespace-helper](https://img.shields.io/github/stars/jamilservicos/jamilservices-namespace-helper?style=social)](https://github.com/jamilservicos/jamilservices-namespace-helper)
[![forks - jamilservices-namespace-helper](https://img.shields.io/github/forks/jamilservicos/jamilservices-namespace-helper?style=social)](https://github.com/jamilservicos/jamilservices-namespace-helper)
[![issues - jamilservices-namespace-helper](https://img.shields.io/github/issues/jamilservicos/jamilservices-namespace-helper)](https://github.com/jamilservicos/jamilservices-namespace-helper/issues)
[![GitHub release](https://img.shields.io/github/release/jamilservicos/jamilservices-namespace-helper?include_prereleases=&sort=semver)](https://github.com/jamilservicos/jamilservices-namespace-helper/releases/)

[![Libraries.io - @jamilservices/namespace-helper](https://img.shields.io/badge/Libraries.io-%40jamilservices%2Fnamespace--helper-blue?logo=Libraries.io&logoColor=white)](https://libraries.io/npm/@jamilservices%2Fnamespace-helper)
[![Libraries.io SourceRank, scoped npm package](https://img.shields.io/librariesio/sourcerank/npm/@jamilservices/namespace-helper?logo=Libraries.io&logoColor=white&color=sucess)](https://libraries.io/npm/@jamilservices%2Fnamespace-helper)
[![Rate on Openbase](https://badges.openbase.com/js/rating/@jamilservices/namespace-helper.svg)](https://openbase.com/js/@jamilservices/namespace-helper?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

![npm (custom registry)](https://img.shields.io/npm/v/@jamilservices/namespace-helper/latest?registry_uri=https%3A%2F%2Fregistry.npmjs.com&logo=npm)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/@jamilservices/namespace-helper/latest?logo=npm)
![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/@jamilservices/namespace-helper/latest?logo=npm)
![npm downloads](https://img.shields.io/npm/dt/@jamilservices/namespace-helper.svg?logo=npm&label=total%20downloads)

[![CodeQL](https://github.com/jamilservicos/jamilservices-namespace-helper/workflows/CodeQL/badge.svg)](https://github.com/jamilservicos/jamilservices-namespace-helper/actions?query=workflow:"CodeQL")
[![Known Vulnerabilities](https://snyk.io/test/github/jamilservicos/jamilservices-namespace-helper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jamilservicos/jamilservices-namespace-helper?targetFile=package.json "Known Vulnerabilities")

![Maintained - yes](https://img.shields.io/badge/Maintained-yes-green)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/jamilservicos/jamilservices-namespace-helper/blob/main/LICENSE)


#### Installation ways:  
- from github:
```
npm install --save git+https://github.com/jamilservicos/jamilservices-namespace-helper.git
yarn add git+https://github.com/jamilservicos/jamilservices-namespace-helper.git
```
- from npm:
```
npm install --save @jamilservices/namespace-helper
yarn add @jamilservices/namespace-helper
```

> ### ns commands:    
>```
>ns[method]('name', target); 
>```  
>**methods**  
> * **deps:** **organize all dependencies for injection.**  
> * **storage:** **organize all variables for global access.**  
> * **settings:** **organize all settings for global access.**  
> * **show:** **overview of all globals saved in namespace**  
>  

> ### Object Parameters:  
>**mut:** *if set to "true" it will enable variable mutability. default: false*  
>```
>mut: true
>```  

#### Simple Usage Example:  
~~~javascript
"use strict";
require("@jamilservices/namespace-helper")({});

ns.storage("end", "the test was a success!");
console.log(ns.storage("end"));
~~~  

#### [See more examples of use on examples folder](https://github.com/jamilservicos/jamilservices-namespace-helper/blob/main/examples/README.md)

### License  
Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).  
* You can freely modify and reuse.
* The original license must be included with copies of this software.
* Please link back to this repo if you use a significant portion the source code.


### 👩‍💻💻 Technologies
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)

### 💲 Donate
![Bitcoin](https://img.shields.io/badge/1BrKxKsspVs3uR1ctAPfudLY38Tdw6yU3R-000000?style=for-the-badge&label=BTC&color=F7931A&labelColor=black)
![Dogecoin](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-C2A633?style=for-the-badge&label=DOGE&color=C2A633&labelColor=black)
![Tron](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-f60614?style=for-the-badge&label=TRX&color=f60614&labelColor=black)
![Waves](https://img.shields.io/badge/3PQA4gjdQJcSzHhxZLbdhoWjkjrFEXmTqqw-1c55ce?style=for-the-badge&label=WAVES&color=1c55ce&labelColor=black)
