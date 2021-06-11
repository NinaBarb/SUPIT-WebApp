let aC = ["Astronomy", "Charms", "Dark Arts", "Defense Against The Dark Arts", "Herbology", "History of Magic", "Potions", "Transfiguration", "Arithmacy", "Care of Magical Cretaures", "Divination", "Muggle-Studies", "Study of Ancient Runes", "Advanced Arithmacy Studies", "Alchemy", "Ancient Studies", "Apparation", "Art", "Flying", "Ghoul Studies", "Magical Theory", "Muggle Art", "Muggle Music", "Music", "Xylomancy"];

const searchWrapper = document.querySelector(".searchInput");
const inputBox = document.getElementById("search")
const suggBox = searchWrapper.querySelector(".autocomBox");

var ectsTotal = 0;
var hoursTotal = 0;
var head = '<tr class="addTr"><th>Subject</th><th>ECTS</th><th>Hours</th><th>Lectures</th><th>Exercises</th><th>Type</th><th>Semester</th></tr>';
var foot = '<tr class="footRed"><td>Total</td><td id="ectsTotal2">' + ectsTotal + '</td><td id="hoursTotal2">' + hoursTotal + '</td></tr>'


inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {

        $(".autocomBox").css("display", "block");

        emptyArray = aC.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li class="matches">' + data + '</li>';
        });
        console.log(emptyArray);
        ShowSuggestions(emptyArray);
    }

    $(".matches").click(function () {
        console.log(this);
        inputBox.value = this.innerHTML;
    });

    $("#button").click(function () {
        let searchVal = inputBox.value;
        console.log(searchVal);

        $("thead").empty();
        $('thead').append(head);
        $("tfoot").empty();
        $('tfoot').append(foot);

        $.getJSON("https://demo4441624.mockable.io/jsonHogwartsData", function (data) {
            for (let i = 0; i < data.length; i++) {
                if (searchVal == data[i].name) {
                    $("tbody").append(`<tr id="row" class="item"><td class="name">${data[i].name}</td><td class="ects">${data[i].ects}</td><td class="hours">${data[i].hours}</td><td>${data[i].lectures}</td><td>${data[i].exercises}</td><td>${data[i].type}</td><td>${data[i].semester}</td><td><button id="deleteButton">X</button></td></tr>`)
                    ectsTotal += data[i].ects;
                    hoursTotal += data[i].hours;
                    $("#ectsTotal2").empty();
                    $("#ectsTotal2").append(ectsTotal)
                    $("#hoursTotal2").empty();
                    $("#hoursTotal2").append(hoursTotal)
                }

            };
        });
        inputBox.value = "";

    });
}

$("tbody").on("click", "#deleteButton", function () {
    $(this).closest("tr").remove();
    let curr = $(this).closest('tr');
    let currEcts = curr.find('.ects').text();
    let currHours = curr.find('.hours').text();
    ectsTotal -= currEcts;
    hoursTotal -= currHours;
    $("#ectsTotal2").empty();
    $("#ectsTotal2").append(ectsTotal)
    $("#hoursTotal2").empty();
    $("#hoursTotal2").append(hoursTotal)
});

function ShowSuggestions(list) {
    let listData;
    if (!list.length) {

    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}