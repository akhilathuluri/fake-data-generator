function generateData() {
	const numRecords = document.getElementById("num-records").value;
	const dataList = document.getElementById("data-list");
	dataList.innerHTML = "";
	for (let i = 0; i < numRecords; i++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const city = faker.address.city();
		const country = faker.address.country();
		const zipCode = faker.address.zipCode();
		const cardNumber = String(faker.random.number({min: 1000000000000000, max: 9999999999999999}));
        const website = faker.internet.domainName();
        const mobileNumber = faker.phone.phoneNumber();
		const email = faker.internet.email();
		const gender = faker.random.arrayElement(["Male", "Female"]);
		const dataItem = document.createElement("div");
		dataItem.innerHTML = `
			<p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
			<p><strong>Card Number:</strong> ${cardNumber}</p>
			<p><strong>Zip Code:</strong> ${zipCode}</p>
			<p><strong>City:</strong> ${city}</p>
			<p><strong>Country:</strong> ${country}</p>
			
			<hr>
		`;
		dataList.appendChild(dataItem);
	}
}
function showIpAddress() {
    var ipAddress = document.getElementById("ip-address");
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        ipAddress.innerHTML = "<strong>Your IP address:</strong> " + data.ip;
    })
      .catch(error => {
        console.error(error);
    });
}
  