import countries from './countries.json';

function changeTimeZone(date, timeZone) {
	const dateToUse = typeof date === 'string' ? new Date(date) : date;
	return new Date(dateToUse.toLocaleString('en-US', { timeZone }));
}

const $ = selector => document.querySelector(selector);

const peruInfo = countries.find(country => country.country_code === 'PE');
const spainInfo = countries.find(country => country.country_code === 'ES');
const argentinaInfo = countries.find(country => country.country_code === 'AR');
const colombiaInfo = countries.find(country => country.country_code === 'CO');

$('form').addEventListener('submit', event => {
	event.preventDefault();
	const { date } = Object.fromEntries(new window.FormData(event.currentTarget));
	console.log({ date });
	const mainDate = new Date(date);

	const [mainTimezone] = peruInfo.timezones;

	const peruDate = changeTimeZone(mainDate, mainTimezone);
	const colombiaDate = changeTimeZone(mainDate, colombiaInfo.timezones[0]);
	const argentinaDate = changeTimeZone(mainDate, argentinaInfo.timezones[0]);
	const spainDate = changeTimeZone(mainDate, spainInfo.timezones[0]);
	console.log({ peruDate, colombiaDate, argentinaDate, spainDate });
});
