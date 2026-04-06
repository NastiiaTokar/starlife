// Основний конфігураційний файл сайту StarLife.CAMP

const CONFIG = {
    // Логотип сайту
    logo: {
        text: "STARLIFE CAMP",
        url: "images/logo.jpg"
    },

    // Блок 1. Головний екран (Hero)
    hero: {
        background_image: "images/photo.jpeg",
    },

    // Контакти / Куди відправляти форму
    form_action_url: "https://formsubmit.co/tokaranastasia2@gmail.com",

    // Блок 2. Про нас (Star Life School)
    about: {
        image_or_video_preview: "images/photo.jpeg"
    },

    // Блок 3. Чому ми? (4 картки)
    features: [
        { id: 'f1', title: "Маленькі групи — максимум уваги", desc: "У нас невелика кількість дітей, тому кожна дитина отримує реальну увагу, підтримку і включеність у процес.", image: "images/evening1.jpeg" },
        { id: 'f2', title: "Професійні актори як наставники", desc: "З дітьми працюють діючі актори з досвідом роботи в кіно та з дітьми. Вони не просто навчають — вони ведуть і надихають.", image: "images/location.jpeg" },
        { id: 'f3', title: "Комфорт для першого табору", desc: "Нас обирають батьки, чиї діти їдуть у табір вперше. У нас затишна атмосфера, без перевантаження великою кількістю людей.", image: "images/park.jpeg" },
        { id: 'f4', title: "Локація біля Львова + природа", desc: "Табір знаходиться недалеко від Львова, але в оточенні природи, свіжого повітря і великої території для активностей.", image: "images/food1.jpeg" }
    ],

    // Блок 4. Зміни (5 карток)
    shifts: [
        {
            month: "Червень",
            dates: "15.06 - 21.06",
            group: "Підлітки",
            bg_image: "images/1.jpeg"
        },
        {
            month: "Червень",
            dates: "22.06 - 28.06",
            group: "Діти",
            bg_image: "images/2.webp"
        },
        {
            month: "Липень",
            dates: "06.07 - 12.07",
            group: "Підлітки",
            bg_image: "images/3.jpg"
        },
        {
            month: "Липень",
            dates: "27.07 - 02.08",
            group: "Діти",
            bg_image: "images/4.jpg"
        },
        {
            month: "Серпень",
            dates: "17.08 - 23.08",
            group: "Змішана",
            bg_image: "images/5.jpg"
        }
    ],

    // Блок 5. Галерея (6-7 фото різного формату)
    gallery: [
        "images/evening2.jpeg",
        "images/evening3.jpeg",
        "images/evening4.jpeg",
        "images/food2.jpeg",
        "images/playg2.jpeg",
        "images/playg3.jpeg"
    ],

    // Блок 6. Відгуки
    reviews: [
        {
            name: "Оксана Коваленко",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            text: "Це був найкращий літній табір для нашого сина! Він повернувся в захваті, з купою нових друзів і шаленим бажанням знімати відео."
        },
        {
            name: "Ігор Шевченко",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
            text: "Дуже круто, що діти не просто сидять у телефонах, а реально створюють щось своє. Обов'язково поїдемо ще раз наступного року!"
        },
        {
            name: "Марія Литвин",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            text: "Прекрасні вожаті (ментори), чудова локація на природі і безпека на вищому рівні. Донька розповідала про табір ще місяць після повернення."
        }
    ],

    // Footer - Соціальні мережі
    socials: {
        instagram: "https://www.instagram.com/starlifeschool?igsh=MWowbzJlYTcyMThsZA==",
        tiktok: "https://www.tiktok.com/@starlifeschool?_r=1&_t=ZS-952KdH23u2E",
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
