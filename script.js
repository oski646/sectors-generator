function initSectors(sectors, callback, config = {
    canvasID: null,
    mapBorder: 1000,
    highlightColor: 'rgba(255, 255, 255, 0.25)',
    defaultOffset: {
        text: {
            x: -7,
            y: 5
        },
        tps: {
            x: -27,
            y: 18
        }
    }
}) {
    // Canvas variables
    const canvas = document.getElementById(config.canvasID)
    const ctx = canvas.getContext("2d")

    if (config.canvasID == null) {
        throw new Error("Unable to init sectors. (canvasID is null)")
    }

    if (canvas.width !== canvas.height) {
        throw new Error("Unable to init sectors. (width should be equal to height)")
    }

    // Global variables
    const sizeRatio = (config.mapBorder / canvas.width)
    let foundSector = null

    // Canvas init
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    (function drawCanvas() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw each sector
        sectors.forEach(sector => {
            drawSector(sector, "rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)")
        });

        requestAnimationFrame(drawCanvas)
    })()

    // Mouse cursor position
    function getCursorPosition(event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return {
            x,
            y
        }
    }

    document.addEventListener("mousemove", (event) => {
        // Cursor position
        const {
            x,
            y
        } = getCursorPosition(event)

        // Find matching sector to cursor position
        const tempFoundSector = sectors.find((sector, index) => {
            const {
                x: startX,
                y: startY
            } = getCanvasPoint(sector.corners[0])
            const {
                x: endX,
                y: endY
            } = getCanvasPoint(sector.corners[1])
            if ((x >= startX && x <= endX) && (y >= endY && y <= startY)) {
                // Highlight found sector
                sectors[index].highlighted = true
                return sector
            }
        })

        if (tempFoundSector == null) {
            if (foundSector != null) {
                // Unhighlight last found sector
                sectors[sectors.indexOf(foundSector)].highlighted = false
            }
            foundSector = null
            callback(event, foundSector)
            return
        }

        // Sector changing
        if (foundSector != null && (foundSector.name !== tempFoundSector.name)) {
            // Unhighlight last highlighted sector
            sectors[sectors.indexOf(foundSector)].highlighted = false
        }
        foundSector = tempFoundSector
        callback(event, foundSector)
    })

    // Cartesian to canvas points translation
    function getCanvasPoint(point) {
        const {
            x,
            y
        } = point;
        return {
            x: getCanvasX(x),
            y: getCanvasY(y)
        }
    }

    function getCanvasX(x) {
        return (x / 2 / sizeRatio) + (canvas.clientWidth / 2)
    }

    function getCanvasY(y) {
        return (canvas.clientWidth / 2) - (y / 2 / sizeRatio)
    }

    function drawSector(sector, borderColor, fontColor) {
        // Get sector's starting corner
        const {
            x,
            y
        } = getCanvasPoint(sector.corners[0])

        const vector = [getCanvasX(sector.corners[1].x) - getCanvasX(sector.corners[0].x), getCanvasY(sector.corners[1].y) - getCanvasY(sector.corners[0].y)]

        // Sector's background
        ctx.fillStyle = sector.color
        ctx.fillRect(x, y, vector[0], vector[1])

        // Highlighted background
        if (sector.highlighted) {
            ctx.fillStyle = config.highlightColor
            ctx.fillRect(x, y, vector[0], vector[1])
        }

        // Sector's border
        ctx.strokeStyle = borderColor
        ctx.strokeRect(x, y, vector[0], vector[1])

        // Sector's name
        if (sector.hasOwnProperty("name")) {
            ctx.fillStyle = fontColor
            ctx.font = "11px Arial";
            ctx.fillText(sector.name, x + (vector[0] / 2) + (sector.hasOwnProperty("text") ? sector.text.offsetX : config.defaultOffset.text.x), y + (vector[1] / 2) + (sector.hasOwnProperty("text") ? sector.text.offsetY : config.defaultOffset.text.y))
        }

        // Sector's tps
        if (sector.hasOwnProperty("tps")) {
            ctx.fillStyle = fontColor
            ctx.font = "11px Arial";
            ctx.fillText(sector.tps + " TPS", x + (vector[0] / 2) + (sector.hasOwnProperty("text") ? sector.text.offsetX - 7 : config.defaultOffset.tps.x), y + (vector[1] / 2) + (sector.hasOwnProperty("text") ? sector.text.offsetY + 13 : config.defaultOffset.tps.y))
        }
    }
}