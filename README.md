# ziffy

### Install as binary:

````
git clone https://github.com/unenglishable/ziffy.git
cd ziffy
npm install -g
````

###package.json

````
{
...
  "dependencies": {
    ...
    "ziffy": "git://github.com/unenglishable/ziffy",
    ...
  }
...
}

````

## Usage

````
var ziffy = require('ziffy');

ziffy.convert('Hello World');

...

ziffy.transform(someStream).pipe(process.stdout);
````
