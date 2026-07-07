function showMovie() {

    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;

    if (q1 === "" || q2 === "" || q3 === "") {

        document.getElementById("result").innerHTML =
            "<h3>Please answer all questions!</h3>";

        return;
    }

    let totoro = 0;
    let spirited = 0;
    let ponyo = 0;

    // Pergunta 1
    if (q1 === "totoro") totoro++;
    if (q1 === "spirited") spirited++;
    if (q1 === "ponyo") ponyo++;

    // Pergunta 2
    if (q2 === "totoro") totoro++;
    if (q2 === "spirited") spirited++;
    if (q2 === "ponyo") ponyo++;

    // Pergunta 3
    if (q3 === "totoro") totoro++;
    if (q3 === "spirited") spirited++;
    if (q3 === "ponyo") ponyo++;

    let movie = "";
    let image = "";

    if (totoro >= spirited && totoro >= ponyo) {

        movie = "🌳 My Neighbor Totoro";
        image = "images/totoro.jpg";

    } else if (spirited >= ponyo) {

        movie = "✨ Spirited Away";
        image = "images/spiritedaway.jpg";

    } else {

        movie = "🌊 Ponyo";
        image = "images/ponyo.jpg";

    }

    document.getElementById("result").innerHTML = `
        <h2>Your movie is:</h2>
        <h1>${movie}</h1>
        <img src="${image}" class="img-fluid rounded mt-3" style="max-width:300px;">
    `;
}