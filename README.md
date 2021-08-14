# Sectors generator
A simple plugin created for people who want to generate an interactive map of sectors.

Wersja polska: [tutaj](https://github.com/oski646/sectors-generator/blob/main/README.pl.md)

### Download
[sectors.js](https://raw.githubusercontent.com/oski646/sectors-generator/main/sectors.js)

### Sector object

`name` String (required)\
`corners` [{ x: Number, y: Number }, { x: Number, y: Number }] (required)\
`color` HEX/RGB (required)\
`tps` Number (optional)\
`online` Number (optional)\
`text` { offsetX: Number, offsetY: Number } (optional)

<details>
    <summary>Example</summary>
    <p>

    {
        name: "S1",
        corners: [{ x: -1500, y: -1500 }, { x: -225, y: 150 }],
        color: 'rgba(0, 0, 0, 0.75)',
        tps: 19.98,
        online: 152,
        text: {
            offsetX: -19,
            offsetY: 4
        }
    }
</details>

### Configuration

`canvasID` String (required)\
`mapBorder` Number (required)\
`highlightColor` HEX/RGB (required)\
`tps` Number (optional)\
`online` Number (optional)\
`text` { offsetX: Number, offsetY: Number } (optional)

<details>
    <summary>Example</summary>
    <p>
    
    {
        canvasID: "sectors",
        mapBorder: 3000,
        highlightColor: 'rgba(255, 255, 255, 0.25)',
    }
</details>

### Initialization
### `initSectors(sectors, callback, config);`

`sectors` - list with sectors objects\
`callback` - callback function with `event`, `sector` and `coordinates`\
`config` - configuration

### Live example
Here you can test how plugin works. https://oski646.github.io/sectors-generator/
