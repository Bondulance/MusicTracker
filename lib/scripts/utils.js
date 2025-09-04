function getCurrentMonth() {
    let currentDate = new Date();
    let monthName = currentDate.toLocaleString('en-US', {month: 'long'});
    return monthName;
}

var month_declarer = document.getElementById("month_declarer");
month_declarer.appendChild(document.createTextNode("Happy " + getCurrentMonth() + "!"));

