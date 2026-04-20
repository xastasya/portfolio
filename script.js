/* ============================================================
   ASTASYA PORTFOLIO — script.js
   Версия: финальная (светлый индикатор загрузки, исправленное переключение)
   ============================================================ */

'use strict';

// ---------- БАЗА ДАННЫХ ПРОЕКТОВ ----------
const PROJECTS = [
  { id:0, title:'Твич оформление YaJeBarracuda', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2025', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', 
    thumbnail: 'assets/images/p0.png',
    images:[
    'assets/images/p1.png',
    'assets/images/p2.png',
    'assets/images/p3.png',
    'assets/images/p4.png',
    'assets/images/p5.png'] },
  { id:1, title:'Твич оформление Lane', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2025', tools:'Illustrator', type_ru:'Брендинг', type_en:'Branding', 
    thumbnail: 'assets/images/l0.png',
    images:[
    'assets/images/l1.png',
    'assets/images/l2.png',
    'assets/images/l3.png',
    'assets/images/l4.png',
    'assets/images/l5.png'] },
{ id:2, title:'Твич оформление BlackRaven', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2026', tools:'Figma, Illustrator', type_ru:'Брендинг', type_en:'Branding', 
  thumbnail: 'assets/images/r0.png',
  images:[
  'assets/images/r1.png',
  'assets/images/r2.png',
  'assets/images/r3.png',
  'assets/images/r4.png',
  'assets/images/r5.png',
  'iframe:https://kinescope.io/embed/5jpkQ5C198VLbZAnVq7X6K:56.25%'
] },
  { id:3, title:'Твич оформление Runoka1e', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2025', tools:'Figma, Illustrator', type_ru:'Брендинг', type_en:'Branding', 
    thumbnail: 'assets/images/k0.png',
    images:[
  'assets/images/k1.png',
  'assets/images/k2.png',
  'assets/images/k3.png',
  'assets/images/k4.png',
  'iframe:https://kinescope.io/embed/aYN97YYjaszMtqmVaxEQbM:60.74%'
] },
{ id:4, title:'Твич оформление The Salem Cat', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2026', tools:'Figma', type_ru:'Брендинг', type_en:'Branding',
  thumbnail: 'assets/images/s0.png',
  images:[
    'assets/images/s1.png',
    'assets/images/s2.png',
    'assets/images/s3.png',
    'assets/images/s4.png',
    'assets/images/s5.png',
    'assets/images/s6.png',
    'iframe:https://kinescope.io/embed/atpq3DurYv9MJQYWXMQiB1'
  ] },
  { id:5, title:'Твич оформление Sivilia', cat:'stream', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Стрим', desc_en:'Stream', year:'2025', tools:'Figma', type_ru:'Брендинг', type_en:'Branding', 
thumbnail: 'assets/images/t0.png',
  images:[
  'assets/images/t1.png',
  'assets/images/t2.png',
  'assets/images/t3.png',
  'assets/images/t4.png'
] },
{ id:6, title:'Оформление Astro Girl', cat:'stream', catName:'Stream Design', catName_ru:'Стрим Дизайн', desc_ru:'Футуристичное оформление с использованием высококонтрастной палитры. Включает баннеры «Offline» и баннер профиля. Индустриальные шрифты и детализированная 3D-маска. Выглядит технологично и сразу задает агрессивный игровой тон подкастов.', desc_en:'Futuristic branding with a high-contrast palette. Includes "Offline" and profile banners. Industrial fonts and a detailed 3D mask. It looks high-tech and immediately sets a bold, aggressive gaming tone for podcasts.', year:'2024', tools:'Photoshop, Illustrator', type_ru:'Брендинг', type_en:'Branding', images:['assets/images/st1.png'] },
{ id:7, title:'Оформление Insomniea', cat:'stream', catName:'Stream Design', catName_ru:'Стрим Дизайн', desc_ru:'Мягкий минимализм в сине-голубой гамме с градиентными переходами. Набор включает главный баннер, иконки соцсетей и функциональные кнопки для донатов. Лаконичный логотип и дружелюбный 3D-аватар создают спокойную атмосферу для зрителей.', desc_en:'Soft minimalism featuring a blue-to-cyan gradient palette. The asset kit includes a main banner, social media icons, and functional buttons for donations. A clean, minimalist logo and a friendly 3D avatar create a calm and welcoming atmosphere for the audience.', year:'2024', tools:'Photoshop, Illustrator', type_ru:'Брендинг', type_en:'Branding', images:['assets/images/st2.png'] },
{ id:8, title:'Оформление 4EYZ', cat:'stream', catName:'Stream Design', catName_ru:'Стрим Дизайн', desc_ru:'Динамичный дизайн, вдохновленный культурой стрит-арта и ручными скетчами. Комплексное оформление состоит из баннеров и набора кнопок («Обо мне», «Правила») со стилизованными иконками. Текстуры граффити и яркие оранжевые акценты придают каналу энергичный вид. Канал посвещен культуре граффити и скейтбординга 2000х.', desc_en:'Stream branding for 4EYZ. A dynamic design inspired by street art culture and hand-drawn sketches. This comprehensive kit includes banners and a set of custom buttons ("About Me," "Rules") with stylized icons. Graffiti textures and bold orange accents give the channel an energetic look. The content is dedicated to the 2000s graffiti and skateboarding scene.', year:'2024', tools:'Photoshop, Illustrator', type_ru:'Брендинг', type_en:'Branding', images:['assets/images/st3.png'] },
  { id:9, title:'Любовное зелье', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Хотелось создать нечто мистическое: маленький флакон зелья вечной любви. Есть подвох: если выпьешь его, жизнь будет полна любви, но станет очень короткой ☠️', desc_en:'I wanted to create something mystical: a small potion bottle of eternal love. The catch is: if you drink it, your life may be full of love, but it wont be long ☠', year:'2026', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/b1.png',
  'iframe:https://kinescope.io/embed/aqKfHFgHc2XMA3Wd1cRFe2:100%',
  'assets/images/b2.png',
  'assets/images/b3.png',
  'assets/images/b4.png',
  'assets/images/b5.png',
] },
  { id:10, title:'Револьвер охотника', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Концепт оружия для арсенала охотника на оборотней. Серебряный ствол украшен готическими гравировками, а зазубренные детали напоминают клыки существ, для которых он создан. Рукоять выполнена из фактурного дуба: потертая, но надежная. Вдохновлено эстетикой готических хорроров и серией Resident Evil.', desc_en:'A concept weapon forged for a werewolf hunters arsenal. The silver barrel features gothic engravings, while jagged, fang-like details hint at the creatures it was made to slay. The grip is crafted from textured oak: worn but reliable. Inspired by gothic horror aesthetics and the Resident Evil series.', year:'2025', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/g1.png',
  'assets/images/g2.png',
  'assets/images/g3.png',
  'assets/images/g4.png'
] },
  { id:11, title:'Робо-кролик', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Игривый 3D-концепт: кибернетический кролик с металическими лапками. О чем мечтают электрокролики? О чипированной моркови, разумеется.', desc_en:'A playful 3D concept: cybernetic bunnie with titanium paws. What do cyber rabbits dream about? Microchipping carrots, of course.', year:'2026', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/c1.png',
  'assets/images/c2.png',
  'assets/images/c3.png',
  'assets/images/c4.png'
] },
{ id:12, title:'Грибной эльф', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Решил поработать с системой частиц для создания эффекта валяной шерсти. Так появился этот милый гном, который прячет голову под шляпкой гриба из плотной ткани, чтобы скрыться от людей и лесных хищников.', desc_en:'I decided to work with a particle system to create a realistic felt effect. The result is this cute gnome, who uses a mushroom-shaped fabric hat as camouflage to hide from humans and forest predators.', year:'2026', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/m1.png',
  'assets/images/m2.png'
] },
{ id:13, title:'Бензопила Яндере', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Low-poly модель розовой бензопилы с деталью в форме сердца и надписью «ヤンデレ» (Яндере). Вдохновлено игрой MiSide и её очаровательно безумными персонажами. Текстуры выполнены в стиле Hand-paint: игра на контрасте кавайного обаяния и ярости яндере.', desc_en:'A hand-painted 3D model of a cute pink chainsaw featuring a heart detail and "ヤンデレ" (Yandere) inscription. Inspired by the game MiSide and its adorably unhinged characters. A playful clash of kawaii charm and yandere madness.', year:'2026', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/ch1.png',
  'assets/images/ch2.png',
  'assets/images/ch3.png',
  'assets/images/ch4.png',
  'assets/images/ch5.png'
] },
{ id:14, title:'Девушка с алхимической книгой', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Hand-paint персонаж: ученица мистической академии, увлеченная алхимией. Она часто изучает запрещенные рецепты трансмутации в заброшенных секциях библиотеки. В руках у неё древний фолиант, светящийся арканным мерцанием.', desc_en:'Hand-painted character artwork: a student of a mystical academy with a passion for alchemy. She often studies forbidden transmutation recipes in restricted library sections. She carries an ancient tome that glows with a faint arcane shimmer.', year:'2025', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/w1.png',
  'assets/images/w2.png',
  'assets/images/w3.png',
  'assets/images/w4.png',
  'assets/images/w5.png'
] },
{ id:15, title:'Кошка Луна', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Я нашла 2D-референс кошки и решила перенести его в 3D, создав что-то новое и ориентируясь на художественный стиль Marvel Rivals. Тот редкий случай, когда я полностью довольна результатом.', desc_en:'A practice piece in hand-painted style. After finding a 2D cat reference, I decided to model it in 3D, capturing the art style of Marvel Rivals. This is one of those rare cases where I am truly happy with the final result.', year:'2025', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/ca1.png',
  'iframe:https://kinescope.io/embed/2gLnxAsTn4oFFABFkToXeE:100%',
  'assets/images/ca2.png',
  'assets/images/ca3.png',
  'assets/images/ca4.png',
  'assets/images/ca5.png'
] },
{ id:16, title:'Netcore Витуб-модель для блогера', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Разработка полной модели для блогера. Модель представляет собой редизайн рыжего кота в стилизованном спортивном костюме, выполненную в эстетике 3D-анимации. Включает полный цикл продакшена: скульптинг, ретопологию, текстурирование и, что самое важное, продвинутый риггинг. Модель оснащена полноценными анимациями движения тела и детальной мимикой, настроенной для трекинга лица и глаз в реальном времени.', desc_en:'A complete VTuber model developed for a YouTube content creator. The avatar is a stylized orange cat in a tracksuit, created in a modern 3D animation aesthetic. The project covered the full production cycle: sculpting, retopology, texturing, and most importantly, advanced rigging. The model is equipped with full-body movement animations and detailed facial expressions, optimized for real-time tracking of face and eyes.', year:'2025', tools:'Blender, Substance 3D Painter, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/n1.png',
  'iframe:https://kinescope.io/embed/72Htbh8QVFJZf6pryFQnp1:100%',
  'assets/images/n2.png'
] },
{ id:17, title:'Базовые модели людей', cat:'3d', catName:'3D', catName_ru:'3D', desc_ru:'Базовые модели стилизованных тел мужчины и женщины. Оптимизированная топология, готовая для дальнейшего скульптинга или риггинга.', desc_en:'Stylized male and female base meshes. Optimized topology, ready for further sculpting or rigging.', year:'2024', tools:'Blender, Photoshop', type_ru:'3D', type_en:'3D', images:[
  'assets/images/bo1.png',
  'assets/images/bo2.png',
  'assets/images/bo3.png',
  'assets/images/bo4.png'
] },
    { id:18, title:'Crafts Game UI', cat:'ui', catName:'UI Design', catName_ru:'UI Design', desc_ru:'UI для крафтовой игры. Инвентарь, меню крафта, торговля.', desc_en:'UI for a crafting game. Inventory, crafting menu, trading.', year:'2025', tools:'Figma, Photoshop', type_ru:'UI/UX', type_en:'UI/UX', images:[
    'assets/images/cr1.png',
    'assets/images/cr2.png',
    'assets/images/cr3.png',
    'assets/images/cr4.png'
  ] },
    { id:19, title:'Web GNX продвижение', cat:'ui', catName:'UI Design', catName_ru:'UI Design', desc_ru:'Продвижение веб-платформы GNX. Лендинг, дашборд, аналитика.', desc_en:'GNX web platform promotion. Landing page, dashboard, analytics.', year:'2025', tools:'Figma, Illustrator', type_ru:'UI/UX', type_en:'UI/UX', images:[
    'assets/images/gn1.png',
    'assets/images/gn2.png',
    'assets/images/gn3.png',
    'assets/images/gn4.png',
    'assets/images/gn5.png'
  ] },
  { id:20, title:'Парк отдыха Озера', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Логотип для парка «Озера» в трёх стилях. Основной символ - инь‑ян с рыбой (отсылка к рыбалке). Цветовая гамма: голубой, зелёный, белый и серый (трава, вода, горы). В типографику вписала геометку в букву «а» и крючок в букву «з». Третий вариант - волнистые линии, имитирующие холмы и водную гладь. Логотип вписывается в любые природные фактуры', desc_en:'A logo for Ozyora Park presented in three styles. The primary symbol is a yin-yang fish, a nod to the location’s fishing heritage. The palette includes blue, green, white, and gray, representing grass, water, and mountains. The typography integrates a map pin into the letter "a" and a fishhook into the letter "z." The third version features wavy lines mimicking rolling hills and calm water. The design seamlessly adapts to any natural texture.', year:'2022', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', images:[
  'assets/images/lo1.png',
  'assets/images/lo2.png',
  'assets/images/lo3.png',
  'assets/images/lo9.png',
  'assets/images/lo10.png'
] },
{ id:21, title:'YumYum логотип', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Визуальный язык проекта построен на сочетании «кавайной» эстетики и минимализма. Главный герой - медвежонок - делает бренд доступным и эмоциональным. Мягкие, «облачные» линии шрифта и графики подчеркивают нежность текстур корейского стрит-фуда, превращая логотип в визуальное обещание чего-то по-настоящему вкусного.', desc_en:'The visual language combines "kawaii" aesthetics with minimalism. The main character, a bear cub, makes the brand accessible and emotional. Soft, "cloud-like" lines in both font and graphics emphasize the delicate textures of Korean street food, turning the logo into a visual promise of something truly delicious.', year:'2026', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', images:[
  'assets/images/lo4.png',
  'assets/images/lo13.png',
  'assets/images/lo14.png'
] },
{ id:22, title:'Логотип Snoopie', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Snoopie - это проект об искренней любви к еде и домашнему уюту. Главным героем канала стал маскот: белая собака с выразительными круглыми щечками и контрастными черными ушками. Округлые формы персонажа транслируют дружелюбие и «аппетитность», что идеально подходит для кулинарного контента.', desc_en:'Snoopie is a project about a sincere love for food and home comfort. The channel’s protagonist is a mascot: a white dog with expressive round cheeks and contrasting black ears. The character’s rounded shapes convey friendliness and "appetite," which is ideal for culinary content.', year:'2025', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', images:[
  'assets/images/lo5.png',
  'assets/images/lo6.png',
  'assets/images/lo15.png'
] },
{ id:23, title:'Логотип Keep your face to the Sun', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Визуальная концепция фестиваля вдохновлена эпохой хиппи, её свободой и близостью к природе. Главным акцентом стали стилизованные подсолнухи, выполненные в «наивных» формах. Типографика имеет необычный акцидентный шрифт с мягкими, текучими линиями отсылает к постерам 70-х, создавая ощущение ритма и музыкальности. Теплая палитра погружает в атмосферу золотого часа и сбора урожая.', desc_en:'The visual concept is inspired by the hippie era, its freedom, and its closeness to nature. The main focus is on stylized sunflowers in "naive" forms. The typography features a unique display font with soft, fluid lines reminiscent of 70s posters, creating a sense of rhythm and musicality. The warm palette immerses the viewer in the atmosphere of golden hour and harvest time.', year:'2025', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', images:[
  'assets/images/lo7.png',
  'assets/images/lo11.png'
] },
{ id:24, title:'Логотип KinetiK', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Визуальная концепция построена на диалоге между традицией и авангардом. Классический вертикальный ствол с изящным серифом противопоставлен футуристичным, перетекающим диагоналям. Верхний плавный объем и нижнее более угловатое основание создают динамический баланс. Проект идеально подходит для элитных архитектурных бюро, стремящихся к синтезу классики и современности.', desc_en:'The visual concept is built on a dialogue between tradition and the avant-garde. A classic vertical stem with an elegant serif is contrasted with futuristic, flowing diagonals. The smooth upper volume and more angular lower base create a dynamic balance. The project is ideal for elite architectural firms seeking a synthesis of classic and modern styles.', year:'2025', tools:'Illustrator, Photoshop', type_ru:'Брендинг', type_en:'Branding', images:[
  'assets/images/lo8.png',
  'assets/images/lo12.png'
] },
{ id: 25,
  title:'Логотип и вывеска кофейни Лисья Нора',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Визуальное решение построено на метафоре уюта. Геометрия логотипа - круг, который одновременно считывается как вид на кофейную чашку сверху и как уютная нора. Внутри - лаконичный силуэт лисы, формирует кофейный «рисунок». Уникальный шрифтовой акцент поддерживает концепцию: пластика букв имитирует пушистый лисий хвост, добавляя бренду мягкости и тепла',
  desc_en:'The visual solution is built on a metaphor of comfort. The logo geometry is a circle that reads simultaneously as a top view of a coffee cup and a cozy burrow. Inside, a minimalist fox silhouette forms a latte art pattern. A unique typographic accent supports the concept: the letterforms mimic a fluffy fox tail, adding softness and warmth to the brand.',
  year:'2021',
  tools:'Illustrator, Photoshop',
  type_ru:'Логотип / Вывеска',
  type_en:'Logo / Signage',
  thumbnail:'assets/images/li1.png',
  images:[
    'assets/images/li1.png',
    'assets/images/li2.png',
    'assets/images/li3.png'
  ]
  },
{ id:26, title:'Иллюстрации для продвижения Яндекс Директ', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Визуализировать анонс нового функционала «Группы» в Директе для бета-тестирования. Разработка ключевой 3D-композиции с абстрактными формами (сферы), символизирующими объединение пользователей в группы. Премиальный технологичный стиль (скевоморфизм 3D-объектов) с использованием яркой контрастной палитры (синий, желтый) на темном фоне.', desc_en:'Visualizing the announcement of the new "Groups" functionality in Direct for beta testing. Development of a key 3D composition with abstract spherical shapes symbolizing the unification of users into groups. Premium tech style (3D object skeuomorphism) using a bright, high-contrast palette of blue and yellow on a dark background.', year:'2024', tools:'Illustrator, Photoshop', type_ru:'Реклама', type_en:'Advertising', images:[
  'assets/images/y1.png',
  'assets/images/y2.png',
  'assets/images/y3.png'
] },
{ id:27, title:'Яндекс продвижение', cat:'graphic', catName:'Graphic Design', catName_ru:'Graphic Design', desc_ru:'Иллюстрации для интерфейса «Простой монетизации». Для оформления преимуществ сервиса был разработан сет из четырех иллюстраций. В основе — метафорический подход: Ракета и шестерня - запуск сложных настроек. Свинья-копилка - аккумулирование выплат. Телефонная трубка - поддержка и легкая интеграция. Смартфон и графики - аналитика в одном кабинете. Использование ярких акцентов (лаймовый цвет) на глубоком фиолетовом фоне помогает выделить ключевые объекты и направляет взгляд пользователя при скролле.', desc_en:'A set of four illustrations developed to showcase service benefits. The metaphors include: a rocket and gear for launching complex settings, a piggy bank for accumulating payouts, a telephone handset for support and easy integration, and a smartphone with charts for all-in-one analytics. Bright lime accents on a deep purple background highlight key objects and guide the users eye while scrolling.', year:'2024', tools:'Illustrator, Photoshop', type_ru:'Реклама', type_en:'Advertising', images:[
  'assets/images/y4.png',
  'assets/images/y5.png'
] 
},
  { id: 28,
  title:'Флоу Призрака',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Обложка для музыкального сингла в жанре поп-готика/альтернатива. Нужна была мистическая, но стильная картинка. Я сфокусировалась на персонажах и атмосфере, вдохновленной Star Wars. Мрачный лес, контрастное освещение (красный неон против глубоких теней) и дымные эффекты, чтобы подчеркнуть название. Шрифт логотипа тоже подбирала под настроение: строгий, но с «призрачным» акцентом.',
  desc_en:'Music single cover for a pop-gothic/alternative track. The goal was a mystical yet stylish visual. I focused on characters and atmosphere inspired by Star Wars. A dark forest, high-contrast lighting (red neon vs. deep shadows), and smoke effects highlight the title. I chose the logo typography to match the mood: clean and bold, but with a "ghostly" touch.',
  year:'2024',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images: [
    'assets/images/il1.png',
    'iframe:https://kinescope.io/embed/rAEduPFVpyiJiTjB8o43Qe:100%'
  ]
},
{ id: 29,
  title:'Makillian',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Иллюстрация для проекта Makillian.Идея была смешать уличную моду с классической экипировкой шиноби.Разработала трех разных персонажей в эстетике ниндзя. Динамику добавила через летящие доллары и размытие на фоне.',
  desc_en:'Illustration for the Makillian project. The idea was to blend streetwear with classic shinobi gear. I designed three distinct characters. The dynamic energy was added through flying banknotes and background motion blur.',
  year:'2025',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images:['assets/images/il2.png', 'assets/images/il3.png']
},
{ id: 30,
  title:'Jinx (Fan Art for Arcane / League of Legends)',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Мое видение Джинкс из «Аркейн». Задача была передать ее взрывной характер через взгляд и детали, не перегружая композицию. Сфокусировался на портрете и текстурах: кожа, татуировки в виде облаков, латексный топ. Добавил неоновые акценты (синий на оружии и фиолетовый на рукаве) и мягкий блум, чтобы создать эффект вечернего Пилтовера на фоне. Взгляд получился глубоким и немного таинственным.',
  desc_en:'My take on Jinx from Arcane. The goal was to capture her explosive personality through her expression and specific details without overcomplicating the composition. I focused on the portrait and textures: skin, cloud tattoos, and the latex top. Added neon accents (blue on the weapon and purple on the sleeve) and a soft bloom effect to evoke the feeling of evening Piltover in the background. The gaze turned out deep and slightly mysterious.',
  year:'2024',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images:['assets/images/il9.png']
},
{ id: 31,
  title:'ДНД маска F4',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Дизайн магического артефакта для RPG. Идея была в том, чтобы маска выглядела древней, вырезанной из дерева, но при этом имела магическую силу. Совместила форму совы с кельтскими узорами. Текстура старого, потертого дерева, золотые вставки и руны, которые подсвечиваются изнутри. Маска выглядит тяжелой и могущественной',
  desc_en:'A magical artifact design for an RPG. The goal was an ancient, carved wood look with a magical essence. I blended owl forms with Celtic patterns, creating weathered wood textures, gold inlays, and internally glowing runes. The mask feels heavy and powerful.',
  year:'2025',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images:['assets/images/il5.png', 'assets/images/il6.png', 'assets/images/il7.png']
},
{ id: 32,
  title:'Магическое зелье',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Стилизованный пропс для игры. Нужен был чистый, понятный рендер бутылочки со здоровьем. Главная работа была над материалами: прозрачность стекла, текстура пробки и переливающаяся жидкость внутри. Добавила этикетку на веревке для детализации. Всё выглядит немного «игрушечно», но вкусно.',
  desc_en:'Stylized game prop. A clean, recognizable health potion vial render. I focused on materials: transparent glass, cork texture, and a shimmering liquid interior. Added a tied label for detail. The overall look is charmingly toy-like but appealing.',
  year:'2025',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images:['assets/images/il8.png']
},
{ id: 33,
  title:'Серана иллюстрация',
  cat:'2d',
  catName:'2D Art',
  catName_ru:'2D Art',
  desc_ru:'Серана - один из самых знаковых персонажей Скайрима. Я хотела показать ее в драматичный момент, когда она решает свою судьбу под кровавой луной. Построил всю композицию на силуэте. Огромное, ярко-красное солнце на фоне («Кровавая луна») и глубокие, почти черные тени на лице. Красный свет контуром ложится на волосы, создавая тревожный, но сильный образ вампирши.',
  desc_en:'Serana is one of Skyrim’s most iconic characters. I wanted to depict her in a dramatic moment, deciding her fate under a blood moon. I built the entire composition around the silhouette. A massive, crimson sun ("Blood Moon") in the background contrasting with deep, near-black shadows on her face. The red light contours her hair, creating a haunting yet strong image of the vampire.',
  year:'2023',
  tools:'Photoshop',
  type_ru:'Иллюстрация',
  type_en:'Illustration',
  images:['assets/images/il4.png']
},
{ id: 34,
  title:'Баннер для парка Озера',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Разработан дизайн-макеты для баннеров и билбордов, привлекающие внимание к загородному отдыху. Композиция построена на контрасте чистого белого поля с четкой типографикой и ярких, атмосферных фотографий локации. Минимализм с яркими акцентами. Рваный край маски фотографии добавляет динамики и подчеркивает связь с природой.',
  desc_en:'Design layouts for banners and billboards attracting attention to countryside recreation. The composition is built on the contrast of a clean white field with crisp typography and bright, atmospheric location photography. Minimalism with vibrant accents: the torn edge of the photo mask adds dynamics and emphasizes the connection with nature.',
  year:'2022',
  tools:'Photoshop, Illustrator',
  type_ru:'Баннер',
  type_en:'Banner',
  images:[
    'assets/images/o1.png',
    'assets/images/o2.png',
    'assets/images/o3.png',
    'assets/images/o4.png'
  ]
},
{ id: 35,
  title:'Штыковские двери айдентика',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Основная цель проекта - систематизировать визуальный контент компании. Для каталогов была выбрана чистая верстка с акцентом на интерьерные фото, что помогает клиенту визуализировать продукт в пространстве. В наружной рекламе использован принцип минимализма: крупный логотип, четкое УТП и сбалансированная цветовая гамма, работающая на узнаваемость бренда с 1995 года. Результат - строгая, надежная и современная айдентика мебельного производства.',
  desc_en:'The main goal of the project was to systematize the company’s visual content. A clean layout with an emphasis on interior photography was chosen for catalogs to help clients visualize the product in space. Outdoor advertising follows the principle of minimalism: a large logo, clear USP, and a balanced color scheme that has supported brand recognition since 1995. The result is a strict, reliable, and modern identity for a furniture manufacturer.',
  year:'2022',
  tools:'Illustrator, Photoshop',
  type_ru:'Айдентика',
  type_en:'Identity',
  thumbnail:'assets/images/sh1.png',
  images:[
    'assets/images/sh1.png',
    'assets/images/sh2.png',
    'assets/images/sh3.png',
    'assets/images/sh4.png',
    'assets/images/sh5.png'
  ]
},
{ id: 36,
  title:'Визитка вязанные игрушки',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Создана визитка, которая транслирует радость и креатив. Геометрическая мозаика символизирует структуру вязаного полотна и разнообразие изделий. Маскот-лягушонок добавляет бренду дружелюбности и подчеркивает нишу (игрушки). Типографика: Сочетание акцентного гротеска и каллиграфического логотипа создает баланс между современным подходом и авторским почерком.',
  desc_en:'A business card designed to broadcast joy and creativity. A geometric mosaic symbolizes the structure of knitted fabric and the variety of products. A frog mascot adds friendliness and highlights the niche (toys). Typography: the combination of a bold sans-serif and a calligraphic logo creates a balance between a modern approach and a personal touch.',
  year:'2024',
  tools:'Illustrator, Photoshop',
  type_ru:'Визитка',
  type_en:'Business Card',
  images:['assets/images/lu1.png']
},
{ id: 37,
  title:'Буклет пекарни Жернова',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Визуальная концепция базируется на принципе «вкус настоящего хлеба». Естественные оттенки и паттерны с графикой зерна создают ощущение премиального, но при этом понятного ремесленного продукта. Контрастная желтая инфографика выделяет ключевые предложения и цены, не нарушая общую теплую атмосферу макета.',
  desc_en:'The visual concept is based on the "taste of real bread" principle. Natural shades and patterns with grain graphics create the feel of a premium yet accessible artisanal product. Contrasting yellow infographics highlight key offers and prices without disturbing the overall warm atmosphere of the layout.',
  year:'2024',
  tools:'Illustrator, Photoshop',
  type_ru:'Буклет',
  type_en:'Brochure',
  images:['assets/images/zh1.png']
},
{ id: 38,
  title:'Визитка Дом Дизеля',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Технологичность и структурность. В основе визуального решения лежит строгий геометрический паттерн из гексагонов, отсылающий к кристаллическим решеткам металла и сложным механизмам. Стиль: Индустриальный минимализм. Сочетание глубокого винного оттенка и светло-серого цвета создает премиальный, но строгий образ. Уверенный гротеск обеспечивает высокую читаемость контактных данных, подчеркивая профессионализм сервиса.',
  desc_en:'Technology and structure: the visual solution is based on a strict geometric pattern of hexagons, referring to metal crystal lattices and complex mechanisms. Style: industrial minimalism. The combination of a deep wine shade and light gray creates a premium yet rigorous image. Confident typography ensures high readability of contact data, emphasizing the professionalism of the service.',
  year:'2023',
  tools:'Illustrator, Photoshop',
  type_ru:'Визитка',
  type_en:'Business Card',
  images:['assets/images/dd1.png']
},
{ id: 39,
  title:'Свадебная полиграфия',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'План рассадки гостей и элементы свадебной айдентики. Стиль: Fine Art - легкость, обилие «воздуха» и ботанические иллюстрации в акварельной технике. Использование элегантной антиквы в сочетании с изящным каллиграфическим шрифтом. Тёплая, приглушенная цветовая гамма подчеркивает нежность события. Чистая и понятная верстка, которая выполняет навигационную функцию и служит эстетичным дополнением декора церемонии',
  desc_en:'Guest seating plan and wedding identity elements. Style: Fine Art with lightness, plenty of "white space," and botanical illustrations in watercolor technique. The use of elegant serif typography combined with a graceful calligraphic font. A warm, muted color palette emphasizes the tenderness of the event. Clean and clear layout serves both a navigational function and an aesthetic addition to the ceremony decor.',
  year:'2025',
  tools:'Photoshop, Illustrator',
  type_ru:'Пресс-волл',
  type_en:'Press Wall',
  images:['assets/images/we1.png']
},
{ id: 40,
  title:'Фотографии работ',
  cat:'graphic',
  catName:'Graphic Design',
  catName_ru:'Graphic Design',
  desc_ru:'Подборка фотографий готовых работ: сертификаты, наградная продукция и сувениры из дерева, бейджи, виниловая пленка и другие реализованные проекты.',
  desc_en:'A selection of photos featuring finished works: certificates, award products, wooden souvenirs, badges, vinyl wraps, and other realized projects.',
  year:'2021',
  tools:'Photoshop, Illustrator',
  type_ru:'Фотографии',
  type_en:'Photos',
  thumbnail:'assets/images/po1.png',
  images:[
    'assets/images/po1.png',
    'assets/images/po2.png',
    'assets/images/po3.png',
    'assets/images/po4.png',
    'assets/images/po5.png',
    'assets/images/po6.png'
  ]
},
{ id:41, title:'Дизайн интерьера в стиле Контемпорари', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', 
  desc_ru:'Дипломная работа, представляющая собой комплексное решение жилого пространства. Основная задача - создание функционального, современного интерьера с акцентом на эргономику и уют. Разработка планировочного решения и зонирования. Подбор цветовой палитры и материалов отделки. Создание подробных чертежей (планы пола, потолка, развертки стен). 3д визуализация всех помещений: гостиной, спальни, детской и кухни', 
  desc_en:'A graduation project featuring a comprehensive interior solution for a residential space. The primary goal was to create a functional, modern environment with an emphasis on ergonomics and comfort. Developed the floor plan, layout, and functional zoning. Selected color palettes, finishing materials, and furniture. Created technical documentation, including floor/ceiling plans and wall elevations. Produced high-end 3D visualizations for the living room, bedroom, nursery, and kitchen.', year:'2019', tools:'Blender, Photoshop', type_ru:'Интерьер', type_en:'Interior', images:[
  'assets/images/in1.png',
  'assets/images/in2.png',
  'assets/images/in3.png',
  'assets/images/in4.png',
  'assets/images/in5.png',
  'assets/images/in6.png',
  'assets/images/in7.png',
  'assets/images/in8.png'
] },
{ id:42, title:'Визуализация интерьерных Лофт дверей', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', 
  desc_ru:'Разработка уникального дизайна дверей с эффектом состаренности. Вдохновением послужила эстетика американских кампусов 90-х годов: сочетание гаражного стиля и винтажных деталей. Концептуальное решение «двери с историей». Детальная проработка фурнитуры (массивная металлическая ручка, имитация потертостей). Создание текстуры с эффектом многослойной краски и патины.', 
  desc_en:'A unique door design focusing on an aged, industrial look. Inspired by the raw aesthetics of 90s American campuses: a blend of "garage" style and vintage details. Conceptualized the "doors with a history" look. Detailed the hardware, including heavy metal handles and simulated wear-and-tear. Created multi-layered paint textures with realistic patina and distressed effects.', year:'2021', tools:'3ds Max, Photoshop', type_ru:'Визуализация', type_en:'Visualization', images:[
  'assets/images/in9.png',
  'assets/images/in10.png'
] },
{ id:43, title:'Визуализация интерьерных дверей', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', desc_ru:'Фотореалистичная визуализация дверных групп в интерьерном пространстве. Визуализация текстуры натурального дерева с контрастным синим покрытием. Настройка освещения и материалов для демонстрации того, как объект взаимодействует с классической лепниной и библиотечными стеллажами.', 
  desc_en:'Photorealistic visualization of door units integrated into a finished classical interior space. Rendered natural wood textures with a contrasting blue finish. Adjusted lighting and materials to demonstrate how the object interacts with classical moldings and library shelving.', year:'2021', tools:'3ds Max, Photoshop', type_ru:'Визуализация', type_en:'Visualization', images:[
  'assets/images/in13.png'
] },
{ id:44, title:'Визуализация шкафов', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', 
  desc_ru:'Разработка дизайна и визуализация новой продукции - шкафов-купе. Цель - показать эстетическую привлекательность и современный вид стандартных систем хранения. Моделирование конструкции с комбинированными фасадами (белый глянец + текстура светлого дерева). Визуализация объекта в интерьере для демонстрации габаритов и сочетаемости с другими предметами мебели.', 
  desc_en:'Design development and visualization of a new cabinetry line. The goal was to showcase the aesthetic appeal and modern look of standard storage systems. Modeled the structure featuring combined facades (glossy white + light wood texture). Visualized the unit within an interior context to demonstrate scale and compatibility with other furniture pieces.', year:'2021', tools:'3ds Max, Photoshop', type_ru:'Визуализация', type_en:'Visualization', images:[
  'assets/images/in11.png'
] },
{ id:45, title:'Визуализация настенного светового пано', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', 
  desc_ru:'Интерьерный арт-объект, совмещающий функции декоративного панно и источника мягкого вечернего света. Геометрическая композиция из деревянных реек. Интеграция скрытой светодиодной подсветки, создающей игру теней и объема на стене.', 
  desc_en:'An interior art piece that functions as both a decorative panel and a source of soft ambient light. Designed a geometric composition using wooden slats. Integrated hidden LED backlighting to create a play of shadows and volume on the wall surface. Designed a minimalist console unit to complement the lighting composition.', year:'2021', tools:'3ds Max, Blender, Photoshop', type_ru:'Визуализация', type_en:'Visualization', images:[
  'assets/images/in12.png'
] },
{ id:46, title:'Арт-объект для парка отдыха Штыковские пруды', cat:'interior', catName:'Interior Design', catName_ru:'Interior Design', 
  desc_ru:'Разработка масштабного уличного арт-объекта в стиле полигональной графики. Проектирование сложной многогранной формы объекта. Цветовое решение, основанное на этнических паттернах и яркой геометрии. Авторский надзор/участие в процессе сборки и покраски. Объект предназначен для взаимодействия с посетителями парка.', 
  desc_en:'A large-scale outdoor art installation designed in a low-poly/polygonal style. Engineered the complex multi-faceted geometry of the structure. Developed a color scheme based on ethnic patterns and bold geometric shapes. Supervised the assembly process. Designed for interactive use by park visitors.', year:'2021', tools:'Blender, Photoshop', type_ru:'Арт-объект', type_en:'Art Object', images:[
  'assets/images/in15.png',
  'assets/images/in16.png'
] },
{ id:47, title:'Ghost Game UI', cat:'ui', catName:'UI Design', catName_ru:'UI Design', 
  desc_ru:'UI-дизайн элемента интерфейса для игры о поимке призраков. Дизайн представляет собой досье, с помощью которого игрок может определить личность и тип призрака через дедукцию и изучение его поведения. Реализовано в мрачной эстетике хоррор-игр.', 
  desc_en:'UI design for an interface element in a ghost-catching game. The design is presented as a dossier that allows the player to identify the ghosts identity and type through deduction and studying its behavior. The visual style follows the dark aesthetic of horror games.', year:'2025', tools:'Photoshop', type_ru:'UI/UX', type_en:'UI/UX', images:[
    'assets/images/go1.png',
    'assets/images/go2.png',
    'assets/images/go3.png'
  ] }];

