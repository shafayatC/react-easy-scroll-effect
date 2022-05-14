# react-easy-scroll-effect

[![ReactJs][react-image]][react-url]
[![Download Count][download-image]][download-url]
[![GitHub license][license-image]][license-url]

[react-image]: https://img.shields.io/badge/ReactJS-%5E16.x-blue
[react-url]: https://reactjs.org
[download-image]: https://img.shields.io/npm/dm/react-easy-scroll-effect?label=downlaod
[download-url]: https://www.npmjs.com/package/react-easy-scroll-effect
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/shafayatC/react-easy-scroll-effect/blob/main/LICENSE

Easy Scroll Element Effect Component for ReactJS<br>

- Just Two Elements will be used. (for element scroll effect)
- Support GPU Render, by default.
- Support SSR. ( server-side-rendering )
# Live demo

  ![demo gif](https://raw.githubusercontent.com/shafayatC/react-easy-scroll-effect/main/sample.gif)
  
  [`live demo link`](https://shafayatc.github.io/react-easy-scroll-effect/)

# Install

```
// npm
npm install --save react-easy-scroll-effect

// yarn
yarn add react-easy-scroll-effect
```

# Usage
##### example 1
```
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'

const App = () => {
  return (
    <div>
    
        <ScrollEffect>
          <h1> some text here</h1>
        </ScrollEffect>

    </div>
  );
}
```

##### example 2 (with options)
```
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'

const App = () => {
  return (
    <div>

        <ScrollEffect offset = {200} duration={2} animateOut={true}>
          <h1> some text here</h1>
        </ScrollEffect>

    </div>
  );
}
```


If You want to see more detail source,<br>

- [`example/App.js`](https://github.com/shafayatC/react-easy-scroll-effect)<br>

# Props

|        Name         |    Type    |  Required  | Description                                                                                                                                                       | Default   |
| :-----------------: | :--------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
|      **offset**      |  `Number`  | `Optional` | The "viewport" is from the top and bottom of the screen Width                                                                                                                                                |   150 pixels         |
|     **duration**      |  `Number`  | `Optional` | Animation duration in seconds. |     1 second      |
|     **animateOut**      |  `Boolean`   | `Optional` |  Animation out stop    |      false     | 




# License
MIT © [shafayatC](https://github.com/shafayatC)
