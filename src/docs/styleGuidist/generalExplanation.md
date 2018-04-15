ASK TAL!!! Customizable  [link](https://github.com/styleguidist/react-styleguidist/tree/46915af6eda1743eb5f82b785b57e4c7de70facc/examples/customised).

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! 

> In another moment down went Alice after it, never once considering how in the world she was to get out again.

Text attributes: _italic_, **bold**, `monospace`.

Bullet list:

* coffee
* croissant

Numbered list:

1. coffee
2. croissant

Nested list:

* coffee
* food
  1. croissant
  1. pizza
* dog

List with checkboxes:

* [x] Coffee
* [x] Croissant
* [ ] Pizza

Table:

| Foo | Bar |
| --- | --- |
| 1   | 2   |

A [link](http://example.com).

---

![React](http://morning.photos/photos/thumb/2014-09-27-3218-thumb.jpg)

```js static
function eatFood(food) {
    if (!food.length) {
        return ['No food'];
    }

    return food.map(dish => `No ${dish.toLowerCase()}`);
}

const food = [
  'Pizza',
  'Buger',
  'Coffee',
];
console.log(eatFood(food));
```
