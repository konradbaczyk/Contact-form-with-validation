const inputFirstName = document.getElementById("first-name");
const errorFirstName = document.getElementById("first-name-error");

const inputLastName = document.getElementById("last-name");
const errorLastName = document.getElementById("last-name-error");

const inputEmail = document.getElementById("email");
const errorEmail = document.getElementById("email-error");

const radioInputQueryOne = document.getElementById("query-1");
const radioInputQueryTwo = document.getElementById("query-2");
const errorQueryArea = document.getElementById("query-area-error");

const textareaInputMessage = document.getElementById("message");
const errorMessageArea = document.getElementById("message-error");

const checkboxInput = document.getElementById("checkbox");
const errorCheckboxArea = document.getElementById("checkbox-error");

const formButton = document.getElementById("form-button");
const successModal = document.getElementById("modal");

const errors = document.querySelectorAll(".form__error");
const nameInputs = [inputFirstName, inputLastName];

const checkPersonalInputsValues = () => {
	nameInputs.forEach((input) => {
		if (input.value === "") {
			input.classList.add("error-active");
			input.previousElementSibling.classList.add("error-active");
		} else {
			input.classList.remove("error-active");
			input.previousElementSibling.classList.remove("error-active");
		}
	});
};

const checkEmail = (input) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!re.test(input.value)) {
		input.classList.add("error-active");
		input.previousElementSibling.classList.add("error-active");
	} else {
		input.classList.remove("error-active");
		input.previousElementSibling.classList.remove("error-active");
	}
};

const checkRadioBoxes = () => {
	if (!radioInputQueryOne.checked && !radioInputQueryTwo.checked) {
		errorQueryArea.classList.add("error-active");
	} else {
		errorQueryArea.classList.remove("error-active");
	}
};

const checkMessage = () => {
	if (textareaInputMessage.value === "") {
		errorMessageArea.classList.add("error-active");
		textareaInputMessage.classList.add("error-active");
	} else {
		errorMessageArea.classList.remove("error-active");
		textareaInputMessage.classList.remove("error-active");
	}
};

const checkConsentBox = () => {
	if (!checkboxInput.checked) {
		errorCheckboxArea.classList.add("error-active");
	} else {
		errorCheckboxArea.classList.remove("error-active");
	}
};

const clearForm = () => {
	inputFirstName.value = "";
	inputLastName.value = "";
	inputEmail.value = "";
	radioInputQueryOne.checked = false;
	radioInputQueryTwo.checked = false;
	textareaInputMessage.value = "";
	checkboxInput.checked = false;
};

const checkErrors = () => {
	let errorCounter = 0;

	errors.forEach((error) => {
		if (error.classList.contains("error-active")) {
			errorCounter++;
		}
	});

	if (errorCounter === 0) {
		successModal.classList.add("display-block");
		setTimeout(() => {
			successModal.classList.remove("display-block");
		}, 4000);
		clearForm();
	}
};

const submitForm = (e) => {
	e.preventDefault();
	checkPersonalInputsValues();
	checkEmail(inputEmail);
	checkRadioBoxes();
	checkMessage();
	checkConsentBox();
	checkErrors();
};

formButton.addEventListener("click", submitForm);
