const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const teenthDays = [13, 14, 15, 16, 17, 18, 19];

function getWeekday(date) {
	return weekdays[date.getDay()];
}

function daysBetween(startDay, endDay) {
	const number = weekdays.indexOf(endDay) - weekdays.indexOf(startDay);
	if (number < 0) {
		return 7 + number;
	}
	return number;
}

function getXte(year, month, dayName, multiplicator) {
	const firstDayOfMonth = getWeekday(new Date(year, month, 1));
	const daysFromStartToFirstWeekday = daysBetween(firstDayOfMonth, dayName);

	const days = 1 + daysFromStartToFirstWeekday + 7 * multiplicator;
	return new Date(year, month, days);
}

function getLast(year, month, dayName) {
	const lastDayOfMonth = getWeekday(new Date(year, month + 1, 0));
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysFromEndToWeekday = daysBetween(dayName, lastDayOfMonth);

	const days = daysInMonth - daysFromEndToWeekday;
	return new Date(year, month, days);
}

function getTeenth(year, month, dayName) {
	const day = teenthDays.filter((num) => {
		const weekDayToCheck = getWeekday(new Date(year, month, num));
		return dayName === weekDayToCheck;
	});

	return new Date(year, month, day);
}

const dateCalcMap = [
	{ type: '1st', multiplicator: 0, func: getXte },
	{ type: '2nd', multiplicator: 1, func: getXte },
	{ type: '3rd', multiplicator: 2, func: getXte },
	{ type: '4th', multiplicator: 3, func: getXte },
	{ type: '5th', multiplicator: 4, func: getXte },
	{ type: 'last', multiplicator: 0, func: getLast },
	{ type: 'teenth', number: 1, func: getTeenth },
];

export function meetupDay(year, month, dayName, type) {
	const currDateCalc = dateCalcMap.find((entry) => entry.type === type);
	const meetupDate = currDateCalc.func(
		year,
		month,
		dayName,
		currDateCalc.multiplicator
	);
	if (meetupDate.getMonth() !== month) {
		throw new Error();
	}
	return meetupDate;
}
