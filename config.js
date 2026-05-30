// Основний конфігураційний файл сайту StarLife.CAMP

const CONFIG = {
    // Логотип сайту
    logo: {
        text: "STARLIFE CAMP",
        url: "images/logo.png"
    },

    // Блок 1. Головний екран (Hero)
    hero: {
        background_image: "images/photo 11.png",
    },

    // Блок 2. Про нас (Star Life School)
    about: {
        image_or_video_preview: "images/photo.JPEG"
    },

    // Блок 3. Чому ми? (4 картки)
    features: [
        { id: 'f1', title: "Маленькі групи — максимум уваги", desc: "У нас невелика кількість дітей, тому кожна дитина отримує реальну увагу.", image: "images/ph11.png" },
        { id: 'f2', title: "Професійні актори як наставники", desc: "Наші наставники - діючі актори львівських театрів, які мають досвід роботи з дітьми.", image: "images/ph22.png" },
        { id: 'f3', title: "Комфорт для першого табору", desc: "Нас обирають батьки, чиї діти їдуть у табір вперше. У нас затишна атмосфера.", image: "images/ph33.png" },
        { id: 'f4', title: "Локація біля Львова + природа", desc: "Табір знаходиться недалеко від Львова, в оточенні природи, свіжого повітря і великої території для активностей.", image: "images/ph44.png" }
    ],

    // Блок 4. Зміни (5 карток)
    shifts: [

        {
            month: "Червень",
            dates: "22.06 - 28.06",
            group: "8-11 років",
            bg_image: "images/2.webp",
            places: 6,
            price: "19 000 грн"
        },
        {
            month: "Липень",
            dates: "06.07 - 12.07",
            group: "12-17 років",
            bg_image: "images/3.jpg",
            places: 10,
            price: "19 000 грн"
        },
        {
            month: "Липень",
            dates: "27.07 - 02.08",
            group: "8-11 років",
            bg_image: "images/4.jpg",
            places: 15,
            price: "17 000 грн"
        },
        {
            month: "Серпень",
            dates: "17.08 - 23.08",
            group: "змішана зміна",
            bg_image: "images/5.jpg",
            places: 19,
            price: "16 000 грн"
        }
    ],

    // Зображення для блоку "Локація та комфорт"
    locationImages: {
        housing: "images/room.jpg", // Замініть на реальний шлях до фото проживання
        food: "images/food1.JPEG", // Замініть на реальний шлях до фото харчування
        sports: "images/foto1.webp",      // Спортивні майданчики
        beach: "images/foto2.jfif",       // Пляж
        horses: "images/foto3.webp",      // Кінний клуб
        ropes: "images/foto4.png",       // Мотузковий парк
        kids: "images/foto5.png",        // Дитячі зони (гойдалки, гірки)
        gazebos: "images/foto6.webp"      // Альтанки та зони відпочинку
    },

    // Відеовідгуки від батьків (YouTube)
    parentVideoReviews: [
        "https://youtube.com/shorts/E890RUXqugo?si=0UT3c256KDo65xcR"
    ],

    // Відеовідгук від дітей (YouTube)
    childrenVideoReviews: [
        "https://youtube.com/shorts/YakXGOuYmIU?si=SXi8TlQ4gwyTjeFu"
    ],

    // Блок 5. Галерея (6-7 фото різного формату)
    gallery: [
        "images/evening2.png",
        "images/evening1.png",
        "images/evening3.png",
        "images/evening4.JPEG",
        "images/food2.JPEG",
        "images/playg2.JPEG",
        "images/playg1.JPEG",
        "images/park2.JPEG",
        "images/park.JPEG",
        "images/playg3.JPEG"
    ],

    // Блок 6. Відгуки
    reviews: [
        {
            name: "Ольга Наревач",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            text: "Дякуємо величезне, що дбали про наших дітей! Дякуємо за емоції! Дякуємо за досвід! Дякуємо за прекрасні дні! До нових зустрічей!"
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

    // Footer - Соціальні мережі та контакти
    socials: {
        instagram: "https://www.instagram.com/starlifeschool?igsh=MWowbzJlYTcyMThsZA==",
        tiktok: "https://www.tiktok.com/@starlifeschool?_r=1&_t=ZS-952KdH23u2E",
        telegram_channel: "https://t.me/starlifeschool",
        telegram_chat_phone: "https://t.me/starlifeschool",
        instagram_logo: "images/logo.png"
    },

    // PDF Файли для блоку "Що потрібно знати"
    pdfs: {
        rules: "media/rules.pdf",
        packing_list: "media/packing_list.pdf",
        contract: "media/contract.pdf",
        medical_form: "media/medical_form.pdf",
        program: "media/program.pdf"
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;

