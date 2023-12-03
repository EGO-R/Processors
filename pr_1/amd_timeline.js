"use strict";


function createAmdCpuElement(name, tech_process, cores_threads, speed, mem) {
    // Создаем элементы
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let divChild = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    // Добавляем классы и атрибуты
    div.className = 'current-gen-cpu';
    div.addEventListener('mouseover', () => {
        let characteristics = div.getElementsByClassName("current-gen-cpu-characteristics")[0];
        characteristics.style.display = "block";
    });
    div.addEventListener('mouseout', () => {
        let characteristics = div.getElementsByClassName("current-gen-cpu-characteristics")[0];
        characteristics.style.display = "none";
    });

    h3.className = 'current-gen-cpu-name';
    h3.innerText = 'Ryzen ' + name;

    divChild.className = 'current-gen-cpu-characteristics';
    divChild.style.display = "none";

    p1.className = 'current-gen-cpu-tech-process';
    p1.innerText = 'Техпроцесс: ' + tech_process;

    p2.className = 'current-gen-cpu-cores-threads';
    p2.innerText = 'Ядра/потоки: ' + cores_threads;

    p3.className = 'current-gen-cpu-clock-speed';
    p3.innerText = 'Частота: ' + speed + "Ггц";

    p4.className = 'current-gen-cpu-memory';
    p4.innerText = 'Память: DDR4 ' + mem + "Мгц";

    // Добавляем элементы в DOM
    divChild.appendChild(p1);
    divChild.appendChild(p2);
    divChild.appendChild(p3);
    divChild.appendChild(p4);
    div.appendChild(h3);
    div.appendChild(divChild);

    return div;
}

function generateCPUs(num, div2) {
    if (num === 5) {
        div2.appendChild(createAmdCpuElement("9 5950X", "Zen3(7mn+)", "16/32", "3,4", "3200"));
        div2.appendChild(createAmdCpuElement("9 5900X", "Zen3(7mn+)", "12/24", "3,7", "3200"));
        div2.appendChild(createAmdCpuElement("9 5900", "Zen3(7mn+)", "12/24", "3,0", "3200"));
        div2.appendChild(createAmdCpuElement("7 5800X", "Zen3(7mn+)", "8/16", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("7 5800X3D", "Zen3(7mn+)", "8/16", "3,4", "3200"));
        div2.appendChild(createAmdCpuElement("7 5800", "Zen3(7mn+)", "8/16", "3,4", "3200"));
        div2.appendChild(createAmdCpuElement("7 PRO_5750G", "Zen3(7mn+)", "8/16", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("7 5700G", "Zen3(7mn+)", "8/16", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("7 5700G", "Zen3(7mn+)", "8/16", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("7 5700GE", "Zen3(7mn+)", "8/16", "3,2", "3200"));
        div2.appendChild(createAmdCpuElement("5 5600X", "Zen3(7mn+)", "6/12", "3,7", "3200"));
        div2.appendChild(createAmdCpuElement("5 5600", "Zen3(7mn+)", "6/12", "3,5", "3200"));
        div2.appendChild(createAmdCpuElement("5 5600", "Zen3(7mn+)", "6/12", "3,5", "3200"));
    }
    else if (num === 4) {
        div2.appendChild(createAmdCpuElement("7 PRO_4750G", "Zen2(7mn)", "8/16", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("7 PRO_4750GE", "Zen2(7mn)", "8/16", "3,1", "3200"));
        div2.appendChild(createAmdCpuElement("7 4700G", "Zen2(7mn)", "8/16", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("7 4700GE", "Zen2(7mn)", "8/16", "3,1", "3200"));
        div2.appendChild(createAmdCpuElement("5 PRO_4650G", "Zen2(7mn)", "6/12", "3,7", "3200"));
        div2.appendChild(createAmdCpuElement("5 PRO_4650GE", "Zen2(7mn)", "6/12", "3,3", "3200"));
        div2.appendChild(createAmdCpuElement("5 4600G", "Zen2(7mn)", "6/12", "3,7", "3200"));
        div2.appendChild(createAmdCpuElement("5 4600GE", "Zen2(7mn)", "6/12", "3,3", "3200"));
        div2.appendChild(createAmdCpuElement("3 PRO_4350G", "Zen2(7mn)", "4/8", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("3 PRO_4350GE", "Zen2(7mn)", "4/8", "3,5", "3200"));
    }
    else if (num === 3) {
        div2.appendChild(createAmdCpuElement("9 3950X", "Zen2(7mn)", "16/32", "3,5", "3200"));
        div2.appendChild(createAmdCpuElement("9 3900_XT", "Zen2(7mn)", "12/24", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("9 3900X", "Zen2(7mn)", "12/24", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("9 PRO_3900", "Zen2(7mn)", "12/24", "3,1", "3200"));
        div2.appendChild(createAmdCpuElement("7 3800XT", "Zen2(7mn)", "8/16", "3,9", "3200"));
        div2.appendChild(createAmdCpuElement("7 3800X", "Zen2(7mn)", "8/16", "3,9", "3200"));
        div2.appendChild(createAmdCpuElement("7 3700X", "Zen2(7mn)", "8/16", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("7 PRO_3700", "Zen2(7mn)", "8/16", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("5 3600_XT", "Zen2(7mn)", "6/12", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("5 3600X", "Zen2(7mn)", "6/12", "3,8", "3200"));
        div2.appendChild(createAmdCpuElement("5 3600 PRO", "Zen2(7mn)", "6/12", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("5 3600", "Zen2(7mn)", "6/12", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("5 3500X", "Zen2(7mn)", "6/6", "3,6", "3200"));
        div2.appendChild(createAmdCpuElement("5 3500", "Zen2(7mn)", "6/6", "3,6", "3200"));
    }
}

function createGeneration5Element(num) {
    // Создаем элементы
    let section = document.createElement('section');
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let bigCircle = document.createElement('div');
    let smallCircle = document.createElement('div');
    let stripe = document.createElement('div');
    let h2 = document.createElement("h2");

    // Добавляем классы и идентификаторы
    section.className = 'generation';
    section.id = 'ryzen_' + num;

    div.className = 'gen-line';

    div2.className = 'current-gen-cpus'

    bigCircle.className = 'gen-line-big-circle';

    smallCircle.className = 'gen-line-small-circle';

    stripe.className = 'gen-line-stripe';

    h2.className = 'gen-name';
    h2.textContent = "AMD Ryzen " + num;

    // Добавляем элементы в DOM
    div.appendChild(bigCircle);
    div.appendChild(smallCircle);
    div.appendChild(stripe);

    section.appendChild(div);
    section.appendChild(h2);
    section.appendChild(div2);

    generateCPUs(num, div2);
    
    return section;
}






var amd_container = document.getElementById("amd-timeline-container");

amd_container.appendChild(createGeneration5Element(5));
amd_container.appendChild(createGeneration5Element(4));
amd_container.appendChild(createGeneration5Element(3));
