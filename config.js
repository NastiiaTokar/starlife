// Основний конфігураційний файл сайту StarLife.CAMP

const CONFIG = {
    // Логотип сайту
    logo: {
        text: "STARLIFE CAMP",
        url: "images/logo.jpg"
    },

    // Блок 1. Головний екран (Hero)
    hero: {
        background_image: "images/photo11.png",
    },

    // Блок 2. Про нас (Star Life School)
    about: {
        image_or_video_preview: "images/photo.jpeg"
    },

    // Блок 3. Чому ми? (4 картки)
    features: [
        { id: 'f1', title: "Маленькі групи — максимум уваги", desc: "У нас невелика кількість дітей, тому кожна дитина отримує реальну увагу.", image: "images/ph1.png" },
        { id: 'f2', title: "Професійні актори як наставники", desc: "Наші наставники - діючі актори львівських театрів, які мають досвід роботи з дітьми.", image: "images/ph2.png" },
        { id: 'f3', title: "Комфорт для першого табору", desc: "Нас обирають батьки, чиї діти їдуть у табір вперше. У нас затишна атмосфера, без перевантаження великою кількістю людей.", image: "images/ph3.png" },
        { id: 'f4', title: "Локація біля Львова + природа", desc: "Табір знаходиться недалеко від Львова, але в оточенні природи, свіжого повітря і великої території для активностей.", image: "images/ph4.png" }
    ],

    // Блок 4. Зміни (5 карток)
    shifts: [
        {
            month: "Червень",
            dates: "15.06 - 21.06",
            group: "12-17 років",
            bg_image: "images/1.jpeg",
            places: 20,
            price: "від 16 000 грн"
        },
        {
            month: "Червень",
            dates: "22.06 - 28.06",
            group: "8-11 років",
            bg_image: "images/2.webp",
            places: 11,
            price: "від 18 000 грн"
        },
        {
            month: "Липень",
            dates: "06.07 - 12.07",
            group: "12-17 років",
            bg_image: "images/3.jpg",
            places: 13,
            price: "від 18 000 грн"
        },
        {
            month: "Липень",
            dates: "27.07 - 02.08",
            group: "8-11 років",
            bg_image: "images/4.jpg",
            places: 18,
            price: "від 16 000 грн"
        },
        {
            month: "Серпень",
            dates: "17.08 - 23.08",
            group: "змішана зміна",
            bg_image: "images/5.jpg",
            places: 19,
            price: "від 16 000 грн"
        }
    ],

    // Зображення для блоку "Локація та комфорт"
    locationImages: {
        housing: "images/family_room.png", // Замініть на реальний шлях до фото проживання
        food: "images/food1.jpeg" // Замініть на реальний шлях до фото харчування
    },

    // Відеовідгуки від батьків (YouTube)
    parentVideoReviews: [
        "https://www.youtube.com/embed/BJ6OEguB_wk?si=Lrx0Umifme7St2wO" // Приклад, замініть на ваш
    ],

    // Відеовідгук від дітей (YouTube)
    childrenVideoReviews: [
        "https://www.youtube.com/embed/9DnXHfjEYKI?si=QzDzEbEglU2ppLd-" // Приклад, замініть на ваш
    ],

    // Блок 5. Галерея (6-7 фото різного формату)
    gallery: [
        "images/evening2.jpeg",
        "images/evening1.jpeg",
        "images/evening3.jpeg",
        "images/evening4.jpeg",
        "images/food2.jpeg",
        "images/playg2.jpeg",
        "images/playg1.jpeg",
        "images/park2.jpeg",
        "images/park.jpeg",
        "images/playg3.jpeg"
    ],

    // Блок 6. Відгуки
    reviews: [
        {
            name: "Ольга Наревач",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            text: "Дякуємо величесзне, що дбали про наших дітей! Дякуємо за емоції! Дякуємо за досвід! Дякуємо за прекрасні дні! До нових зустрічей!"
        },
        {
            name: "Альона Свідінська",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
            text: "Наша донечка Ліза вперше побувала в таборі — і вона просто в захваті! Все було чудово організовано: безпека, комфорт і багато цікавих активностей. Особливо сподобалась акторська майстерність — дитина повернулась натхненною. Обов'язково поїдемо ще раз наступного року!"
        },
        {
            name: "Христина Балдина",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            text: "Емі 4 дні навіть не дзвонила, а після повернення сказала: «хочу назад!». Трохи сумує, що табір закінчився, але це найкращий показник. Дякуємо! Прекрасні наставники, чудова локація на природі і безпека на вищому рівні. Донька розповідала про табір ще місяць після повернення."
        }
    ],

    // Footer - Соціальні мережі
    socials: {
        instagram: "https://www.instagram.com/starlifeschool?igsh=MWowbzJlYTcyMThsZA==",
        tiktok: "https://www.tiktok.com/@starlifeschool?_r=1&_t=ZS-952KdH23u2E",
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
