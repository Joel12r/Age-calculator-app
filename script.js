function handleSubmit(e) {
    e.preventDefault();

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const day = dayInput.value.trim();
    const month = monthInput.value.trim();
    const year = yearInput.value.trim();

    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");
    const dayLableError = document.getElementById("dayLabel");
    const monthLableError = document.getElementById("monthLable");
    const yearLableError = document.getElementById("yearLable");
    // Remove red border color from all input fields
    dayInput.style.borderColor = '';
    monthInput.style.borderColor = '';
    yearInput.style.borderColor = '';

    if (day === "") {
        dayError.textContent = "Day is required";
        dayInput.style.borderColor = 'red';
        dayLableError.style.color = "red"
    } else if (isNaN(day) || parseInt(day) < 1 || parseInt(day) > 31) {
        dayError.textContent = "Invalid day";
        dayInput.style.borderColor = 'red';
        dayLableError.style.color = "red"
    } else {
        dayError.textContent = "";
        dayLableError.style.color = "";
    }

    if (month === "") {
        monthError.textContent = "Month is required";
        monthInput.style.borderColor = 'red';
        monthLableError.style.color= "red";
    } else if (isNaN(month) || parseInt(month) < 1 || parseInt(month) > 12) {
        monthError.textContent = "Invalid month";
        monthInput.style.borderColor = 'red';
        monthLableError.style.color= "red";
    } else {
        monthError.textContent = "";
        monthLableError.style.color= "";
    }

    if (year === "") {
        yearError.textContent = "Year is required";
        yearInput.style.borderColor = 'red';
        yearLableError.style.color ="red";
        
    } else if (isNaN(year) || year.length !== 4) {
        yearError.textContent = "Invalid year";
        yearInput.style.borderColor = 'red';
        yearLableError.style.color= "red";
    } else {
        yearError.textContent = "";
        yearLableError.style.color= "";
    }

    if (day === "" || month === "" || year === "") {
        // Stop further execution if there are empty fields
        return;
    }

    // Calculate age and update HTML
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    const yearAge = age;
    const monthAge = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    const dayAge = currentDate.getDate() - birthDate.getDate();

    document.getElementById('ageYears').textContent = yearAge;
    document.getElementById('ageMonths').textContent = monthAge;
    document.getElementById('ageDays').textContent = dayAge;
}
