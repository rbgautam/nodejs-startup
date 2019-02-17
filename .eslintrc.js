module.exports = {
    "env": {
        "browser": true,
        "es6": false,
        "node": true,
        "mocha": true
    },
    "extends": ["eslint:recommended", "plugin:import/errors",
    "plugin:import/warnings"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 1
    }
};