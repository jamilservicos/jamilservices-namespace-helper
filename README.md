### <span id="jamilservices-namespace-helper">@jamilservices/namespace-helper</span>
#### Personal namespace help module for javascript.
#
## Table of Contents
- [Examples](https://github.com/jamilservicos/jamilservices-namespace-helper/tree/main/examples/)
- [Installation ways](#installation-ways)
- [Important Upgrade Notice for Version 1.0.0](#upgrade-notice)
- [License](#license)
- [Technologies](#technologies)
#
#### <span id="installation-ways">Installation ways:</span>
[(go to top)](#jamilservices-namespace-helper)

###
- from github:
~~~bash
npm install --save git+https://github.com/jamilservicos/jamilservices-namespace-helper.git
yarn add git+https://github.com/jamilservicos/jamilservices-namespace-helper.git
~~~
###
- from npm:
~~~bash
npm install --save @jamilservices/namespace-helper
yarn add @jamilservices/namespace-helper
~~~    
#
### <span id="upgrade-notice">Important Upgrade Notice for Version 1.0.0</span>
[(go to top)](#jamilservices-namespace-helper)

If you're updating to version 1.0.0 of @jamilservices/types-helper, please be aware of the following requirements and recommendations:

**Node.js Version Requirement:**

Version 1.0.0 of @jamilservices/types-helper is designed to work with Node.js versions 20.10 or higher. Ensure that your environment is running a compatible version of Node.js to avoid any compatibility issues.

**Migrating from Version 0.1.2:**

If you're migrating from version 0.1.2, it's crucial to carefully review and implement the necessary updates and adaptations for version 1.0.0. This version includes significant changes that may affect how you use the library.

**Why Upgrade?**

Upgrading to version 1.0.0 brings you the latest features, performance improvements, and bug fixes. We strongly recommend updating to enhance your application's functionality and security.

**Need Help?**

Should you face any challenges or have queries about transitioning to version 1.0.0, we are here to help. For further assistance or to report any issues, please visit our issues page where you can submit queries and report problems.

Your feedback is invaluable in helping us refine and enhance @jamilservices/types-helper.

#
#### <span id="import-module">Import module</span>
[(go to top)](#jamilservices-namespace-helper)

~~~javascript
 require("@jamilservices/namespace-helper")();
~~~   

or

~~~javascript
 const customVariableName = require("@jamilservices/namespace-helper");
customVariableName();
~~~   

or

~~~javascript
 import customVariableName from "@jamilservices/namespace-helper";
customVariableName();
~~~   
#

### Object Parameters:   

* **mut:** *if set to "true", it will activate the mutability of stores. default: false*

```javascript
require("@jamilservices/namespace-helper")({
    mut: true
});
```     

* **prefix:** *if configured, will override the default trigger. default: ns*

```javascript
require("@jamilservices/namespace-helper")({
    prefix: 'nameSpacePrefixExample'
});
```   

* **isolate:** *if set to "true", will only create a local instance, without automatically setting it to global. default: false*

```javascript
require("@jamilservices/namespace-helper")({
    isolate: true
});
```   
#
### Object Methods:   

* **deps:** **organize all dependencies for injection.**

```javascript
nameSpacePrefixExample.deps("testDepencyName", (test) => {
    console.log("testDepencyName deps:", test);
});
nameSpacePrefixExample.deps("testDepencyName")("testString");
```  

* **storage:** **organizes all variables for global access.**

```javascript
nameSpacePrefixExample.storage("testGeneralName", "only one test");
console.log(nameSpacePrefixExample.storage("testGeneralName"));
```  

* **settings:** **organizes all settings for global access.**   

```javascript
nameSpacePrefixExample.settings("testApiKeyFromEnv", process.env.TESTAPIKEY);
console.log(nameSpacePrefixExample.settings("testApiKeyFromEnv"));
```  

* **show:** **overview of all stores saved in the namespace**   

```javascript
nameSpacePrefixExample.show();
```  

#
### <span id="license">License</span>
[(go to top)](#jamilservices-namespace-helper)

Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).
* You can freely modify and reuse.
* The original license must be included with copies of this software.
* Please link back to this repo if you use a significant portion the source code.

#
### <span id="technologies">👩‍💻💻 Technologies</span>
[(go to top)](#jamilservices-namespace-helper)

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
#
