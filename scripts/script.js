// Import local .json file
import data from "../data.json" assert {type: "json"}; // Make sure the value of property type is lowercase.

const bigCardNav = document.querySelectorAll(".big__card__nav");
const titleNormalCard = document.querySelectorAll(".title__normal__card");
const totalFlightHours = document.querySelectorAll(".total__flight__hours");
const prevFlightHours = document.querySelectorAll(".prev__flight__hours");

const arrFirstLetter = ["Day", "Week", "Month"];

for (let j = 0; j < data.length; j++) {
	totalFlightHours[j].innerText = `${data[j].timeframes["weekly"].current}hrs`;
	prevFlightHours[j].innerText = `Last Week - ${data[j].timeframes["weekly"].previous}hrs`;
}

for (let i = 0; i < bigCardNav.length; i++) {
	bigCardNav[i].addEventListener("click", (e) => {
		let current = document.getElementsByClassName("active");

		if (current.length > 0) {
			current[0].className = current[0].className.replace("active", "");
		}

		e.target.classList.add("active");
		let currentActive = e.target.innerText.toLowerCase();

		for (let j = 0; j < data.length; j++) {
			totalFlightHours[j].innerText = `${data[j].timeframes[currentActive].current}hrs`;

			for (let k = 0; k < arrFirstLetter.length; k++) {
				if (arrFirstLetter[k].charAt(0) === e.target.innerText.charAt(0)) {
					prevFlightHours[j].innerText = `Last ${arrFirstLetter[k]} - ${data[j].timeframes[currentActive].previous}hrs`;
				}
			}
		}
	});
}