// ID проектов, которые открываются в вертикальном модале (только изображения)
const VERTICAL_PROJECT_IDS = [0, 1, 2, 3, 4, 5, 18, 19];

// ---------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ----------
let currentLang = 'ru';
let currentOldProject = null;
let currentOldImageIndex = 0;

// DOM элементы
const projectsGrid = document.getElementById('projectsGrid');
const catTabs = document.querySelectorAll('.cat-tab');
const accItems = document.querySelectorAll('.acc-item');
const langToggle = document.getElementById('langToggle');
const langCurrent = document.querySelector('.lang-current');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const navHamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Старый модал (горизонтальный)
const oldModal = document.getElementById('modalOverlay');
const oldModalClose = document.getElementById('modalClose');
const modalMainImg = document.getElementById('modalMainImg');
const modalCat = document.getElementById('modalCat');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalMeta = document.getElementById('modalMeta');
const modalThumbs = document.getElementById('modalThumbs');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

// Вертикальный модал
const verticalModal = document.getElementById('verticalModalOverlay');
const verticalClose = document.getElementById('verticalModalClose');
const verticalContainer = document.getElementById('verticalModalContainer');
const verticalImagesList = document.getElementById('verticalImagesList');
const scrollHint = document.getElementById('scrollHint');

// ---------- ФУНКЦИЯ ПОСТРОЕНИЯ СЕТКИ ПРОЕКТОВ ----------
function buildProjectsGrid() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  PROJECTS.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.setAttribute('data-cat', proj.cat);
    card.setAttribute('data-project', proj.id);
    const thumbnailSrc = proj.thumbnail ? proj.thumbnail : proj.images[0];
    card.innerHTML = `
      <div class="proj-img-wrap">
        <img src="${thumbnailSrc}" alt="${proj.title}" loading="lazy" />
        <div class="proj-hover">
          <span class="proj-cat">${currentLang === 'ru' ? proj.catName_ru : proj.catName}</span>
          <h3 class="proj-name">${proj.title}</h3>
          <span class="proj-view-icon">→</span>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(proj.id);
    });
    projectsGrid.appendChild(card);
  });
  updateCategoryVisibility();
}

// Обновление видимости карточек по активной категории
function updateCategoryVisibility() {
  const activeTab = document.querySelector('.cat-tab.active');
  if (!activeTab) return;
  const currentCat = activeTab.getAttribute('data-cat');
  const cards = document.querySelectorAll('.proj-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (currentCat === 'all' || cardCat === currentCat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ---------- ОТКРЫТИЕ МОДАЛА (ВЫБОР ТИПА) ----------
function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  if (VERTICAL_PROJECT_IDS.includes(projectId)) {
    openVerticalModal(project);
  } else {
    openOldModal(project);
  }
}

// ========== СТАРЫЙ МОДАЛ (горизонтальный, с описанием) ==========
function openOldModal(project) {
  currentOldProject = project;
  currentOldImageIndex = 0;
  
  modalCat.innerText = currentLang === 'ru' ? project.catName_ru : project.catName;
  modalTitle.innerText = project.title;
  modalDesc.innerText = currentLang === 'ru' ? project.desc_ru : project.desc_en;
  
  const yearLabel = currentLang === 'ru' ? 'Год' : 'Year';
  const typeLabel = currentLang === 'ru' ? 'Тип' : 'Type';
  const toolsLabel = currentLang === 'ru' ? 'Инструменты' : 'Tools';
  modalMeta.innerHTML = `
    <div class="modal-meta-item"><span class="modal-meta-label">${yearLabel}</span><span class="modal-meta-value">${project.year}</span></div>
    <div class="modal-meta-item"><span class="modal-meta-label">${typeLabel}</span><span class="modal-meta-value">${currentLang === 'ru' ? project.type_ru : project.type_en}</span></div>
    <div class="modal-meta-item"><span class="modal-meta-label">${toolsLabel}</span><span class="modal-meta-value">${project.tools}</span></div>
  `;
  
  renderOldModalImage();
  renderOldModalThumbs();
  
  oldModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderOldModalImage() {
  if (!currentOldProject) return;
  const media = currentOldProject.images[currentOldImageIndex];
  const isIframe = typeof media === 'string' && media.startsWith('iframe:');

  // Удаляем любой существующий iframe-контейнер
  const existingIframeContainer = modalMainImg.parentNode.querySelector('.iframe-container');
  if (existingIframeContainer) existingIframeContainer.remove();

  // Сбрасываем стили изображения
  modalMainImg.style.display = 'block';
  modalMainImg.style.width = '';
  modalMainImg.style.height = '';
  modalMainImg.style.objectFit = 'contain';

  if (isIframe) {
    modalMainImg.style.display = 'none';

    let iframePart = media.slice(7);
    let paddingPercent = '56.25%'; // 16:9 по умолчанию

    // Извлекаем процент, если он указан (например :100%)
    const percentMatch = iframePart.match(/:(\d+(?:\.\d+)?%)$/);
    if (percentMatch) {
      paddingPercent = percentMatch[1];
      iframePart = iframePart.slice(0, -(paddingPercent.length + 1));
    }

    const container = document.createElement('div');
    container.className = 'iframe-container';
    container.style.position = 'relative';
    container.style.paddingTop = paddingPercent;
    container.style.width = '100%';
    container.style.backgroundColor = '#f4f6f8';

    // Индикатор загрузки (светлый фон)
    const loader = document.createElement('div');
    loader.textContent = 'Загрузка...';
    loader.style.cssText = `
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      background-color: #f4f6f8; color: #9098AE;
      font-size: 1rem; font-weight: 500; z-index: 2;
      pointer-events: none; font-family: monospace;
    `;

    const iframe = document.createElement('iframe');
    iframe.src = iframePart;
    iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;';
    iframe.frameborder = '0';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    iframe.addEventListener('load', () => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    });

    container.appendChild(loader);
    container.appendChild(iframe);
    modalMainImg.parentNode.insertBefore(container, modalMainImg.nextSibling);
  } else {
    modalMainImg.src = media;
    modalMainImg.alt = currentOldProject.title;
  }

  // Обновляем активный класс миниатюр
  document.querySelectorAll('.modal-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentOldImageIndex);
  });
  scrollToActiveThumb();
}

function renderOldModalThumbs() {
  if (!modalThumbs) return;
  modalThumbs.innerHTML = '';
  currentOldProject.images.forEach((src, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'modal-thumb' + (idx === 0 ? ' active' : '');
    const isIframe = typeof src === 'string' && src.startsWith('iframe:');
    if (isIframe) {
      thumb.innerHTML = `
        <div style="background: #1e1e2a; display: flex; align-items: center; justify-content: center; height: 100%;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <polygon points="9 8 17 12 9 16" fill="white"/>
          </svg>
          <span style="color:white; margin-left:4px;">Видео</span>
        </div>
      `;
    } else {
      thumb.innerHTML = `<img src="${src}" alt="thumb ${idx+1}" loading="lazy" />`;
    }
    thumb.addEventListener('click', () => {
      currentOldImageIndex = idx;
      renderOldModalImage();
      scrollToActiveThumb();
    });
    modalThumbs.appendChild(thumb);
  });
}

function prevOldImage() {
  if (!currentOldProject) return;
  currentOldImageIndex = (currentOldImageIndex - 1 + currentOldProject.images.length) % currentOldProject.images.length;
  renderOldModalImage();
}

function nextOldImage() {
  if (!currentOldProject) return;
  currentOldImageIndex = (currentOldImageIndex + 1) % currentOldProject.images.length;
  renderOldModalImage();
}

function closeOldModal() {
  oldModal.classList.remove('open');
  document.body.style.overflow = '';
  currentOldProject = null;
}

// ========== ВЕРТИКАЛЬНЫЙ МОДАЛ (только изображения, подсказка) ==========
let hintTimeout = null;
let hintHidden = false;

function openVerticalModal(project) {
  verticalImagesList.innerHTML = '';
  project.images.forEach((src, idx) => {
    const imgWrap = document.createElement('div');
    imgWrap.className = 'vertical-img-item';
    
    if (typeof src === 'string' && src.startsWith('iframe:')) {
      let iframeSrc = src.slice(7);
      iframeSrc = iframeSrc.replace(/:\d+(?:\.\d+)?%$/, '');
      
      let width = 1440, height = 600;
      const widthMatch = iframeSrc.match(/[?&]width=(\d+)/i);
      const heightMatch = iframeSrc.match(/[?&]height=(\d+)/i);
      if (widthMatch) width = parseInt(widthMatch[1]);
      if (heightMatch) height = parseInt(heightMatch[1]);
      
      const paddingPercent = (height / width * 100).toFixed(3);
      
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = '100%';
      wrapper.style.paddingTop = paddingPercent + '%';
      wrapper.style.backgroundColor = '#f4f6f8';
      
      // Индикатор загрузки (светлый фон)
      const loader = document.createElement('div');
      loader.textContent = 'Загрузка...';
      loader.style.cssText = `
        position: absolute; top: 0; left: 0;
        width: 100%; height: 100%;
        display: flex; align-items: center; justify-content: center;
        background-color: #f4f6f8; color: #9098AE;
        font-size: 1rem; font-weight: 500; z-index: 2;
        pointer-events: none; font-family: monospace;
      `;
      
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;';
      iframe.frameborder = '0';
      iframe.allowFullscreen = true;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      
      iframe.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
      });
      
      wrapper.appendChild(loader);
      wrapper.appendChild(iframe);
      imgWrap.appendChild(wrapper);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} ${idx+1}`;
      img.loading = 'lazy';
      imgWrap.appendChild(img);
    }
    
    verticalImagesList.appendChild(imgWrap);
  });
  
  verticalModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  verticalContainer.scrollTop = 0;
  
  if (scrollHint) {
    scrollHint.style.display = 'flex';
    hintHidden = false;
    if (hintTimeout) clearTimeout(hintTimeout);
    hintTimeout = setTimeout(() => {
      if (scrollHint && !hintHidden) {
        scrollHint.style.display = 'none';
        hintHidden = true;
      }
    }, 4000);
  }
  
  const onScroll = () => {
    if (scrollHint && !hintHidden) {
      scrollHint.style.display = 'none';
      hintHidden = true;
      verticalContainer.removeEventListener('scroll', onScroll);
    }
  };
  verticalContainer.addEventListener('scroll', onScroll, { once: true });
  
  updateScrollHintText();
}

