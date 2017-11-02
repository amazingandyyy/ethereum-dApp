# React Redux Daap (Ready for Ethereum)

## Usage
```
git clone https://github.com/amazingandyyy/react-redux-daap.git
npm install
npm run dev
<!-- open browser http://localhost:5000 -->
```

## production build & run
```
npm run build && npm run start
```

## React
Clone from my [this repo](https://github.com/amazingandyyy/react-restart)

## Ethjs
Add Ethjs to the project, you can find Eth in state and use it as web3.eth.
### Sample Usage
check the file of about component, as following
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

const About = (props) => {
	console.log(props.Eth);
	return (
		<div>
			Current provider: {props.Eth.currentProvider.host}
		</div>
	)
};

export default connect(({ Eth }) => ({ Eth }), null)(About);

```

## Versions
Library |   version
---     |   ---
react   |   v16.0.0
redux   |   v3.7.1
ethjs   |   v0.3.0
react-router | v4.2.2
babel-preset-es2017 | 6.24.1
webpack | v3.6.0

## About usage of web3 and ethjs
- check official [wiki](https://github.com/ethereum/wiki/wiki/JavaScript-API) or [docs](https://web3js.readthedocs.io/en/1.0/web3-eth.html) for web3js
- check official repo for [ethjs](https://github.com/ethjs/ethjs)

## License
🍺 [MIT](https://github.com/amazingandyyy/react-redux-daap/blob/master/LICENSE)