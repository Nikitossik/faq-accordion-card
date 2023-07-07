const accordion = document.querySelector('.faq-accordion');

accordion.addEventListener('click', e => {
    const target = e.target.closest('.faq-accordion__header');

    if (!target || !accordion.contains(target)) return;

    target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');

    e.preventDefault();
});