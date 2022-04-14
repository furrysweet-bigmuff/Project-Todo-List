export function menuBtn (iClass, text, active) {
    const btn = document.createElement('li');
    if (active) btn.classList.add('active');
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add(iClass);
    btn.appendChild(i);
    btn.append(text);
    return btn
}