function closeVerticalModal() {
  verticalModal.classList.remove('open');
  document.body.style.overflow = '';
  if (hintTimeout) clearTimeout(hintTimeout);
}

function updateScrollHintText() {
  if (!scrollHint) return;
  const span = scrollHint.querySelector('span');
  if (span) {
    span.innerText = currentLang === 'ru' ? 'Листай вниз' : 'Scroll down';
  }
}

// ---------- ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ----------
function applyLanguage(lang) {
  currentLang = lang;
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();
  
  document.querySelectorAll('[data-ru][data-en]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (val !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerText = val;
      }
    }
  });
  
  document.querySelectorAll('.proj-card').forEach((card, idx) => {
    const proj = PROJECTS[idx];
    if (proj) {
      const catSpan = card.querySelector('.proj-cat');
      if (catSpan) {
        catSpan.innerText = lang === 'ru' ? proj.catName_ru : proj.catName;
      }
    }
  });
  
  if (oldModal && oldModal.classList.contains('open') && currentOldProject) {
    modalCat.innerText = lang === 'ru' ? currentOldProject.catName_ru : currentOldProject.catName;
    modalDesc.innerText = lang === 'ru' ? currentOldProject.desc_ru : currentOldProject.desc_en;
    const yearLabel = lang === 'ru' ? 'Год' : 'Year';
    const typeLabel = lang === 'ru' ? 'Тип' : 'Type';
    const toolsLabel = lang === 'ru' ? 'Инструменты' : 'Tools';
    modalMeta.innerHTML = `
      <div class="modal-meta-item"><span class="modal-meta-label">${yearLabel}</span><span class="modal-meta-value">${currentOldProject.year}</span></div>
      <div class="modal-meta-item"><span class="modal-meta-label">${typeLabel}</span><span class="modal-meta-value">${lang === 'ru' ? currentOldProject.type_ru : currentOldProject.type_en}</span></div>
      <div class="modal-meta-item"><span class="modal-meta-label">${toolsLabel}</span><span class="modal-meta-value">${currentOldProject.tools}</span></div>
    `;
  }
  
  updateScrollHintText();
}

