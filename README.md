# TailwindCSSX

Group TailwindCSS classnames

Tried of managing ungrouped tailwindcss classnames.

Use TailwindCSSX to group tailwindcss classnames.

## Usage
Using Array

```jsx
import twx from "tailwindcssx";

export default const App = () => {
    return (
        <div className={twx([
            'border-red-100',
            'text-sm'
        ])}>
            Group classnames
        </div>
    )
}

/* 
result classname: 'border-red-100 text-sm'
*/
```

You can use array in an array

```jsx
import twx from "tailwindcssx";

export default const App = () => {
    return (
        <div className={twx([
            ['border-red-500', 'text-sm'],
            ['text-red-400', 'font-semibold'],
        ])}>
            Multiple Groups
        </div>
    )
}

/*
result classname: 'border-red-500 text-sm text-red-400 font-semibold'
*/
```

You can disable or enable groups with variables
```jsx
import twx from "tailwindcssx";

export default const App = ({theme}) => {
    return (
        <div className={twx([
            'font-semibold',
            theme === "red" && ['border-red-500', 'text-sm'],
            theme === "blue" && ['border-blue-500', 'text-md'],
        ])}>
            Multiple Groups with conditions.
        </div>
    )
}

/*
result classname: 
if theme === 'red': 'font-semibold border-red-500 text-sm'
if theme === 'blue: 'font-semibold border-blue-500 text-md'
*/
```

You can have separate group for each variant using object syntax
```jsx
import twx from "tailwindcssx";

export default const App = () => {
    return (
        <div className={twx({
            '': [
                'border-red-500', // with no separator
            ],
            hover: [
                'border-blue-500',
            ],
            md: {
                '': [
                    'text-red-600'
                ],
                hover: [
                    'text-green-600',
                    'text-sm'
                ]
            }
        })}>
            Object Grouping
        </div>
    )
}

/*
result classname: 'border-red-500 hover:border-blue-500 md:text-red-600 md:hover:text-green-600 md:hover:text-sm'
*/
```

If you have a custom separator other than default separator ':'.

```jsx
// twx.js
import twx from "tailwindcssx";

export default (classNames) => {
    return twx(classNames, '', '_'); // last argument is the separator
}
```

```jsx
import twx from "./twx";

export default const App = () => {
    return (
        <div className={twx({
            '': [
                'border-red-500', // with no separator
            ],
            hover: [
                'border-blue-500',
            ],
            md: {
                '': [
                    'text-red-600'
                ],
                hover: [
                    'text-green-600',
                ]
            }
        })}>
            With Custom Separator
        </div>
    )
}

/*
result classname: 'border-red-500 hover_border-blue-500 md_text-red-600 md_hover_text-green-600 md_hover_text-sm'
*/
```
