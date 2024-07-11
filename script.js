const PROGRESS_CONTAINER = ".progress-bars";

function setProgressBars(containerClassName) {
    if (!containerClassName) {
        return;
    }

    const progressContainer = document.querySelector(containerClassName);

    if (!progressContainer) {
        return;
    }

    const progressElements = document.querySelectorAll("progress");
    progressElements.forEach((progressElem) => {
        
        const percents = progressElem.getAttribute("value");
        const title = progressElem.getAttribute("data-title");
        
        const customProgress = createProgress({
            percents,
            title
        });
        
        progressContainer.appendChild(customProgress);
    });
}

function createProgress({percents, title}) {
    const progressWrapper = document.createElement('div');
    progressWrapper.classList.add("progress");

    const percentsElem = createProgressPercents(percents);
    const titleElem = createProgressTitle(title);
    const barElem = createProgressBag(percents);

    progressWrapper.appendChild(titleElem);
    progressWrapper.appendChild(percentsElem);
    progressWrapper.appendChild(barElem);

    return progressWrapper;
}

function createProgressPercents(percents) {
    const percentsElement = document.createElement('span');
    percentsElement.classList.add("progress__percentage");
    percentsElement.innerText = `${percents}%`;

    return percentsElement;
}

function  createProgressTitle(title) {
    const titleElem = document.createElement('h2');
    titleElem.classList.add('progress__title');
    titleElem.innerText = title;

    return titleElem;
}

function createProgressBag(percents) {
    const progressBarElem = document.createElement('div');
    progressBarElem.classList.add("progress__bar");

    const progressBarInner = document.createElement('div');
    progressBarInner.classList.add("progress__inner");
    progressBarInner.style.width = `${percents}%`;

    progressBarElem.appendChild(progressBarInner);

    return progressBarElem;
}

setProgressBars(PROGRESS_CONTAINER);