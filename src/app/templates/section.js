export function section() {
    const section = document.createElement('section');
    const heading = document.createElement('h1');
    heading.textContent = 'My Project';
    section.appendChild(heading);

    return section
}