// ---------- АККОРДЕОН (Лучшие проекты) ----------
function initAccordion() {
  if (!accItems.length) return;
  accItems.forEach(item => {
    item.classList.remove('active');
    item.addEventListener('click', () => {
      const projectId = parseInt(item.getAttribute('data-project'));
      if (!isNaN(projectId)) openModal(projectId);
    });
  });
}

// ---------- ФИЛЬТРАЦИЯ КАТЕГОРИЙ ----------
function initFilters() {
  if (!catTabs.length) return;
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateCategoryVisibility();
    });
  });
}

// ---------- ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ ----------
function initSmoothScroll() {
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (navHamburger) navHamburger.classList.remove('open');
      }
    });
  });
}

// ---------- ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ ПРИ СКРОЛЛЕ ----------
function updateActiveNavOnScroll() {
  const sections = ['hero', 'best-projects', 'projects', 'resume', 'socials', 'contact'];
  let current = '';
  for (let id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 150) {
      current = id;
    }
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    const scrollTarget = link.getAttribute('data-scroll');
    link.classList.toggle('active', scrollTarget === current);
  });
}

// ---------- BACK TO TOP ----------
function initBackToTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    updateActiveNavOnScroll();
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ ----------
function initScrollReveal() {
  const elements = document.querySelectorAll('.section-header, .proj-card, .social-card, .timeline-item, .resume-left, .resume-right, .contact-inner');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }, 100);
}

