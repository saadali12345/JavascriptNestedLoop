const div = document.querySelector('div');
for (let i = 1; i <= 100; i++) {
    div.innerHTML += `<br/>`;
    for (let j = 1; j <= 10; j++) {
        div.innerHTML += `${i} * ${j} = ${i*j} <br/>`;
    }
}
