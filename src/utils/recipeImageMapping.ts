
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food recipes
  'comfort1': 'https://images.unsplash.com/photo-1548340748-6d2b7c7a0d7a?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=800&auto=format&fit=crop', // Beef stew
  'comfort3': 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&auto=format&fit=crop', // Mashed potatoes
  'comfort4': 'https://images.unsplash.com/photo-1577906096749-55a0e0c9686a?w=800&auto=format&fit=crop', // Chicken pot pie
  'comfort5': 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&auto=format&fit=crop', // Baked potato
  'comfort6': 'https://images.unsplash.com/photo-1618889482923-38250401a84e?w=800&auto=format&fit=crop', // Lasagna
  
  // Breakfast recipes
  'breakfast1': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop', // Granola yogurt bowl
  'breakfast2': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast3': 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1567599672391-17b31d92e9e4?w=800&auto=format&fit=crop', // Pancakes with berries
  'breakfast5': 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop', // Eggs benedict
  'breakfast6': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop', // French toast
  'breakfast7': 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=800&auto=format&fit=crop', // Breakfast smoothie
  
  // Lunch recipes
  'lunch1': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop', // Quinoa salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&auto=format&fit=crop', // Garden salad
  'lunch3': 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&auto=format&fit=crop', // Club sandwich
  'lunch4': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop', // Poke bowl
  'lunch5': 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&auto=format&fit=crop', // Bento box
  'lunch6': 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=800&auto=format&fit=crop', // Buddha bowl
  
  // Dinner recipes
  'dinner1': 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&auto=format&fit=crop', // Salmon fillet
  'dinner2': 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&auto=format&fit=crop', // Pasta carbonara
  'dinner3': 'https://images.unsplash.com/photo-1588778272105-1ff4b1c491e9?w=800&auto=format&fit=crop', // Steak with vegetables
  'dinner4': 'https://images.unsplash.com/photo-1625943553852-781c7d513379?w=800&auto=format&fit=crop', // Roast chicken
  'dinner5': 'https://images.unsplash.com/photo-1604908176997-125f7c9986aa?w=800&auto=format&fit=crop', // Beef wellington
  'dinner6': 'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?w=800&auto=format&fit=crop', // Seafood paella
  
  // Dessert recipes
  'dessert1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Chocolate cake
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream scoops
  'dessert3': 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?w=800&auto=format&fit=crop', // Chocolate chip cookies
  'dessert4': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop', // Berry tart
  'dessert5': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop', // Cheesecake
  'dessert6': 'https://images.unsplash.com/photo-1587314168485-3236d6710001?w=800&auto=format&fit=crop', // Macarons
  
  // Quick recipes
  'quick1': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop', // Sandwich
  'quick2': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop', // Greek salad
  'quick4': 'https://images.unsplash.com/photo-1630492782892-7ad95cd62ec0?w=800&auto=format&fit=crop', // Fried rice
  'quick5': 'https://images.unsplash.com/photo-1580959375945-4633c6006a31?w=800&auto=format&fit=crop', // Avocado wrap
  'quick6': 'https://images.unsplash.com/photo-1601347193569-5b38e50d1397?w=800&auto=format&fit=crop', // Egg and toast
  
  // Snack recipes
  'snack1': 'https://images.unsplash.com/photo-1609525313344-a56f10561468?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&auto=format&fit=crop', // Trail mix
  'snack3': 'https://images.unsplash.com/photo-1596591868231-2920dc881afc?w=800&auto=format&fit=crop', // Mixed berries
  'snack4': 'https://images.unsplash.com/photo-1593001872095-7d5b3868dd5b?w=800&auto=format&fit=crop', // Veggie sticks with hummus
  'snack5': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop', // Energy balls
  'snack6': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop', // Roasted nuts
  
  // Indian cuisine recipes
  'indian1': 'https://images.unsplash.com/photo-1585937421612-70a008356c36?w=800&auto=format&fit=crop', // Butter chicken
  'indian2': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop', // Chicken tikka masala
  'indian3': 'https://images.unsplash.com/photo-1631292784640-2b24be784d1c?w=800&auto=format&fit=crop', // Vegetable biryani
  'indian4': 'https://images.unsplash.com/photo-1613292443284-8d10ef9d4d27?w=800&auto=format&fit=crop', // Paneer curry
  'indian5': 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=800&auto=format&fit=crop', // Samosas
  'indian6': 'https://images.unsplash.com/photo-1533050487297-09b450131914?w=800&auto=format&fit=crop', // Tandoori chicken
  
  // Chinese cuisine recipes
  'chinese1': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop', // Kung pao chicken
  'chinese2': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop', // Dim sum
  'chinese3': 'https://images.unsplash.com/photo-1569058242252-623df46b5025?w=800&auto=format&fit=crop', // Dumplings
  'chinese4': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop', // Sweet and sour pork
  'chinese5': 'https://images.unsplash.com/photo-1630459065645-7bf0e7639d84?w=800&auto=format&fit=crop', // Mapo tofu
  'chinese6': 'https://images.unsplash.com/photo-1625398407796-82650a8c9dd8?w=800&auto=format&fit=crop', // Beef and broccoli
  
  // Korean cuisine recipes
  'korean1': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop', // Bibimbap
  'korean2': 'https://images.unsplash.com/photo-1550807014-1236e91b92d7?w=800&auto=format&fit=crop', // Kimchi
  'korean3': 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&auto=format&fit=crop', // Korean fried chicken
  'korean4': 'https://images.unsplash.com/photo-1615474634995-97be6016b108?w=800&auto=format&fit=crop', // Tteokbokki
  'korean5': 'https://images.unsplash.com/photo-1606935642321-8887a1181d1b?w=800&auto=format&fit=crop', // Korean BBQ
  'korean6': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop', // Jjigae
  
  // American cuisine recipes
  'american1': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop', // Burger
  'american2': 'https://images.unsplash.com/photo-1619740455993-9e612b50487e?w=800&auto=format&fit=crop', // Mac and cheese
  'american3': 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop', // Buffalo wings
  'american4': 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop', // Clam chowder
  'american5': 'https://images.unsplash.com/photo-1524493160208-1b39cacf9483?w=800&auto=format&fit=crop', // Meatloaf
  'american6': 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=800&auto=format&fit=crop', // BBQ ribs
  
  // European cuisine recipes
  'european1': 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&auto=format&fit=crop', // Coq au vin
  'european2': 'https://images.unsplash.com/photo-1611068120813-ebb1a1cf3a08?w=800&auto=format&fit=crop', // Risotto
  'european3': 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&auto=format&fit=crop', // Beef bourguignon
  'european4': 'https://images.unsplash.com/photo-1628682229127-60ef4a5a1271?w=800&auto=format&fit=crop', // Schnitzel
  'european5': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop', // Carbonara
  'european6': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop', // Paella
  
  // Italian cuisine recipes (expanded)
  'italian1': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop', // Margherita pizza
  'italian2': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop', // Spaghetti with meatballs
  'italian3': 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop', // Lasagna
  'italian4': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop', // Risotto
  'italian5': 'https://images.unsplash.com/photo-1592415499556-74fcb9f18667?w=800&auto=format&fit=crop', // Caprese salad
  'italian6': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop', // Tiramisu
  
  // Mexican cuisine recipes (expanded)
  'mexican1': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop', // Authentic tacos
  'mexican2': 'https://images.unsplash.com/photo-1600348862122-d678de766906?w=800&auto=format&fit=crop', // Guacamole
  'mexican3': 'https://images.unsplash.com/photo-1628490163078-79ad45dcdda3?w=800&auto=format&fit=crop', // Enchiladas
  'mexican4': 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop', // Quesadillas
  'mexican5': 'https://images.unsplash.com/photo-1618040996337-56904b7850b4?w=800&auto=format&fit=crop', // Burrito bowl
  'mexican6': 'https://images.unsplash.com/photo-1560717845-968823efbee1?w=800&auto=format&fit=crop', // Chilaquiles
  
  // Asian cuisine recipes (expanded)
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Ramen
  'asian2': 'https://images.unsplash.com/photo-1648147610171-9df0c06bf365?w=800&auto=format&fit=crop', // Sushi platter
  'asian3': 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?w=800&auto=format&fit=crop', // Pad Thai
  'asian4': 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=800&auto=format&fit=crop', // Pho
  'asian5': 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop', // Thai curry
  'asian6': 'https://images.unsplash.com/photo-1541014679258-0d5998b13f34?w=800&auto=format&fit=crop', // Spring rolls
  
  // Mediterranean cuisine recipes (expanded)
  'mediterranean1': 'https://images.unsplash.com/photo-1626200935028-1eed42b8dd83?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop', // Greek salad with feta
  'mediterranean3': 'https://images.unsplash.com/photo-1528699633788-424268a0fb88?w=800&auto=format&fit=crop', // Hummus
  'mediterranean4': 'https://images.unsplash.com/photo-1626116819195-b9bd9f9c7ed8?w=800&auto=format&fit=crop', // Shakshuka
  'mediterranean5': 'https://images.unsplash.com/photo-1594221708779-94832f4320ff?w=800&auto=format&fit=crop', // Falafel
  'mediterranean6': 'https://images.unsplash.com/photo-1554998171-7e599bc95ccd?w=800&auto=format&fit=crop', // Moussaka
  
  // Special diets recipes (expanded)
  'vegan1': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop', // Vegan Buddha bowl
  'vegan2': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan salad
  'vegan3': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop', // Vegan mixed vegetables
  'vegan4': 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=800&auto=format&fit=crop', // Lentil curry
  'vegan5': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop', // Vegan burgers
  'vegan6': 'https://images.unsplash.com/photo-1595981267035-7b04ca84ffbc?w=800&auto=format&fit=crop', // Chickpea stew
  
  // Fusion recipes
  'fusion1': 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&auto=format&fit=crop', // Korean-Mexican tacos
  'fusion2': 'https://images.unsplash.com/photo-1562158926-c1c922addbc2?w=800&auto=format&fit=crop', // Mediterranean-Asian bowl
  'fusion3': 'https://images.unsplash.com/photo-1585937421612-70a008356c36?w=800&auto=format&fit=crop', // Indian-Italian curry pasta
  'fusion4': 'https://images.unsplash.com/photo-1631292784640-2b24be784d1c?w=800&auto=format&fit=crop', // Chinese-American stir fry
  'fusion5': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop', // Spanish-Italian paella pasta
  'fusion6': 'https://images.unsplash.com/photo-1569058242252-623df46b5025?w=800&auto=format&fit=crop', // Japanese-Mexican sushi tacos
  
  // Spicy recipes
  'spicy1': 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1596797038530-2d5ff1a41010?w=800&auto=format&fit=crop', // Spicy curry
  'spicy3': 'https://images.unsplash.com/photo-1625220193454-08d0eb8025a1?w=800&auto=format&fit=crop', // Hot wings
  'spicy4': 'https://images.unsplash.com/photo-1557499305-0af888c3d8ec?w=800&auto=format&fit=crop', // Spicy tacos
  'spicy5': 'https://images.unsplash.com/photo-1593001872095-7d5b3868dd5b?w=800&auto=format&fit=crop', // Chili
  'spicy6': 'https://images.unsplash.com/photo-1689617641074-5d607ae5d226?w=800&auto=format&fit=crop', // Nashville hot chicken
  
  // Sweet recipes
  'sweet1': 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=800&auto=format&fit=crop', // Fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1583743089695-4b816a5c78e1?w=800&auto=format&fit=crop', // Sweet pastries
  'sweet3': 'https://images.unsplash.com/photo-1551024601-45c5f6a55f6d?w=800&auto=format&fit=crop', // Pancakes with syrup
  'sweet4': 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=800&auto=format&fit=crop', // Cinnamon rolls
  'sweet5': 'https://images.unsplash.com/photo-1626803775151-61d756612f97?w=800&auto=format&fit=crop', // Caramel dessert
  'sweet6': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop', // Berry parfait
  
  // Healthy recipes (expanded)
  'healthy1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Healthy bowls
  'healthy2': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop', // Healthy grain bowl
  'healthy3': 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=800&auto=format&fit=crop', // Fresh vegetable spread
  'healthy4': 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&auto=format&fit=crop', // Grilled fish with vegetables
  'healthy5': 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=800&auto=format&fit=crop', // Superfood salad
  'healthy6': 'https://images.unsplash.com/photo-1626371684118-223881d92a97?w=800&auto=format&fit=crop', // Quinoa stuffed peppers
  
  // Exotic recipes (expanded)
  'exotic1': 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&auto=format&fit=crop', // Dragon fruit
  'exotic2': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop', // Exotic curry
  'exotic3': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Mango sticky rice
  'exotic4': 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&auto=format&fit=crop', // Star fruit salad
  'exotic5': 'https://images.unsplash.com/photo-1572635148818-ef6bdfbd20e8?w=800&auto=format&fit=crop', // Durian dishes
  'exotic6': 'https://images.unsplash.com/photo-1583241801142-113b9b23bbab?w=800&auto=format&fit=crop', // Jackfruit curry
  
  // Festive recipes
  'festive1': 'https://images.unsplash.com/photo-1576072115075-5cd5dc54608a?w=800&auto=format&fit=crop', // Holiday turkey
  'festive2': 'https://images.unsplash.com/photo-1574448857443-dc1d7e9c4dad?w=800&auto=format&fit=crop', // Christmas cookies
  'festive3': 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop', // Festive cake
  'festive4': 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&auto=format&fit=crop', // Gingerbread house
  'festive5': 'https://images.unsplash.com/photo-1576792245936-55a6c4520aa7?w=800&auto=format&fit=crop', // Holiday ham
  'festive6': 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop', // Mulled wine
  
  // Nostalgic recipes
  'nostalgic1': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop', // Grilled cheese
  'nostalgic2': 'https://images.unsplash.com/photo-1629214831811-23c1a52f5c59?w=800&auto=format&fit=crop', // PB&J
  'nostalgic3': 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=800&auto=format&fit=crop', // Pot roast
  'nostalgic4': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop', // Chicken noodle soup
  'nostalgic5': 'https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?w=800&auto=format&fit=crop', // Rice pudding
  'nostalgic6': 'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?w=800&auto=format&fit=crop', // Meatloaf
  
  // Romantic dinner recipes
  'romantic1': 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=800&auto=format&fit=crop', // Steak dinner
  'romantic2': 'https://images.unsplash.com/photo-1562967914-01efa7e87832?w=800&auto=format&fit=crop', // Lobster
  'romantic3': 'https://images.unsplash.com/photo-1532465909-4e0278962a2b?w=800&auto=format&fit=crop', // Chocolate fondue
  'romantic4': 'https://images.unsplash.com/photo-1610515451533-8383e4218e48?w=800&auto=format&fit=crop', // Mushroom risotto
  'romantic5': 'https://images.unsplash.com/photo-1561024355-9da6e5c73afa?w=800&auto=format&fit=crop', // Oysters
  'romantic6': 'https://images.unsplash.com/photo-1595981267035-7b04ca84ffbc?w=800&auto=format&fit=crop', // Beef wellington
  
  // Creative recipes
  'creative1': 'https://images.unsplash.com/photo-1558401391-57b93b7961db?w=800&auto=format&fit=crop', // Rainbow sushi
  'creative2': 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&auto=format&fit=crop', // Food art
  'creative3': 'https://images.unsplash.com/photo-1549590143-d5855148a9d5?w=800&auto=format&fit=crop', // Molecular gastronomy
  'creative4': 'https://images.unsplash.com/photo-1628191013085-990d50f5a835?w=800&auto=format&fit=crop', // Creative plating
  'creative5': 'https://images.unsplash.com/photo-1604742763104-86a0cd93972f?w=800&auto=format&fit=crop', // Garden-themed salad
  'creative6': 'https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=800&auto=format&fit=crop', // Sculptural bread
  
  // Additional reliable fallbacks
  'default': 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop', // Well-plated food
  'drink1': 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800&auto=format&fit=crop', // Smoothie
  'drink2': 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=800&auto=format&fit=crop', // Cocktail
  'drink3': 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop', // Latte
  'appetizer1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Bruschetta
  'appetizer2': 'https://images.unsplash.com/photo-1604908176997-125f7c9986aa?w=800&auto=format&fit=crop', // Canapés
  'appetizer3': 'https://images.unsplash.com/photo-1651698625791-8f70a2834f0a?w=800&auto=format&fit=crop', // Stuffed mushrooms
  'appetizer4': 'https://images.unsplash.com/photo-1623842529695-f394d5835571?w=800&auto=format&fit=crop', // Baked brie
};

export default recipeImageMapping;
