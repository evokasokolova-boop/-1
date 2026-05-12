export function initCatalog() {
    // Label initial items with fixed IDs which will be automatically preserved upon cloning
    document.querySelectorAll('.catalog__item').forEach((item, index) => {
        item.dataset.id = index + 1;
        item.style.cursor = 'pointer';
    });

    // Handle click navigation via delegation using persistent dataset ID
    document.querySelector('.catalog')?.addEventListener('click', (e) => {
        const item = e.target.closest('.catalog__item');
        // Prevent navigation if user clicked interactive vector overlay
        if (item && item.dataset.id && !e.target.closest('svg')) {
            window.location.href = `product-card.html?id=${item.dataset.id}`;
        }
    });

    // Handle View More triggers
    document.querySelectorAll('.catalog__btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const containerEl = btn.closest('.catalog__wrapper-el');
            const list = containerEl ? containerEl.querySelector('.catalog__list') : null;
            
            if (list) {
                const clone = list.cloneNode(true);
                // Insert the cloned list node right before the button itself
                btn.parentNode.insertBefore(clone, btn);
            }
        });
    });
}
