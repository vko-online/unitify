# unitify

> Convert CSS units: `120px` → `37vh, 1.25in, 7.5pc, 90pt, 35.08vh, 7.16vmax, 35.08vmin, 7.16vw`


## Install

```
$ bower install --save css-unitify
```


## Usage

```js

unitify(120) // same as unitify('120px')
//=> {"raw":120,"vmin":35.08771929824562,"vmax":7.164179104477612,"vh":35.08771929824562,"vw":7.164179104477612,"in":1.25,"pt":90,"pc":7.5}


unitify('100vw')
//=> {"raw":100,"px":"1675px","vmin":489.766081871345,"vmax":100,"vh":489.766081871345,"in":17.447916666666668,"pt":1256.25,"pc":104.6875}

var newValue = unitify('1000pt');
//=> {"raw":1000,"px":"750px","vmin":219.2982456140351,"vmax":44.776119402985074,"vw":44.776119402985074,"vh":219.2982456140351,"in":7.8125,"pc":46.875}
newValue.vmax.toFixed(3);
//=> "44.776"
```

Values converted between commonly used unit measures. Behind the scenes uses `document viewPort` size for `vh, vw, vmin, vmax` units.

Supported units
> px, vh, in, pc, pt, vh, vmax, vmin, vw


## API

### unitify(value)

Convert values between unit measures from http://www.w3schools.com/cssref/css_units.asp

#### value

Type: `number|string`

## Contribution

Very open for contributions.


## License

MIT © [Medet Tleukabiluly](http://github.com/vko-online)
