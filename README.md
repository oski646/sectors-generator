# Generator sektorów
Prosta wtyczka stworzona dla osób, które chcą na swojej stronie internetowej generować interaktywną mapę sektorów.

### Jak wrzucić to na swoją stronę?
1. Pobierz [wtyczkę](https://raw.githubusercontent.com/oski646/sectors-generator/main/script.js).
2. Podepnij ją na dole w body: `<script src="sectors.js"></script>`

### Obiekt z sektorem
```
{
    name: "S1", <-- nazwa sektora [wymagana]
    corners: [
        {
            x: -1500,
            y: -1500
        },
        {
            x: -225,
            y: 150,
        }
    ], <-- lista z dwoma naprzeciwległymi rogami sektora [wymagane]
    color: 'rgba(0, 0, 0, 0.75)', <-- kolor sektora [wymagane]
    highlighted: false, <-- czy sektor jest podświetlony (zostawić to na false) [wymagane]
    tps: 19.98, <-- ilość tpsów na danym sektorze [opcjonalne]
    online: 152, <-- ilość osób online na danym sektorze [opcjonalne]
    text: {
        offsetX: -19, <-- offsetX na położenie tekstu na sektorze
        offsetY: 4 <-- offsetY na położenie tekstu na sektorze
    }, [opcjonalne]
    nestedSectors: [
        {
            name: "SPAWN01",
            tps: 19.29,
            online: 152,
        },
        {
            name: "SPAWN02",
            tps: 19.29,
            online: 152,
        },
        {
            name: "SPAWN03",
            tps: 19.29,
            online: 152,
        },
        {
            name: "SPAWN04",
            tps: 19.29,
            online: 152,
        }
    ], <-- sektory niewyświetlane na canvasie ale dostępne w funkcji [opcjonalne]
},
```

### Konfiguracja
```
{
    canvasID: "sectors", <-- identyfikator canvasu na stronie
    mapBorder: 3000, <-- border mapy w minecraftcie
    highlightColor: 'rgba(255, 255, 255, 0.25)', <-- kolor podświetlanego sektora
    defaultOffset: {
        text: { x: -7, y: 5 }, <-- domyślny offset nazwy sektora
        tps: { x: -27, y: 18 } <-- domyślny offset wyświetlanych tpsów sektora
    }
}
```

### Inicjalizacja
### `initSectors(sectors, callback, config);`

`sectors` - lista z obiektami sektorów

`callback` - funkcja, która zwraca argumenty `event`, `sector` i `coordinates`

`config` - konfiguracja

<sup>Inicjalizacja może nastąpić tylko po podpięciu wtyczki.</sup>

### Przykład
Chcesz zobaczyć wtyczkę w akcji? Zajrzyj na [stronę](https://oski646.github.io/sectors-generator/) i podejrzyj źródło strony.