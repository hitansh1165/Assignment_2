document.addEventListener('DOMContentLoaded', function () {
    // === Header Logo Animation ===
    const logo = document.querySelector('header img');
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.8)';

    setTimeout(() => {
        logo.style.transition = 'opacity 1s ease, transform 1s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }, 100);

    logo.addEventListener('mouseenter', function () {
        logo.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            logo.style.animation = '';
        }, 500);
    });

    // === Sidebar Navigation Animation ===
    const sidebarLinks = document.querySelectorAll('aside a');
    sidebarLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 300 + index * 150);
    });

    // === Menu Sections Animation ===
    const menuItems = document.querySelectorAll('.bg-white');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + index * 100);

        // Add click animation and alert
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.1)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 300);
            alert('You clicked a menu item!');
        });
    });

    // === Footer Animation on Scroll ===
    const footer = document.querySelector('footer');
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(20px)';

    const revealFooter = () => {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition < windowHeight * 0.9) {
            footer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
            window.removeEventListener('scroll', revealFooter);
        }
    };
    window.addEventListener('scroll', revealFooter);

     // === Add Quote Below Header ===
     const header = document.querySelector('header');
     const headerQuote = document.createElement('div');
     headerQuote.classList.add('header-quote');
 
     const topQuotes = [
        "Good food is good mood.",
        "Eat well, live well.",
        "Sip, smile, repeat.",
        "Spoon it. Sip it. Love it.",
        "Sweet. Smooth. Satisfying.",
        "Savor the flavor.",
     ];
     headerQuote.textContent = topQuotes[Math.floor(Math.random() * topQuotes.length)];
 
     header.insertAdjacentElement('afterend', headerQuote);

    // === Add Quote to Footer ===
    const footerText = footer.querySelector('p');
    const quotes = [
        "Good food is good mood.",
        "Eat well, live well.",
        "Happiness is homemade.",
        "Savor the flavor."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    footerText.textContent = randomQuote;


    // === Toggle Theme Button ===
const themeToggle = document.createElement('button');
themeToggle.id = 'darkModeToggle';
themeToggle.innerHTML = '<span class="toggle-icon">🌙</span> <span class="toggle-text">Change Mode</span>';

themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
themeToggle.style.padding = '0.5rem 1rem';
themeToggle.style.backgroundColor = '#ec4899';
themeToggle.style.color = '#fff';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1rem';

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// === Floating Call Button ===
const callButton = document.createElement('a')
callButton.href = 'tel:+918762589451';
callButton.classList.add('call-button');
callButton.innerHTML = '📞 <span class="call-text">Call for Delivery</span>';
document.body.appendChild(callButton);
});