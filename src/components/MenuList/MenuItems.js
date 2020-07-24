const menuItems = {
    
    Appetizers: {
        items: [{name: 'Bean Nachos', price: '$5.29'}, 
        {name: 'Cheese Nachos', price: '$3.79'}, 
        {name: 'Beef and Bean Nachos', price: '$6.49'}, 
        {name: 'Chicken Nachos', price: '$5.89'}, 
        {name: 'Beef Nachos', price: '$5.89'},
        {name: 'Cheese Dip', price: '6oz. $3.49  16 oz. $7.89'},
        {name: 'Cheese and Bean Dip', price: '$4.49'},
        {name: 'Cheese Quesadilla(1)', price: '$2.49'},
        {name: 'Guacamole Dip', price: '6oz. $3.49  16oz. $8.99'},
        {name: 'Guacamole Ranchero Dip', description: 'Chopped avocado with pico de Gallo', price: '$8.49'},
        {name: 'Grilled Shrimp', price: '(4)- $3.49  (6)- $5.49  (12)- $9.99'},
        {name: 'Chori- Queso', description: 'Cheese dip with Mexican Sausage', price: '$5.49'},
        {name: 'Super Dip', description: 'Cheese dip, refried beans, ground beef & pico de Gallo', price: '$5.49'},
        {name: 'Spinach Dip', description:'Spinach with cheese sauce', price: '$5.49'}
    ]
    },
    SoupsSalads: {
        items: [ {header: 'Soups'},
        {name: 'Sopa de Pollo con Vegetales', description: 'Vegetable chicken soups, served with avocado slices, pico de Gallo and rice on the side', price: '$8.89'},
        {name: 'Caldo de Camarón', description: 'Shrimp soup with onions, carrots, zucchini, celery, cabbage and tomatoes.', price: 'Lunch: $10.99 Dinner: $14.99'},
        {name: 'Caldo Costa Azul', description: 'Shrimp, scallops, fish, imitation crab meat and calamari soup served with onions, celery, carrots, zucchini, cabbage and tomatoes.', price: 'Lunch: $11.99 Dinner: $14.99'},
        {header: 'Salads'},
        {note: 'Your choice of dressing: Ranch, Italian, Thousand Island or Honey Mustard'},
        {name: 'Tossed Salad', description: 'Lettuce, tomatoes, bell peppers and red onions', price: '$3.99'},
        {name: 'Guacamole Salad', description: 'Lettuce, guacamole and tomatoes', price: '$3.99'},
        {name: 'Charbroiled Grilled Salads', description: 'Served with spinach, red peppers, mushrooms, cherry tomatoes and red onions', priceLong: 'Shrimp Salad: $11.99 Chicken Salad: $9.99  Steak Salad: $10.99'},
    ]
    },
    CombinationLunch: {
        items: [{note: 'Seven Days a weeks from 11am to 3pm. Add $1.00 extra after 3pm for lunch portions. Add $0.99 for chicken or beef quesadilla.'},
        {note: 'Make your own combination of ONE or TWO items of your choice. You can also choose from ground beef cooked with onions and tomatoes, or seasoned broiled chicken cooked with onions, bell peppers and tomatoes. Served with your choice of two items: rice, beans and sour cream salad.'},
        {name: '(1) Taco or (1) Enchilada', price: '$5.99'},
        {name: '(2) Tacos or (2) Enchiladas', price: '$6.99'},
        {name: '(1) Burrito, Cheese Quesadilla, Pablano and Tamal', description: '', price: '$6.99'},
        {name: '(2) Burrito, Cheese Quesadilla, Pablano and Tamal', description: '', price: '$7.99'}
    ]
    },
    LunchFavorites: {
        items: [ {note: 'Add $1.00 extra after 3pm for lunch portions.'},
        {name: 'El Favorito', description: 'Grilled chicken quesadilla cooked with spinach and mushrooms. Served with rice and sour cream salad with chopped tomatoes', price: '$7.29'},
        {name: 'Burrito Gordo', description: 'Burrito Gordo stuffed with Mexican sausage, ground beef, rice, beans, cheese sauce & tomatillo sauce', price: '$7.29'},
        {name: 'Speedy Gonzales', description: '(1)Taco (1) Enchilada with rice or beans', price: '$5.99'},
        {name: 'Lunch Chimichanga', description: 'One rolled flour tortilla, fried, or soft, stuffed with ground beef or chicken, topped with cheese sauce, lettuce and sour cream, served with your choice of rice or beans', price: '$6.49'},
        {name: 'Lunch Fajita Taco Salad', description: 'Your choice of grilled chicken or steak with grilled vegetables, onions, green bell peppers and tomatoes. Topped with lettuce, sour cream and shredded cheese', price: '$7.99'},
        {name: 'Lunch Taco Supremos', description: 'Two soft tacos stuffed with your choice of ground beef or shredded chicken, tomatoes, lettuce, cheese and sour cream. Served with your choice of rice or beans', price: '$6.99'},
        {name: 'Lunch Huevos Rancheros', description: 'Two eggs cooked in ranchero sauce. Eggs cooked to order. Served with rice, beans and tortillas', price: '$7.89'}
    ]
    },
    Burritos: {
        items: [{name: 'Burritos Tipicos', description: 'Two fried chicken or beef burritos, topped with tomato-based sauce and cheese sauce, sour cream and pico de gallo. Served with rice and beans', price: '$9.99'},
        {name: 'Kiosco Grill Monster/Chile Verde Wet Burrito', description: 'A flour tortilla stuffed with tender pork, chile verde sauce, rice and beans. Topped with lettuce, sour cream, tomatoes, cheese sauce and guacamole', price: '$10.99'},
        {name: 'Burrito California', description: 'California-style burrito filled with steak or chicken, rice, beans, pico de gallo, guacamole and sour cream', price: '$8.99'},
        {name: 'Burrito de Carne Asada', description: 'Steak burrito served with sour cream, lettuce and shredded cheese', price: '$7.99'},
        {name: 'Burritos Deluxe', description: 'Two burritos, one chicken and one beef, topped with cheese sauce and tomato sauce. Served with lettuce, tomatoes, sour cream and shredded cheese', price: '$9.49'},
        {name: 'Burrito Especial', description: 'Flour tortilla stuffed with chicken or beef and topped with cheese, tomato sauce,lettuce, tomatoes and sour cream', price: '6.49'},
        {name: 'Burrito Mexicano', description: ' A flour tortilla stuffed with your choice of shredded chicken, ground beef or pork. Topped with cheese sauce, lettuce, tomatoes and sour cream. Served with rice and beans', price: '$8.99'},
        {name: 'Burrito Especial Texano', description: 'One tortilla stuffed with a combination of grilled steak, shrimp and chicken. Cooked with onions, bell peppers and tomatoes and topped with lettuce, tomatoes and sour cream. Served with rice and beans', price: '$11.99'},
        {name: 'Burrito de Fajita de Camarón', description: 'One tortilla stuffed with grilled shrimp, cooked with onions, bell peppers and tomatoes and topped with lettuce, tomatoes and sour cream. Served with rice and beans', price: '$11.99'},
        {name: 'Burrito de Fajita de Pollo', description: 'One tortilla stuffed with grilled chicken, cooked with onions, bell peppers and tomatoes. Topped with lettuce, tomatoes and sour cream. Served with rice and beans', price: '$10.89'},
        {name: 'Burrito de Fajita de Carne', description: 'Tortilla stuffed with grilled steak, cooked with onions, bell peppers and tomatoes. Topped with lettuce, tomatoes and sour cream. Served with rice and beans', price: '$11.89'},
        {name: 'Jumbo Burrito', description: 'Flour tortilla stuffed with your choice of pork or chicken cooked with Mexican sausage, onions, tomatoes and bell peppers. Rice and beans inside with tomatoes and cheese sauce on top', price: '$13.99'},
        {name: 'Flautas', description: 'Two fried chicken burritos topped with cheese sauce and tomatillo sauce, lettuce, sour cream and tomatoes', price: '$8.99'},
        {name: 'Super Burrito', description: 'Grilled chicken or steak burrito, topped with cheese sauce, tomatillo sauce, pico de gallo and sour cream. Served with rice or beans', price: 'Grilled Chicken – $8.99 Grilled steak – $9.99'},
    ]
    },
    Enchiladas: {
        items: [{name: 'Super Enchiladas', description: 'Five enchiladas, one chicken, one beef, one cheese, one bean and one shredded beef, all served with special sauce, lettuce, tomatoes, cheese sauce and sour cream', price: '$10.89'},
        {name: 'Enchiladas Rancheras', description: 'Two cheese enchiladas topped with ground beef, chicken or carnitas. Served with rice and beans', price: '$9.99'},
        {name: 'Enchiladas de Lujo', description: 'Combination of four enchiladas, one chicken, one beef, one cheese and one bean, all topped with cheese sauce, special sauce, lettuce and sour cream', price: '$9.89'},
        {name: 'Enchiladas Chilapa', description: 'Four grilled chicken enchiladas topped with cheese sauce, tomatillo sauce, sour cream and pico de gallo', price: '$10.89'}]
    },
    Quesadilas: {
        items: [{name: 'Quesadilla Rellena', description: 'A grilled flour tortilla stuffed with cheese, beans and your choice of ground beef or chicken. Served with rice and beans or sour cream salad with chopped tomatoes', price: '$9.89'},
        {name: 'Quesadilla de Fajita', description: 'Fajita quesadilla with your choice of grilled chicken or steak with grilled bell peppers, onions and tomatoes. Served with rice and beans or sour cream salad with chopped tomatoes', priceLong: 'Grilled chicken –$10.89 Grilled steak –$11.89'},
        {name: 'Quesadilla de Carne Asada', description: 'Grilled fajita steak quesadilla served with rice and beans', price: '$10.89'},
        {name: 'Quesadilla Texana', description: 'Fajita quesadilla with combination of shrimp, steak, chicken, grilled bell peppers, onions and tomatoes. Served with rice and beans', price: '$12.89'},
        {name: 'Quesadilla Grande', description: 'Tortilla stuffed with grilled steak, chicken and shrimp with onions, mushrooms, red peppers and cheese. Served with sour cream salad with chopped tomatoes', price: '$13.99'}]
    },
    Chimichangas: {
        items: [{name: 'Chimichanga', description: 'Ground beef or chicken wrapped in a flour tortilla. Topped with cheese sauce. Served with your choice of two items: rice, beans, sour cream salad with chopped tomatoes', price: '$9.89'},
        {name: 'Chicken Fajita Chimi', description: 'Grilled chicken cooked with onions, bell peppers and tomatoes and wrapped in a flour tortilla. Topped with cheese sauce. Served with your choice of two items: rice, beans, sour cream salad with chopped tomatoes', price: '$10.89'},
        {name: 'Steak Fajita Chimi', description: 'Grilled steak cooked with onions, bell peppers and tomatoes and wrapped in a flour tortilla.Topped with cheese sauce. Served with your choice of two items: rice, beans, sour cream salad with chopped tomatoes', price: '$11.99'},
        {name: 'Texana Chimi', description: ' A combination of grilled steak, chicken and shrimp cooked with bell peppers, onions and tomatoes. Topped with cheese sauce. Served with your choice of two items: rice, beans, sour cream salad with chopped tomatoes', price: '$12.99'},
        {name: 'Shrimp Fajitas Chimi', description: ' Grilled shrimp cooked with onions, bell peppers and tomatoes and wrapped in a flour tortilla. Topped with cheese sauce. Served with your choice of two items: rice, beans, sour cream salad with chopped tomatoes', price: '$12.99'}]
    },
    ChickenDishes: {
        items: [ {note: 'Add $1.00 extra after 3pm for lunch portions. '},
        {name: 'Codorniz Frita al Mojo de Ajo', description: 'Fried Cornish hen cooked in our special garlic sauce. Served with rice, beans and your choice of corn or flour tortillas.', price: 'Lunch –$10.89   Dinner –$14.89'},
        {name: 'Codorniz a la Diabla', description: 'Fried Cornish hen cooked in our hot sauce. Served with rice, beans and your choice of corn or flour tortillas.', price: 'Lunch –$10.89   Dinner –$14.89'},
        {name: 'Especial de la Casa', description: 'Grilled chicken strips topped with grilled red and yellow bell peppers, mushrooms, broccoli, red onion and zucchini. Topped with cheese sauce and ranchero sauce and served with rice and beans.', price: 'Lunch –$8.99   Dinner –$11.99'},
        {name: 'Pollo Jalisco', description: 'A sizzling skillet of chicken breast topped with yellow and red bell peppers, pineapple, cheese sauce and tomato sauce. Served with white rice, black beans and lettuce topped with sour cream, and flour or corn tortillas.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'Pollo Fundido', description: 'Grilled chicken breast topped with tomatoes, bell peppers, onions and melted cheese. Served on a bed of rice.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'Taco Loco', description: 'A crispy flour tortilla filled with shredded chicken or beef. Filled with refried beans, cheese sauce and topped with lettuce, tomatoes and sour cream.', price: 'Lunch –$7.49   Dinner –$8.49'},
        {name: 'Pollo Sinaloense', description: 'Grilled chicken breast topped with grilled red and yellow bell peppers, broccoli, red onion and zucchini. Served with white rice and black beans.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'Pollo a la Parrilla', description: 'Grilled chicken with onions on top. Served with rice, beans, or sour cream salad with chopped tomatoes and corn or flour tortillas.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'Chori-Pollo', description: 'Grilled chicken breast and Mexican sausage served with rice, beans, or sour cream salad with chopped tomatoes and tortillas, topped with cheese sauce.', price: 'Lunch –$8.89    Dinner –$11.99'},
        {name: 'Pollo Mazatlán', description: 'A sizzling skillet of chicken breast cooked with red and yellow peppers and bacon. Topped with melted cheddar cheese and barbecue sauce. Served with rice, beans, lettuce, sour cream and tomatoes, with your choice of flour or corn tortillas.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'Pollo Relleno', description: 'One grilled chicken breast stuffed with cheddar cheese and topped with cheese sauce and grilled mushrooms. Served with rice, beans and three flour tortillas.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'A.C.P.', description: 'Grilled chicken with onions and cheese sauce over rice.', price: 'Lunch –$7.89    Dinner –$10.89'},
        {name: 'Chilaquiles Mexicanos', description: 'Corn tortilla chips and chunks of chicken cooked with our special sauce. Topped with cheese sauce. Served with rice and beans.', price: 'Lunch –$7.49   Dinner –$9.89'},
        {name: 'Pollo Chipotle', description: 'Slices of chicken, bell peppers, onions and tomatoes marinated with our special chipotle cream. Served with rice, beans and flour tortillas.', price: 'Lunch –$8.89   Dinner –$11.99'},
        {name: 'A.C.P. Texano', description: 'Grilled chicken, steak and shrimp with onions, bell peppers and tomatoes served over rice. Topped with cheese sauce.', price: 'Lunch –$9.89   Dinner –$12.89'},
        {name: 'Pollo Marruecos', description: 'Grilled chicken strips served over rice topped with pineapple, red onions and mushrooms seasoned with Mexican Sausage, topped with melted shredded cheese.', price: '$9.89'},
        {name: 'Kiosco Wrap', description: 'Stuffed with grilled chicken, cheddar cheese, avocado, chipotle cream sauce and pico de gallo. Served with white rice and black beans.', price: '$10.89'}]
    },
    BeefandPorkDishes: {
        items: [ {note: 'Add $1.00 extra after 3pm for lunch portions.'},
        {name: 'Carne Asada', description: ' Steak with grilled onions, pico de gallo and tortillas. Choice of two items: rice, beans, or sour cream salad with chopped tomatoes.', price: 'Lunch – $9.99      Dinner – $13.99'},
        {name: 'Carnitas Dinner', description: 'Pork strips topped with grilled onions and served with corn or flour tortillas. Choice of two items: rice, beans, or sour cream salad with chopped tomatoes.', price: 'Lunch – $9.89     Dinner – $13.99'},
        {name: 'Chile Colorado', description: 'Steak strips prepared in red chile sauce. Served with rice, beans and tortillas.', price: 'Lunch – $9.89 Dinner – $13.89'},
        {name: 'Chile Verde', description: 'Pork strips cooked with green chile sauce and tortillas. Choice of two items: rice, beans, or sour cream salad with chopped tomatoes.', price: 'Lunch – $9.89     Dinner – $13.89'},
        {name: 'Bistec Ranchero', description: '8 oz. rib-eye steak with salsa on top. Served with rice, beans or sour cream salad with chopped tomatoes and corn or flour tortillas', price: '$14.49'},
        {name: 'Bistec a la Tampiqueña', description: '8 oz. rib-eye steak topped with onions and corn or flour tortillas. Choice of two items: rice, beans, or sour cream salad with chopped tomatoes.', price: '$14.49'},
        {name: 'Bistec Jalisciense', description: 'Grilled steak topped with red onions, red and yellow bell peppers, broccoli, zucchini and ranchera sauce. Served with white rice, black beans and tortillas', price: '$14.49'},
        {name: 'Bistec a la Mexicana', description: ' A sizzling skillet of beef steak cooked with banana peppers, green peppers and onions. Served with rice, beans or sour cream salad with chopped tomatoes and tortillas', price: '$14.49'},
        {name: 'Tacos de Carne Asada', description: 'Three grilled steak soft tacos, corn or flour tortillas, with tomatillo sauce and pico de gallo on the side. Served with rice and beans', price: '$12.49 Grilled Chicken – $11.49'},
        {name: 'Steak Soft Tacos', description: 'Two flour tortillas stuffed with grilled steak, onions, white cheese and cheddar cheese. Served with rice and tossed salad with your choice of dressing', price: 'Lunch (1 taco)–7.99     Dinner (2 tacos)– 10.99'},
        {name: 'Grilled Chicken Soft Tacos', description: '', priceLong: 'Lunch (1 taco) – $6.99    Dinner (2 tacos) – $9.99'},
        {name: 'Steak Fundido', description: 'Grilled steak topped with tomatoes, bell peppers, onions, and melted cheese Served on a bed of rice.', price: 'Lunch – $10.89       Dinner – $11.89'},
        {name: 'A.C.S.', description: 'Steak with onions and cheese sauce served over rice.', price: 'Lunch – $8.89       Dinner – $11.99'}]
    },
    KioscoFavorites: {
        items: [
        {note: 'Add $1.00 extra after 3pm for lunch portions. '},
        {name: 'Fajita Taco Salad', description: 'Your choice of grilled chicken or steak filled in with refried beans, cheese sauce, grilled onions, green bell peppers and tomates. Topped with lettuce, sour cream and shredded cheese.', priceExLong: ['Chicken: Lunch – $8.49 Dinner – $9.49', 'Steak: Lunch – $9.49  Dinner – $10.49']},
        {name: 'Mar y Tierra', description: 'Shrimp and steak served with rice, beans and tortillas', price: '$18.99'},
        {name: 'Nachos Especial', description: 'Cheese nachos topped with ground beef, chopped chicken and beans. Covered with shredded lettuce,tomatoes and sour cream.', price: 'Lunch – $8.89      Dinner – $11.99'},
        {name: 'Nachos de Fajita', description: 'Cheese nachos topped with fajita-style steak or chicken cooked with bell peppers, onions and tomatoes. ', priceExLong: ['Steak: Lunch – $9.89      Dinner – $12.49', 'Chicken Lunch – $8.49    Dinner – $11.99']},
        {name: 'Huevos Rancheros', description: 'Two eggs cooked in ranchero sauce. Eggs cooked to order. Served with rice, beans and tortillas', price: '$7.89'},
        {name: 'Special Dinner', description: 'One chalupa with guacamole salad, one chile relleno, one beef taco, one enchilada, one tamal, rice and beans', price: '$12.99'},
        {name: 'Taquitos', description: 'Three rolled corn tortillas stuffed with beef or chicken. Served with choice of rice and beans or guacamole salad. ', priceExLong: ['(Lunch) Chicken – $6.99 (Lunch) Beef – $7.99', '(Dinner) beef or chicken – $8.99', '(Dinner) grilled beef or chicken – $9.99']},
        {name: 'Chiles Poblanos', description: 'Two stuffed poblano peppers filled with cheese and topped with special sauce. Served with rice, beans and tortillas.', price: 'Lunch – $7.49 Dinner – $9.99'},
        {name: 'Mexican Pizza', description: ' One flour tortilla layer with bell peppers, onions, mushrooms, pineapple and refried beans. Topped with another flour tortilla, with shredded cheese, cilantro, fresh cut tomatoes, and breaded jalapeños (pineapple only included on the grilled dishes)', priceExLong: ['Ground Beef /shredded chicken (Lunch) – $7.99','  Grilled Chicken (Lunch) – $8.89 Steak (Lunch) - $9.99 ',' All (Dinner) – $12.99']},
        {name: 'Nachos Texanos ', description: 'Cheese nachos topped with grilled steak, chicken and shrimp. Cooked with bell peppers, onions and tomatoes. ', price: 'Lunch – $9.89    Dinner – $12.99'},
        {name: 'Tres Compadres', description: 'Grilled sliced chicken breast, thin rib-eye steak, shrimp and mixed vegetables. Topped with cheese and ranchero sauce. Served with white rice and beans', price: '$17.99'}]
    },
    FajitasMexicanas: {
        items: [ {note: 'Add $1.00 extra after 3pm for lunch portions. '},
        {note: 'A combination of grilled onions, green peppers and tomatoes on a sizzling skillet in any style below. Served with rice, beans, guacamole salad, sour cream and tortillas. Add Mexican sausage for 99¢'},
        {note: 'Lunch Fajitas: Served with 2 items and 6 Shrimp  '},
        {note: 'Dinner Fajitas: Served with 3 items and 12 Shrimp'},
        {name: 'Fajitas Cabo de Hacha - Scallops', description: '', price: 'Lunch – $11.99 Dinner – $16.49'},
        {name: 'Fajitas de Pollo - Chicken breast strips', description: '', price: 'Lunch – $8.49 Dinner – $12.99'},
        {name: 'Fajitas Tapatias - Beef strips', description: '', price: 'Lunch – $8.99 Dinner – $13.99'},
        {name: 'Fajitas de Camarón - 12 large shrimp ', description: '', price: 'Lunch – $11.99 Dinner – $15.99'},
        {name: 'Fajitas Calamari - Grilled calamari', description: '', price: 'Lunch – $11.99 Dinner – $15.99'},
        {name: 'Fajitas Across the Border', description: 'A combination of beef,chicken strips & shrimp', price: 'Lunch – $10.99 Dinner - $14.99'},
        {name: 'Fajitas de Pescado - Fish strips', description: '', price: 'Lunch – $9.49 Dinner – $13.99'},
        {name: 'Fajitas Vegetarianas - Grilled mixed vegetables', description: '', price: 'Lunch – $7.99 Dinner – $10.99'},
        {name: 'Fajitas Texanas for Two ', description: 'A combination of beef, chicken and shrimp', price: '$22.99'},
        {name: 'Fajitas for Two', description: 'Your choice of beef, chicken or mix', price: '$21.49'},
        {name: 'Seafood Fajitas for Two', description: 'Fish, shrimp, scallops and imitation crab meat', price: '$24.99'},
        {name: 'Seafood Fajitas', description: 'Fish, shrimp, scallops and imitation crab meat. ', price: 'Lunch – $11.99 Dinner – $15.99'},
        {name: 'Fajitas Carnitas - Grilled pork tips', description: '', price: 'Lunch – $9.49 Dinner – $13.99'},]
    },
    ComboDinners: {
        items: [{note: 'Combo Dinners - $8.99'},
        {note: 'Make your own combination of TWO items of your choice. You can also choose from ground beef cooked with onions and tomatoes, or seasoned broiled chicken. Cooked with onions, bell peppers and tomatoes. Served with your choice of two items: rice, beans and/or guacamole salad. Add 99¢ for extra cheese sauce.'},
        {note: 'Add $0.99 for chicken or beef quesadilla.'},
        {list: ['Cheese Quesadilla', 'Burrito', 'Enchilada', 'Taco', 'Chile', 'Relleno', 'Chicken', 'Tamal']}
        ]
    },
    VegetarianCombos: {
        items: [{name: 'Two Quesadillas', description: 'Two grilled cheese quesadillas, one stuffed with mushrooms, one stuffed with spinach. Served with white rice and black beans', price: '$10.89'},
        {name: 'Burrito Especial Vegetariano', description: 'A combination of grilled broccoli, zucchini, squash, red onions and red and yellow bell peppers. Topped with lettuce, tomatoes and sour cream.Served with white rice and black beans', price: '$10.89'},
        {name: 'Chimichanga Vegetariana', description: 'Grilled vegetables wrapped in a flour tortilla. Topped with nacho cheese and served with white rice and black beans', price: '$10.89'},
        {name: 'Quesadilla Vegetariana', description: 'One tortilla stuffed with cheese and grilled vegetables.Served with white rice, black beans or sour cream salad with chopped tomates', price: '$10.89'},
        {name: 'A.C.P. Vegetariano', description: 'Grilled red and yellow bell peppers, broccoli, zucchini, red onions and squash. Topped with cheese sauce and served over white rice', price: '$10.89'}]
    },
    ChildrensPlates: {
        items: [ {note: 'Served to children 12 and younger. Older than 12, add $1.49'},
        {name: 'Spanish Hamburger', description: 'Served with fries ', price: '$4.49'},
        {name: 'Chicken Fingers', description: 'Served with fries', price: '$4.49'},
        {name: 'One Burrito', description: 'Choose beef or chicken served with rice', price: '$4.49'},
        {name: 'One Taco', description: 'One Taco', price: '$4.49'},
        {name: 'One Enchilada ', description: 'Served with rice and beans', price: '$4.49'},
        {name: 'Cheese Quesadilla', description: 'Served with fries', price: '$4.49'},
        {name: 'Caldito de Pollo', description: 'Chicken broth served with shredded chicken and rice', price: '$4.49'},
        {name: 'Mini Taco Loco', description: 'Grilled chicken, rice and cheddar cheese', price: '$4.49'}]
    },
    Seafood: {
        items: [ {note: 'Add $1.00 extra after 3pm for lunch portions.'},
        {name: 'Camarones Fundidos', description: 'Grilled shrimp, red and yellow peppers, red onions, mushrooms, broccoli, zucchini and melted shredded cheese served with rice and salad (lettuce, tomatoes, cheddar cheese and sour cream).', price: 'Lunch – $10.89 Dinner – $14.99'},
        {name: 'Parrillada de Camarones', description: 'Delicious grilled shrimp marinated in our special recipe. Served with lemon wedges and avocado slices.', price: 'Lunch – $10.89 Dinner – $14.99'},
        {name: 'Cóctel de Camarón', description: 'Shrimp in cocktail sauce with avocado slices, pico de gallo and crackers. ', price: 'Lunch – $9.99 Dinner – $14.99'},
        {name: 'Camarones a la Diabla', description: 'Shrimp cooked with onions in a hot sauce. Served with rice, beans and tortillas.', price: 'Lunch – $10.99 Dinner – $14.99'},
        {name: 'Camarones Kiosco Grill ', description: 'Shrimp, zucchini, broccoli and onions grilled with rice and soy sauce. Serve on a bed of lettuce garnished with tomatoes and avocado slices.', price: 'Lunch – $10.99 Dinner – $14.99'},
        {name: 'Camarones al Mojo de Ajo ', description: 'Garlic-style shrimp cooked in our very own garlic sauce. Served with rice, beans and tortillas.', price: 'Lunch – $10.99 Dinner – $14.99'},
        {name: 'Camarones Chipotle', description: 'Marinated shrimp cooked in chipotle sauce. Served with white rice, black beans or sour cream salad with chopped tomatoes.', price: 'Lunch –10.99 Dinner – $14.99'},
        {name: 'Camarones a la Mexicana', description: 'Mexican-style shrimp cooked on the grill with banana peppers, red bell peppers and redonions. Served with white rice, black beans or sour cream salad with chopped tomatoes.', price: 'Lunch – $10.99 Dinner – $14.99'},
        {name: 'Camarones Yucatecos', description: 'Fried shrimp wrapped in bacon. Served with white rice, black beans or sour cream salad with chopped tomatoes. ', price: 'Lunch - $10.99  Dinner - $14.99'},
        {name: 'Tacos Ensenada-Style with Fish', description: 'Three deep-fried fish tacos served with rice, beans and a side salad with cabbage, sour cream and pico de gallo', price: '$11.99'},
        {name: 'Tacos Ensenada-Style with Shrimp', description: 'Three deep-fried shrimp tacos served with rice, beans and a side salad with cabbage, sour cream and pico de gallo', price: '$14.99'},
        {name: 'Tostadas de Ceviche', description: 'Tostadas topped with fish cooked in lemon juice, pico de gallo and avocado slices', price: '$6.99'},
        {name: 'Salmon Tropical', description: '8 oz. grilled salmon served with rice and steamed broccoli, red and yellow bell peppers, mushrooms and squash', price: '$14.99'},
        {name: 'Salmon & Shrimp', description: '8 oz. grilled salmon and 6 grilled shrimp, served with steamed broccoli, red and yellow peppers,mushrooms and squash ', price: '$18.99'},
        {name: 'Tostadas de Camarón', description: 'Tostadas topped with shrimp cooked in lemon juice, pico de gallo and avocado slices', priceLong: 'Lunch (6 shrimp) – $7.99 Dinner (10 shrimp) – $12.99'},
        {name: 'Filete de Pescado', description: 'Breaded fish fillet served with rice, lettuce, tomatoes, sour cream salad, with chopped tomatoes and tortillas.', price: ' Lunch – $8.99 Dinner – 1$2.49'},
        {name: 'Quesadilla de Camarón', description: 'Shrimp quesadilla cooked with onions and tomatoes.Served with rice and sour cream salad with chopped tomatoes.', price: '$12.49'},
        {name: 'A.C.P. Shrimp', description: 'Grilled shrimp with onions and cheese sauce, served over rice.', price: 'Lunch – $10.89 Dinner – $13.49'}]
    },
    NewPlates: {
        items: [{name: 'Taquitos Tipicos', description: 'Bed of rice, three chicken or steak taquites topped with cheese sauce, tomatillo sauce and pico de gallo.', priceExLong:['Ground beef or grilled chicken or shredded chicken - $9.99', 'Shreded Beef or Steak - $10.99']},
        {name: 'Nachos Bravos', description: 'Your choice of grilled chicken, steak, pork or Texano; cooked with Mexican Sausage, black and refried beans, cilantro, sour cream, tomato, red cabbage, pineapple, jalapeños, onions, slices of avacado and cheese sauce.', price: ['Grilled Chicken - $10.99  Beef/Pork - $12.99 ','Texano  - $13.99']},
        {name: 'Burrito Amigo', description: 'Grilled chicken steak and shrimp with green peppers,onions in cream chipotle sauce, cooked with Mexican Sausage. Served with rice and sour cream salad with chopped tomatoes', price: '$8.99'},
        {name: 'ACP Texano Especial', description: 'Bed of rice, topped with grilled chicken, steak, shrimp; with three slices of cheese quesadilla with fresh chopped cilantro on top', price: '$10.49'},
        {name: 'Quesadilla Ranchera', description: 'Grilled chicken steak and shrimp with green peppers, onions in cream chipotle sauce, cooked with Mexican Sausage. Served with rice and sour cream salad with chopped tomatoes', price: '$12.99'},
        {name: 'Burrito Diabla', description: 'Your choice of grilled chicken, steak, pork or shrimp; cooked with Mexican Sausage, onions, pineapples, jalapeños, and slices of avacados, pico de gallo, red sauce and cheese sauce. Served with rice and beans.', priceExLong: ['Grilled Chicken - $10.99  Steak/Pork - $11.99', 'Shrimp - $12.99']},
        {name: 'Enchiladas Veracruzanas', description: 'Grilled chicken enchiladas with tomatillo sauce, cheese sauce, diced tomatoes, cilantro, and slices of avacado on top. Served with rice and black beans', price: '$10.99'},
        {name: 'Steak and Cheese', description: 'Steak cooked with Mexican Sausage and onions. Served with slices of avocados and black beans with diced tomatoes and cilantro on top', price: '$13.99'}
    ]
    }
};

export default menuItems;