// ---------- ФОРМА ОБРАТНОЙ СВЯЗИ ----------
function initForm() {
  if (!contactForm) return;
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-send');
    if (btn) btn.style.opacity = '0.6';
    setTimeout(() => {
      contactForm.reset();
      if (formSuccess) formSuccess.classList.add('show');
      if (btn) btn.style.opacity = '';
      setTimeout(() => {
        if (formSuccess) formSuccess.classList.remove('show');
      }, 4000);
    }, 800);
  });
}

// ---------- МОБИЛЬНОЕ МЕНЮ ----------
function initMobileMenu() {
  if (!navHamburger || !mobileMenu) return;
  navHamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navHamburger.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!navHamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      navHamburger.classList.remove('open');
    }
  });
}

// ---------- ЗУМ В СТАРОМ МОДАЛЕ ----------
function initModalZoom() {
  if (!modalMainImg) return;
  let isZoomed = false;
  modalMainImg.addEventListener('click', () => {
    isZoomed = !isZoomed;
    modalMainImg.style.transform = isZoomed ? 'scale(1.7)' : 'scale(1)';
    modalMainImg.style.cursor = isZoomed ? 'zoom-out' : 'zoom-in';
    modalMainImg.style.transition = 'transform 0.3s ease';
  });
}

// ---------- ЗАКРЫТИЕ МОДАЛОВ ПО КЛАВИШЕ ESC И СТРЕЛКИ ----------
function initModalKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (oldModal && oldModal.classList.contains('open')) closeOldModal();
      if (verticalModal && verticalModal.classList.contains('open')) closeVerticalModal();
    }
    if (e.key === 'ArrowLeft' && oldModal && oldModal.classList.contains('open')) {
      prevOldImage();
    }
    if (e.key === 'ArrowRight' && oldModal && oldModal.classList.contains('open')) {
      nextOldImage();
    }
  });
}

