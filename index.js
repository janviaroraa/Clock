window.onload = function () {
	setInterval(timeСhange, 1000)
};

function timeСhange() {


	const m_hour = document.querySelector("#hour");
	const m_minute = document.querySelector("#minute");
	const m_second = document.querySelector("#second");


	let today_date = new Date();
	let hours = today_date.getHours();
	let minutes = today_date.getMinutes();
	let seconds = today_date.getSeconds();
	if (hours >= 0 && hours <= 9)
		hours = "0" + hours;
	if (minutes >= 0 && minutes <= 9)
		minutes = "0" + minutes;
	if (seconds >= 0 && seconds <= 9)
		seconds = "0" + seconds;

	m_hour.innerHTML = hours;
	m_minute.innerHTML = minutes;
	m_second.innerHTML = seconds;


	const m_date = document.querySelector("#date");

	let date = today_date.getDate();
	let month = today_date.getMonth() + 1;
	let year = today_date.getFullYear();

	if (date >= 0 && date <= 9)
		date = "0" + date;
	if (month >= 0 && month <= 9)
		month = "0" + month;
	if (year >= 0 && year <= 9)
		year = "0" + year;

	m_date.innerHTML = `${date}.${month}.${year}`;


	const m_day = document.querySelector("#day");


	let number_of_day = today_date.getDay();
	let day_title = "";
	switch (number_of_day) {
		case 1: day_title = "Monday";
			break;
		case 2: day_title = "Tuesday";
			break;
		case 3: day_title = "Wednesday";
			break;
		case 4: day_title = "Thursday";
			break;
		case 5: day_title = "Friday";
			break;
		case 6: day_title = "Saturday";
			break;
		case 0: day_title = "Sunday";
			break;
	}

	m_day.innerHTML = day_title;
}