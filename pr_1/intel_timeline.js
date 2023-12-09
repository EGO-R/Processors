"use strict";


function createIntelCpuElement(name, tech_process, cores_threads, speed, mem) {
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
    div.addEventListener('focus', () => {
        console.log("current");
        console.log(intel_container.lastElementChild.offsetHeight);
        intel_container.style.setProperty('--last-elem-height', intel_container.lastElementChild.offsetHeight + 'px');
        let characteristics = div.getElementsByClassName("current-gen-cpu-characteristics")[0];
        characteristics.style.display = "block";
    }, {capture: true});


    h3.className = 'current-gen-cpu-name';
    h3.innerText = 'Core i' + name;

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
    if (num === 11) {
        div2.appendChild(createIntelCpuElement("9-11900K", "Rocket Lake 14nm", "8/16", "3,5", "3200"));
        div2.appendChild(createIntelCpuElement("9-11900KF", "Rocket Lake 14nm", "8/16", "3,5", "3200"));
        div2.appendChild(createIntelCpuElement("9-11900", "Rocket Lake 14nm", "8/16", "2,5", "3200"));
        div2.appendChild(createIntelCpuElement("9-11900F", "Rocket Lake 14nm", "8/16", "2,5", "3200"));
        div2.appendChild(createIntelCpuElement("9-11900T", "Rocket Lake 14nm", "8/16", "1,5", "3200"));
        div2.appendChild(createIntelCpuElement("7-11700K", "Rocket Lake 14nm", "8/16", "3,6", "3200"));
        div2.appendChild(createIntelCpuElement("7-11700KF", "Rocket Lake 14nm", "8/16", "3,6", "3200"));
        div2.appendChild(createIntelCpuElement("7-11700", "Rocket Lake 14nm", "8/16", "2,5", "3200"));
        div2.appendChild(createIntelCpuElement("7-11700F", "Rocket Lake 14nm", "8/16", "2,5", "3200"));
        div2.appendChild(createIntelCpuElement("7-11700T", "Rocket Lake 14nm", "8/16", "1,4", "3200"));
        div2.appendChild(createIntelCpuElement("5-11600K", "Rocket Lake 14nm", "6/12", "3,9", "3200"));
        div2.appendChild(createIntelCpuElement("5-11600KF", "Rocket Lake 14nm", "6/12", "3,9", "3200"));
        div2.appendChild(createIntelCpuElement("5-11600", "Rocket Lake 14nm", "6/12", "2,8", "3200"));
        div2.appendChild(createIntelCpuElement("5-11600T", "Rocket Lake 14nm", "6/12", "1,7", "3200"));
        div2.appendChild(createIntelCpuElement("5-11500", "Rocket Lake 14nm", "6/12", "2,7", "3200"));
        div2.appendChild(createIntelCpuElement("5-11500T", "Rocket Lake 14nm", "6/12", "1,5", "3200"));
        div2.appendChild(createIntelCpuElement("5-11400", "Rocket Lake 14nm", "6/12", "2,6", "3200"));
        div2.appendChild(createIntelCpuElement("5-11400F", "Rocket Lake 14nm", "6/12", "2,6", "3200"));
        div2.appendChild(createIntelCpuElement("5-11400T", "Rocket Lake 14nm", "6/12", "1,3", "3200"));
    }
    else if (num === 10) {
        div2.appendChild(createIntelCpuElement("9-10910", "Comet Lake 14nm", "10/20", "2,8", "2933"));
        div2.appendChild(createIntelCpuElement("9-10900K", "Comet Lake 14nm", "10/20", "3,7", "2933"));
        div2.appendChild(createIntelCpuElement("9-10900KF", "Comet Lake 14nm", "10/20", "3,7", "2933"));
        div2.appendChild(createIntelCpuElement("9-10900", "Comet Lake 14nm", "10/20", "2,8", "2933"));
        div2.appendChild(createIntelCpuElement("9-10900F", "Comet Lake 14nm", "10/20", "2,8", "2933"));
        div2.appendChild(createIntelCpuElement("9-10900T", "Comet Lake 14nm", "10/20", "1,9", "2933"));
        div2.appendChild(createIntelCpuElement("9-10850K", "Comet Lake 14nm", "10/20", "3,6", "2666"));
        div2.appendChild(createIntelCpuElement("7-10700K", "Comet Lake 14nm", "8/16", "3,8", "2933"));
        div2.appendChild(createIntelCpuElement("7-10700KF", "Comet Lake 14nm", "8/16", "3,6", "3200"));
        div2.appendChild(createIntelCpuElement("7-10700", "Comet Lake 14nm", "8/16", "2,9", "2933"));
        div2.appendChild(createIntelCpuElement("7-10700F", "Comet Lake 14nm", "8/16", "2,9", "2933"));
        div2.appendChild(createIntelCpuElement("7-10700T", "Comet Lake 14nm", "8/16", "2,0", "2933"));
        div2.appendChild(createIntelCpuElement("5-10600K", "Comet Lake 14nm", "6/12", "4,1", "2666"));
        div2.appendChild(createIntelCpuElement("5-10600KF", "Comet Lake 14nm", "6/12", "4,1", "2666"));
        div2.appendChild(createIntelCpuElement("5-10600", "Comet Lake 14nm", "6/12", "3,3", "2666"));
        div2.appendChild(createIntelCpuElement("5-10600T", "Comet Lake 14nm", "6/12", "2,4", "2666"));
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
    section.id = 'core_' + num;

    div.className = 'gen-line';

    div2.className = 'current-gen-cpus'

    bigCircle.className = 'gen-line-big-circle';

    smallCircle.className = 'gen-line-small-circle';

    stripe.className = 'gen-line-stripe';

    h2.className = 'gen-name';
    h2.textContent = "Intel Core " + num;

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






var intel_container = document.getElementById("intel-timeline-container");

intel_container.appendChild(createGeneration5Element(11));
intel_container.appendChild(createGeneration5Element(10));



