//your JS code here. If required.
function daysOfAYear(year){
	let isLeap = false;
	if(year % 4 === 0){
		//this may be a leap year
		if(year % 100 ===0){
			//centuary year
			return year % 400 ===0 ? 366 : 365;
		}
		return 366;
	}
	return 365;
}