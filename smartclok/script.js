function Updatewatch() {
    const hour1 = document.getElementById("hour");
    const minute1 = document.getElementById("minute");
    const seconde1 = document.getElementById("seconde");
    const merElement = document.getElementById("meridiem");

    const DateActuelle = new Date();
    let hour = DateActuelle.getHours() % 12 || 12;
    const mer = DateActuelle.getHours() >= 12 ? "PM" : "AM";
    hour = hour.toString().padStart(2, '0');
    const minute = DateActuelle.getMinutes().toString().padStart(2, '0');
    const sec = DateActuelle.getSeconds().toString().padStart(2, '0');

    hour1.textContent = `${hour} :`;
    minute1.textContent = `${minute} :`;
    seconde1.textContent = `${sec} `;

   
    merElement.textContent = mer;
}

const intervalId = setInterval(Updatewatch, 1000);