// ---------- ОБРАБОТЧИКИ ДЛЯ СТАРОГО МОДАЛА ----------
function bindOldModalEvents() {
  if (oldModalClose) oldModalClose.addEventListener('click', closeOldModal);
  if (oldModal) oldModal.addEventListener('click', (e) => {
    if (e.target === oldModal) closeOldModal();
  });
  if (galleryPrev) galleryPrev.addEventListener('click', (e) => { e.stopPropagation(); prevOldImage(); });
  if (galleryNext) galleryNext.addEventListener('click', (e) => { e.stopPropagation(); nextOldImage(); });
}

// ---------- ОБРАБОТЧИКИ ДЛЯ ВЕРТИКАЛЬНОГО МОДАЛА ----------
function bindVerticalModalEvents() {
  if (verticalClose) verticalClose.addEventListener('click', closeVerticalModal);
  if (verticalModal) verticalModal.addEventListener('click', (e) => {
    if (e.target === verticalModal) closeVerticalModal();
  });
}

// ---------- ПЛЕЙСХОЛДЕРЫ ДЛЯ ОТСУТСТВУЮЩИХ ИЗОБРАЖЕНИЙ ----------
function initImageFallbacks() {
  const fallbackSVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%232D1B69"/%3E%3Ctext x="400" y="300" font-family="sans-serif" font-size="42" fill="%239A84FF" text-anchor="middle"%3EAstasya%3C/text%3E%3C/svg%3E';
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      if (!this.src.includes('data:image/svg')) {
        this.src = fallbackSVG;
      }
    });
  });
}

