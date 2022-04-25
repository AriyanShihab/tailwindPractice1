const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const html = document.querySelector("html");

light.addEventListener(`click`, () => {
    if (!html.classList.contains(`dark`)) {
        alert(`light Mood Already Activeted`);
    }

    html.classList.remove(`dark`);
    dark.style.opacity = `.3`;
    light.style.opacity = `1`;
});

dark.addEventListener(`click`, () => {
    if (html.classList.contains(`dark`)) {
        alert(`dark Mood Already Activeted`);
    }
    html.classList.add(`dark`);
    light.style.opacity = `.3`;
    dark.style.opacity = `1`;
});

const elements = document.getElementById(`changable`);
const elements2 = document.getElementById(`changable2`);
const elements3 = document.getElementById(`changable3`);
const month = document.getElementById(`month`);
const year = document.getElementById(`year`);

year.addEventListener(`click`, () => {
    if (elements.innerText.match(`Year`)) {
        alert(`Yearly Plan is Already Selected`);
    }
    elements.innerHTML = `1000/<span class=" month font-normal text-lg ">$ Per Year</span>`;
    elements2.innerHTML = `1500/<span class=" month font-normal text-lg ">$ Per Year</span>`;
    elements3.innerHTML = `1800/<span class=" month font-normal text-lg ">$ Per Year</span>`;
});

month.addEventListener(`click`, () => {
    if (elements.innerText.match(`Month`)) {
        alert(`Monthly Plan is Already Selected`);
    }
    elements.innerHTML = `99/<span class=" month font-normal text-lg ">$ Per Month</span>`;
    elements2.innerHTML = `179/<span class=" month font-normal text-lg ">$ Per Month</span>`;
    elements3.innerHTML = `299/<span class=" month font-normal text-lg ">$ Per Month</span>`;
});