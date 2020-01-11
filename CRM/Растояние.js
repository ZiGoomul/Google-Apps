/**
 * Вычисление растояния и времени в пути.
 *
 * @param {startAdress} startAdress Начальная точка.
 * @param {endAdress} endAdress Конечная точка
 * @param {returnType} returnType Расстояние или Время.
 * @customfunction
 */

function COOGLEMAPS(startAdress, endAdress, returnType) {

	var mapObj = Maps.newDirectionFinder()

	mapObj.setOrigin(startAdress)
	mapObj.setDestination(endAdress + ", Киев")
	var direction = mapObj.getDirections()
	var getTheLeg = direction["routes"][0]["legs"][0]

	switch (returnType) {
		case "Расстояние":
			var distanse = getTheLeg["distance"]["value"]
			return (distanse / 1000).toFixed(2) + " Километров"
			break;
		case "Время":
			var duration = getTheLeg["duration"]["value"]
			return (duration / 60).toFixed(1) + " минут"
			break;
		default:
			return "Не верний тип данных"
	}

}