// ---------- ВСПОМОГАТЕЛЬНАЯ: ПРОКРУТКА К АКТИВНОЙ МИНИАТЮРЕ ----------
function scrollToActiveThumb() {
  if (!modalThumbs) return;
  const activeThumb = modalThumbs.querySelector('.modal-thumb.active');
  if (!activeThumb) return;
  const container = modalThumbs;
  const thumbRect = activeThumb.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const scrollLeft = activeThumb.offsetLeft - (containerRect.width / 2) + (thumbRect.width / 2);
  container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
}

// ---------- ИНИЦИАЛИЗАЦИЯ ВСЕГО ----------
function init() {
  buildProjectsGrid();
  initAccordion();
  initFilters();
  initSmoothScroll();
  initBackToTop();
  initScrollReveal();
  initForm();
  initMobileMenu();
  initModalZoom();
  initModalKeyboard();
  bindOldModalEvents();
  bindVerticalModalEvents();
  initImageFallbacks();
  
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
    });
  }
  
  applyLanguage('ru');
}

// Запуск после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ==================== МЯГКОЕ СВЕЧЕНИЕ ЗА МЫШКОЙ ====================
(function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  if (window.matchMedia('(pointer: coarse)').matches) {
    glow.style.display = 'none';
    return;
  }
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function updateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    requestAnimationFrame(updateGlow);
  }
  updateGlow();
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    glow.style.opacity = '0.8';
  });
})();

