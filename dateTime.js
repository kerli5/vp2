const dayNamesEt = 	["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
const monthNamesEt 	=  ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];	
const dateFormattedEt = function(){
    //function dateFormatted()
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	return dateNow + ". " + monthNamesEt[monthNow] + " " + yearNow;
}

const weekDayEt = function (){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	return weekdayNamesEt[dayNow];
}

const timeFormattedEt = function() {
	timeNow = new Date();
	let hoursNow = timeNow.getHours();
	let minutesNow = timeNow.getMinutes();
	let secondsNow = timeNow.getSeconds();
	let hours = "." + hoursNow 	+ "." + minutesNow + "." + secondsNow;
	return hours;
}

const pratOfDay = function(){
	let dPart = "suvaline aeg";
	let hoursNow =  new Date().getHours();
	// > < >= <= != == ===
	if(hoursNow > 8 && hoursNow <= 16) {
		dPart = "kooliaeg";
}
    return dPart;
}

//ekspordin kõik vajaliku
module.export{dateFormattedEt: dateFormattedEt, weekDayEt: weekDayEt, timeFormattedEt: timeFormattedEt, weekdayNamesEt: weekdayNamesEt monthNamesEt: monthNamesEt, dayPart: partOfDay}