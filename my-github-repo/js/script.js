// Data de lançamento
const launchDate = new Date("November 14, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
const countdown = setInterval(function () {
    // Data e hora atual
    const now = new Date().getTime();

    // Calcula a diferença entre a data de lançamento e a data atual
    const distance = launchDate - now;

    // Cálculo do tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza o contador na página
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se a contagem terminar
    if (distance < 0) {
        clearInterval(countdown);
        document.body.innerHTML = "<h1>Lançamento Aconteceu!</h1>";
    }
}, 1000);