// Параллакс сетки за мышкой
const grid = document.querySelector('.hero-bg-grid');
if (grid) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    grid.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Плавная анимация полосок навыков
function animateSkillBars() {
  const fills = document.querySelectorAll('.sw-fill');
  fills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-width');
    if (targetWidth && !fill.classList.contains('animated')) {
      fill.style.width = '0';
      setTimeout(() => {
        fill.style.width = targetWidth;
        fill.classList.add('animated');
      }, 50);
    }
  });
}
const resumeSection = document.querySelector('.resume-section');
if (resumeSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  observer.observe(resumeSection);
}

// Оборачиваем & в span.amp
function wrapAmpersand(element) {
  if (!element) return;
  let html = element.innerHTML;
  html = html.replace(/ &amp; /g, ' <span class="amp">&amp;</span> ');
  html = html.replace(/ & /g, ' <span class="amp">&amp;</span> ');
  element.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', function() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    wrapAmpersand(subtitle);
  }
});
// Отправка формы в Telegram
const tgForm = document.getElementById('tgForm');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('formSuccess');

if (tgForm) {
  tgForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Отправка...</span>';
    submitBtn.disabled = true;
    successMsg.style.display = 'none';
    
    const formData = new FormData(tgForm);
    
    try {
      const response = await fetch('send_to_telegram.php', {
        method: 'POST',
        body: formData
      });
      const text = await response.text();
      
      if (response.ok && text === 'success') {
        successMsg.style.display = 'block';
        tgForm.reset();
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (err) {
      alert('Сетевая ошибка. Проверьте соединение.');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}