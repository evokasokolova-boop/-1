export function initCatalog() {
    document.querySelectorAll('.catalog__item').forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const productId = index + 1;
            window.location.href = `product-card.html?id=${productId}`;
        });
    });
}
