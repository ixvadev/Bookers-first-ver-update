document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('#dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdownSelect = document.querySelector('.dropdown-select');
    let selectedHour = dropdownMenu.querySelector('.dropdown-hour').textContent;
    let selectedMinute = dropdownMenu.querySelector('.dropdown-minute').textContent;

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.textContent.includes('ч.')) {
                selectedHour = e.target.textContent;
                dropdownMenu.querySelector('.dropdown-hour').textContent = selectedHour;
            } else {
                selectedMinute = e.target.textContent;
                dropdownMenu.querySelector('.dropdown-minute').textContent = selectedMinute;
            }
        });
    });

    dropdownSelect.addEventListener('click', () => {
        dropdownToggle.textContent = `${selectedHour} ${selectedMinute}`;
        dropdownMenu.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});