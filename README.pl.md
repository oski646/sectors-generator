# Generator sektorów
Prosta wtyczka stworzona dla ludzi, którzy chcą wygenerować interaktywną mapę sektorów.

### Pobierz
[sectors.js](https://raw.githubusercontent.com/oski646/sectors-generator/main/sectors.js)

### Obiekt sektora

`name` String (wymagane)\
`corners` [{ x: Number, y: Number }, { x: Number, y: Number }] (wymagane)\
`color` HEX/RGB (wymagane)\
`tps` Number (opcjonalne)\
`online` Number (opcjonalne)\
`text` { offsetX: Number, offsetY: Number } (opcjonalne)

<details>
    <summary>Przykład</summary>
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

### Konfiguracja

`canvasID` String (wymagane)\
`mapBorder` Number (wymagane)\
`highlightColor` HEX/RGB (wymagane)\
`tps` Number (opcjonalne)\
`online` Number (opcjonalne)\
`text` { offsetX: Number, offsetY: Number } (opcjonalne)

<details>
    <summary>Przykład</summary>
    <p>

    {
        canvasID: "sectors",
        mapBorder: 3000,
        highlightColor: 'rgba(255, 255, 255, 0.25)',
    }
</details>

### Inicjalizacja
### `initSectors(sectors, callback, config);`

`sectors` - lista z obiektami sektorów\
`callback` - funkcja, która zwraca argumenty `event`, `sector` i `coordinates`\
`config` - konfiguracja

### Przykład
Tutaj możesz sprawdzić jak wtyczka działa. https://oski646.github.io/sectors-generator/
