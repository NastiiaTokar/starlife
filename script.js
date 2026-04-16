document.addEventListener('DOMContentLoaded', () => {
    // === 1. ІНІЦІАЛІЗАЦІЯ ДАНИХ З CONFIG ===

    // Логотип
    const headerLogoImg = document.getElementById('header-logo-img');
    const headerLogoText = document.getElementById('header-logo-text');
    const footerLogoImg = document.getElementById('footer-logo-img');
    const footerLogoText = document.getElementById('footer-logo-text');

    if (CONFIG.logo.url && CONFIG.logo.url.trim() !== "") {
        if (headerLogoImg) { headerLogoImg.src = CONFIG.logo.url; headerLogoImg.classList.remove('hidden'); }
        if (footerLogoImg) { footerLogoImg.src = CONFIG.logo.url; footerLogoImg.classList.remove('hidden'); }
        // Текст завжди відображаємо як просив користувач
        if (headerLogoText && CONFIG.logo.text) headerLogoText.textContent = CONFIG.logo.text;
        if (footerLogoText && CONFIG.logo.text) footerLogoText.textContent = CONFIG.logo.text;
    } else {
        if (headerLogoText && CONFIG.logo.text) headerLogoText.textContent = CONFIG.logo.text;
        if (footerLogoText && CONFIG.logo.text) footerLogoText.textContent = CONFIG.logo.text;
    }

    // Hero Section / Ціна від кількості місць
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) heroBg.style.backgroundImage = `url('${CONFIG.hero.background_image}')`;

    // Логіка ціни та місць (видалено за запитом користувача)

    // About Section
    const aboutImg = document.getElementById('about-image');
    if (aboutImg) aboutImg.src = CONFIG.about.image_or_video_preview;

    // Features Section
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid && CONFIG.features) {
        CONFIG.features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'feature-card animate reveal-up';
            card.innerHTML = `
                <div class="feature-img-wrapper">
                    <img src="${feature.image}" alt="${feature.title}" class="feature-img" loading="lazy">
                    <h3 class="feature-title">${feature.title}</h3>
                </div>
                <div class="feature-desc" style="padding: 15px 20px; font-size: 0.9rem; color: var(--clr-text); opacity: 0.6; line-height: 1.5;">${feature.desc || ''}</div>
            `;
            featuresGrid.appendChild(card);
        });
    }

    // Shifts
    const shiftsSlider = document.getElementById('shifts-slider');
    if (shiftsSlider && CONFIG.shifts) {
        CONFIG.shifts.forEach((shift, idx) => {
            const s = document.createElement('div');
            s.className = 'shift-card';
            s.style.backgroundImage = `url('${shift.bg_image}')`;
            s.innerHTML = `
                <div class="shift-overlay"></div>
                <div class="shift-content">
                    <span class="shift-month">${shift.month}</span>
                    <h3 class="shift-dates">${shift.dates}</h3>
                    <p class="shift-group">${shift.group}</p>
                    <div style="margin-top: 20px;">
                        <p class="shift-places">Залишилось: <span style="font-weight:bold">${shift.places || 0}</span> місць</p>
                        <div class="shift-price">${shift.price || ''}</div>
                    </div>
                </div>
            `;
            shiftsSlider.appendChild(s);
        });
    }

    // Gallery
    const masonryGrid = document.getElementById('masonry-grid');
    const showMoreBtn = document.getElementById('show-more-gallery');

    if (masonryGrid && CONFIG.gallery && CONFIG.gallery.length > 0) {
        masonryGrid.innerHTML = '';
        const limit = window.matchMedia("(max-width: 768px)").matches ? 2 : 6;
        const initialPhotos = Math.min(limit, CONFIG.gallery.length);

        for (let i = 0; i < initialPhotos; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${CONFIG.gallery[i]}" class="gallery-img" loading="lazy">`;
            item.addEventListener('click', () => openLightbox(CONFIG.gallery[i]));
            masonryGrid.appendChild(item);
        }

        if (CONFIG.gallery.length > initialPhotos && showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                for (let i = initialPhotos; i < CONFIG.gallery.length; i++) {
                    const newItem = document.createElement('div');
                    newItem.className = 'gallery-item pop-in extra-photo';
                    newItem.innerHTML = `<img src="${CONFIG.gallery[i]}" class="gallery-img" loading="lazy">`;
                    newItem.addEventListener('click', () => openLightbox(CONFIG.gallery[i]));
                    masonryGrid.appendChild(newItem);
                }
                showMoreBtn.parentElement.style.display = 'none';

                // Add hide button
                let hideBtnContainer = document.getElementById('hide-gallery-container');
                if (!hideBtnContainer) {
                    hideBtnContainer = document.createElement('div');
                    hideBtnContainer.id = 'hide-gallery-container';
                    hideBtnContainer.style.textAlign = 'center';
                    hideBtnContainer.style.marginTop = '30px';
                    hideBtnContainer.innerHTML = `<button id="hide-gallery" class="btn" style="background: #95a5a6; color: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">Сховати фото</button>`;
                    masonryGrid.parentElement.appendChild(hideBtnContainer);

                    document.getElementById('hide-gallery').addEventListener('click', () => {
                        const extraPhotos = masonryGrid.querySelectorAll('.extra-photo');
                        extraPhotos.forEach(p => p.remove());
                        hideBtnContainer.style.display = 'none';
                        showMoreBtn.parentElement.style.display = 'block';
                        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                } else {
                    hideBtnContainer.style.display = 'block';
                }
            });
        } else if (showMoreBtn) {
            showMoreBtn.parentElement.style.display = 'none';
        }
    }

    // Reviews
    const reviewsTrack = document.getElementById('reviews-track');
    if (reviewsTrack && CONFIG.reviews) {
        CONFIG.reviews.forEach(review => {
            const reviewEl = document.createElement('div');
            reviewEl.className = 'review-card';
            reviewEl.innerHTML = `
                <div class="reviewer-info">
                    <div class="generic-avatar"><i class="ph-fill ph-user"></i></div>
                    <h4 class="reviewer-name">${review.name}</h4>
                    <div class="stars">
                        <i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            `;
            reviewsTrack.appendChild(reviewEl);
        });
    }

    // Social Links
    const socialContainer = document.getElementById('social-links-container');
    if (socialContainer && CONFIG.socials) {
        const socInst = document.getElementById('soc-inst');
        if (socInst && CONFIG.socials.instagram) socInst.href = CONFIG.socials.instagram;

        const socTt = document.getElementById('soc-tt');
        if (socTt && CONFIG.socials.tiktok) socTt.href = CONFIG.socials.tiktok;

        const socTg = document.getElementById('soc-tg');
        if (socTg && CONFIG.socials.telegram) socTg.href = CONFIG.socials.telegram;

        const socVb = document.getElementById('soc-vb');
        if (socVb && CONFIG.socials.viber) socVb.href = CONFIG.socials.viber;
    }

    // Video Reviews from Config
    const parentVideoContainer = document.getElementById('parent-videos-container');
    if (parentVideoContainer && CONFIG.parentVideoReviews) {
        parentVideoContainer.innerHTML = '';
        CONFIG.parentVideoReviews.forEach(url => {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "250";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = "12px";
            parentVideoContainer.appendChild(iframe);
        });
    }

    const childrenVideoContainer = document.getElementById('children-videos-container');
    if (childrenVideoContainer && CONFIG.childrenVideoReviews) {
        childrenVideoContainer.innerHTML = '';
        CONFIG.childrenVideoReviews.forEach(url => {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "250";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = "12px";
            childrenVideoContainer.appendChild(iframe);
        });
    }

    // Location & Comfort Images from Config
    const locHousingImg = document.getElementById('loc-housing-img');
    const locFoodImg = document.getElementById('loc-food-img');
    if (locHousingImg && CONFIG.locationImages && CONFIG.locationImages.housing) {
        locHousingImg.src = CONFIG.locationImages.housing;
    }
    if (locFoodImg && CONFIG.locationImages && CONFIG.locationImages.food) {
        locFoodImg.src = CONFIG.locationImages.food;
    }

    // Додаткові фото Локації
    const locSportsImg = document.getElementById('loc-sports-img');
    const locBeachImg = document.getElementById('loc-beach-img');
    const locHorsesImg = document.getElementById('loc-horses-img');
    const locRopesImg = document.getElementById('loc-ropes-img');
    const locKidsImg = document.getElementById('loc-kids-img');
    const locGazebosImg = document.getElementById('loc-gazebos-img');
    
    if (CONFIG.locationImages) {
        if (locSportsImg && CONFIG.locationImages.sports) locSportsImg.src = CONFIG.locationImages.sports;
        if (locBeachImg && CONFIG.locationImages.beach) locBeachImg.src = CONFIG.locationImages.beach;
        if (locHorsesImg && CONFIG.locationImages.horses) locHorsesImg.src = CONFIG.locationImages.horses;
        if (locRopesImg && CONFIG.locationImages.ropes) locRopesImg.src = CONFIG.locationImages.ropes;
        if (locKidsImg && CONFIG.locationImages.kids) locKidsImg.src = CONFIG.locationImages.kids;
        if (locGazebosImg && CONFIG.locationImages.gazebos) locGazebosImg.src = CONFIG.locationImages.gazebos;
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();

    // === 2. UI ЛОГІКА ===

    // Burger Menu
    const burgerBtn = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    }

    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }));

    // Populate shifts select
    const shiftSelect = document.getElementById('modal-shift');
    if (shiftSelect && CONFIG.shifts) {
        CONFIG.shifts.forEach((shift) => {
            const option = document.createElement('option');
            option.value = `${shift.dates} (${shift.group})`;
            option.textContent = `${shift.dates} | ${shift.group}`;
            shiftSelect.appendChild(option);
        });
    }

    // Reviews Slider
    let currentReview = 0;
    function updateSlider() { reviewsTrack.style.transform = `translateX(-${currentReview * 100}%)`; }
    document.getElementById('next-review')?.addEventListener('click', () => {
        currentReview = (currentReview + 1) % CONFIG.reviews.length;
        updateSlider();
    });
    document.getElementById('prev-review')?.addEventListener('click', () => {
        currentReview = (currentReview - 1 + CONFIG.reviews.length) % CONFIG.reviews.length;
        updateSlider();
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            item.classList.toggle('active');

            const parent = item.closest('.faq-list');
            if (parent) {
                parent.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });

    // Modals
    const modal = document.getElementById('booking-modal');
    function openModal() {
        modal.classList.add('active');
        document.getElementById('modal-form-view').classList.remove('hidden');
        document.getElementById('modal-success-view').classList.add('hidden');
    }
    function closeModal() { modal.classList.remove('active'); }

    document.querySelectorAll('.trigger-modal').forEach(b => b.addEventListener('click', (e) => { e.preventDefault(); openModal(); }));
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('close-success-btn').addEventListener('click', closeModal);

    // Form Submissions
    document.querySelectorAll('.form-action').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Забороняємо перезавантаження сторінки (AJAX)

            let btn = form.querySelector('button');
            let oldText = btn.textContent;
            btn.textContent = "Обробка...";
            btn.disabled = true;

            const formData = new FormData(form);

            const handleSuccess = () => {
                btn.textContent = oldText;
                btn.disabled = false;
                if (form.id === 'modal-booking-form') {
                    document.getElementById('modal-form-view').classList.add('hidden');
                    document.getElementById('modal-success-view').classList.remove('hidden');
                } else {
                    const contactBox = form.closest('.contact-box');
                    form.style.display = 'none';
                    contactBox.querySelector('.contact-title').style.display = 'none';
                    contactBox.querySelector('.contact-subtitle').style.display = 'none';

                    if (!document.getElementById('bottom-success')) {
                        const successDiv = document.createElement('div');
                        successDiv.id = 'bottom-success';
                        successDiv.innerHTML = `
                            <div class="success-icon" style="font-size: 4rem; color: #10B981; margin-bottom: 20px;"><i class="ph-fill ph-check-circle"></i></div>
                            <h3 class="contact-title" style="margin-bottom: 10px;">Дякуємо! Вашу заявку прийнято,</h3>
                            <p class="contact-subtitle" style="font-size: 1.2rem;">ми зателефонуємо вам найближчим часом</p>
                        `;
                        contactBox.appendChild(successDiv);
                    }
                }
                form.reset();
            };

            const handleError = () => {
                alert("Сталася помилка при відправці. Спробуйте пізніше.");
                btn.textContent = oldText;
                btn.disabled = false;
            };

            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9feLruWtlB4ratUvVrdEjECkBmZP55UrevTXJje2wmrV5v6LJcR5v5bW7HMuOOdZxEg/exec"; // Додайте сюди посилання на ваш Google Script

            if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.trim() !== "") {
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                }).then(response => {
                    handleSuccess();
                }).catch(error => handleError());
            } else {
                setTimeout(() => handleSuccess(), 1000);
            }
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    function openLightbox(src) { document.getElementById('lightbox-img').src = src; lightbox.classList.add('active'); }
    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));

    // Scroll Animations
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
