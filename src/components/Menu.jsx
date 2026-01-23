import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData = {
    breakfast: [
      { name: "Sri Lankan Breakfast", price: "1,400", description: "Rice, coconut sambol, dhal curry, egg omelette, cup of tea" },
      { name: "English Breakfast", price: "1,600", description: "Bread, sausages, butter jam, vegetable salad, egg omelette, cup of coffee" },
      { name: "Plain Omelet", price: "600", description: "Classic egg omelet" },
      { name: "Sri Lankan Omelet", price: "800", description: "Local style with spices" },
      { name: "Cheese Omelet", price: "900", description: "Fluffy omelet with melted cheese" },
      { name: "Cheese & Tomato Omelet", price: "1,000", description: "Fresh tomatoes with cheese" },
      { name: "Chicken Omelet", price: "1,100", description: "Tender chicken pieces" },
      { name: "Ham & Cheese Omelet", price: "1,450", description: "Premium ham with cheese" },
      { name: "Bacon & Cheese Omelet", price: "1,450", description: "Crispy bacon with cheese" },
      { name: "Prawn Omelet", price: "1,400", description: "Succulent prawns" },
      { name: "Fried Egg", price: "400", description: "Sunny side up or over easy" },
      { name: "Boiled Egg", price: "400", description: "Soft or hard boiled" }
    ],
    starters: [
      { name: "Chips", price: "800", description: "French fries served with tomato sauce for dipping" },
      { name: "Papadam", price: "900", description: "Comes with mango chutney" },
      { name: "Cookies", price: "1,000", description: "Comes with avocado cream" },
      { name: "Cashew Nuts", price: "1,200", description: "Comes with rich sauce and mayonnaise" },
      { name: "Mixed Vegetable Salad", price: "900", description: "Fresh seasonal vegetables" },
      { name: "Mixed Salad", price: "950", description: "Garden fresh mix" },
      { name: "Cucumber, Tomato, Onion & Garlic Salad", price: "900", description: "Classic combination" },
      { name: "Tuna Salad", price: "1,200", description: "Fresh tuna with greens" },
      { name: "Avocado Tuna Salad", price: "1,250", description: "Creamy avocado with tuna" },
      { name: "Prawn Salad", price: "1,300", description: "Succulent prawns" },
      { name: "Avocado Seafood Salad", price: "1,500", description: "Premium seafood mix" },
      { name: "Chicken Pineapple Salad", price: "1,500", description: "Sweet and savory" }
    ],
    mains: [
      { name: "Vegetable Rice", price: "900", description: "Aromatic rice stir-fried with fresh seasonal vegetables" },
      { name: "Egg Rice", price: "1,000", description: "Classic fried rice with fluffy scrambled eggs" },
      { name: "Chicken Rice", price: "1,400", description: "Juicy chicken cooked with flavorful rice and spices" },
      { name: "Fish Rice", price: "1,400", description: "Pan-fried fish mixed with flavourful fried rice" },
      { name: "Beef Rice", price: "1,800", description: "Juicy beef pieces mixed with rice, vegetables, and spices" },
      { name: "Pork Rice", price: "1,800", description: "Tender pork cooked Sri Lankan style with rice" },
      { name: "Prawn Rice", price: "1,800", description: "Succulent prawns with garlic-infused rice" },
      { name: "Seafood Rice", price: "2,000", description: "Prawns, fish & calamari tossed with aromatic rice" },
      { name: "Mix Rice", price: "2,100", description: "Chicken, seafood & egg combined for a full meal" },
      { name: "Rice & Curry (Veg)", price: "1,800", description: "Served with unlimited white rice, pumpkin, green leaves, beans/carrot, beetroot, papadam, dhal" },
      { name: "Rice & Curry (Egg)", price: "700", description: "Served with unlimited white rice and curries" },
      { name: "Rice & Curry (Chicken)", price: "1,000", description: "Served with unlimited white rice and curries" },
      { name: "Rice & Curry (Fish)", price: "1,300", description: "Served with unlimited white rice and curries" },
      { name: "Rice & Curry (Pork)", price: "2,000", description: "Served with unlimited white rice and curries" }
    ],
    kottu: [
      { name: "Vegetable Kottu", price: "900", description: "Fresh chopped godamba roti stir-fried with mixed vegetables" },
      { name: "Egg Kottu", price: "1,000", description: "Classic vegetable kottu with fluffy scrambled eggs" },
      { name: "Cheese Kottu", price: "1,300", description: "Vegetable kottu topped with melted cheese" },
      { name: "Chicken Kottu", price: "1,400", description: "Tender chicken pieces with signature kottu spices" },
      { name: "Fish Kottu", price: "1,400", description: "Flaky fish with aromatic spices" },
      { name: "Cheese Chicken Kottu", price: "1,500", description: "Chicken kottu topped with melted cheese" },
      { name: "Beef Kottu", price: "1,800", description: "Juicy beef pieces with rich spice flavors" },
      { name: "Pork Kottu", price: "1,800", description: "Slow-cooked pork with bold Sri Lankan spices" },
      { name: "Prawn Kottu", price: "1,800", description: "Succulent prawns with garlic and light chili kick" },
      { name: "Seafood Kottu", price: "2,000", description: "Mix of prawns, fish, and calamari" },
      { name: "Mix Kottu", price: "2,100", description: "Chicken, seafood, egg, and vegetables" },
      { name: "Mix Cheese Kottu", price: "2,350", description: "Ultimate kottu loaded with cheese" }
    ],
    rotti: [
      { name: "Vegetable Rotte", price: "500", description: "Fresh vegetables wrapped in roti" },
      { name: "Egg Rotte", price: "600", description: "Egg and vegetables" },
      { name: "Cheese Rotte", price: "900", description: "Melted cheese filling" },
      { name: "Chicken Rotte", price: "1,000", description: "Tender chicken pieces" },
      { name: "Fish Rotte", price: "1,200", description: "Fresh fish filling" },
      { name: "Beef Rotte", price: "1,150", description: "Juicy beef" },
      { name: "Pork Rotte", price: "1,300", description: "Tender pork" },
      { name: "Prawn Rotte", price: "1,200", description: "Succulent prawns" },
      { name: "Seafood Rotte", price: "1,300", description: "Mixed seafood" },
      { name: "Mix Rotte", price: "1,300", description: "Everything combined" },
      { name: "Banana Rotti", price: "500", description: "Sweet banana filling" },
      { name: "Banana Honey Rotti", price: "700", description: "Banana with honey drizzle" },
      { name: "Chocolate Rotti", price: "900", description: "Rich chocolate filling" },
      { name: "Avocado Honey Rotti", price: "1,100", description: "Creamy avocado with honey" },
      { name: "Coconut Honey Rotti", price: "800", description: "Coconut with honey" },
      { name: "Pineapple Honey Rotti", price: "1,000", description: "Sweet pineapple with honey" }
    ],
    noodles: [
      { name: "Vegetable Noodles", price: "900", description: "Stir-fried noodles with fresh vegetables" },
      { name: "Egg Noodles", price: "1,000", description: "Classic noodles with egg" },
      { name: "Chicken Noodles", price: "1,400", description: "Tender chicken with noodles" },
      { name: "Fish Noodles", price: "1,400", description: "Pan-fried fish with noodles" },
      { name: "Beef Noodles", price: "1,800", description: "Juicy beef pieces" },
      { name: "Pork Noodles", price: "1,800", description: "Tender pork" },
      { name: "Prawn Noodles", price: "1,800", description: "Succulent prawns" },
      { name: "Seafood Noodles", price: "2,000", description: "Mixed seafood" },
      { name: "Mix Noodles", price: "2,100", description: "Everything combined" }
    ],
    burgers: [
      { name: "Veg Burger", price: "1,000", description: "Grilled vegetable patty with lettuce, tomato, onion" },
      { name: "Egg Burger", price: "1,100", description: "Seasoned fried egg with fresh veggies" },
      { name: "Cheese Burger", price: "1,300", description: "Classic burger with melted cheese" },
      { name: "Chicken Burger", price: "1,400", description: "Juicy grilled chicken patty" },
      { name: "Fish Burger", price: "1,400", description: "Crispy or grilled fish fillet" },
      { name: "Bacon Burger", price: "1,400", description: "Smoky bacon strips" },
      { name: "Ham Burger", price: "1,400", description: "Juicy beef patty with classic toppings" },
      { name: "Beef Burger", price: "1,800", description: "Premium beef patty grilled to perfection" },
      { name: "Pork Burger", price: "1,800", description: "Flavorful pork patty" },
      { name: "Prawn Burger", price: "1,800", description: "Golden-fried prawn patty" }
    ],
    sandwiches: [
      { name: "Vegetable Sandwich", price: "800", description: "Fresh veggies, served with chips" },
      { name: "Egg Sandwich", price: "1,000", description: "Fluffy egg filling, served with chips" },
      { name: "Cheese Tomato Onion", price: "1,150", description: "Classic combination, served with chips" },
      { name: "Chicken Sandwich", price: "1,250", description: "Grilled chicken, served with chips" },
      { name: "Ham & Cheese Sandwich", price: "1,300", description: "Premium ham with cheese, served with chips" }
    ],
    shawarma: [
      { name: "Vegetable Shawarma", price: "1,100", description: "Fresh vegetables wrapped" },
      { name: "Chicken Shawarma", price: "1,400", description: "Tender chicken pieces" },
      { name: "Fish Shawarma", price: "1,400", description: "Fresh fish" },
      { name: "Bacon Shawarma", price: "1,400", description: "Crispy bacon" },
      { name: "Beef Shawarma", price: "1,700", description: "Juicy beef" },
      { name: "Pork Shawarma", price: "1,700", description: "Tender pork" },
      { name: "Seafood Shawarma", price: "1,900", description: "Mixed seafood" },
      { name: "Mix Shawarma", price: "2,100", description: "Everything combined" }
    ],
    devilled: [
      { name: "Devilled Chicken", price: "1,200", description: "Served with white rice" },
      { name: "Devilled Fish", price: "1,200", description: "Served with white rice" },
      { name: "Devilled Sausages", price: "1,200", description: "Served with white rice" },
      { name: "Devilled Calamari", price: "1,300", description: "Served with white rice" },
      { name: "Devilled Pork", price: "1,500", description: "Served with white rice" },
      { name: "Devilled Beef", price: "1,500", description: "Served with white rice" },
      { name: "Devilled Prawns", price: "1,500", description: "Served with white rice" },
      { name: "Devilled Seafood", price: "1,900", description: "Served with white rice" },
      { name: "Devilled Mix", price: "2,100", description: "Served with white rice" }
    ],
    drinks: [
      { name: "Cup of Tea", price: "350", description: "Ceylon tea" },
      { name: "Cup of Coffee", price: "400", description: "Fresh brewed" },
      { name: "Ginger Tea", price: "450", description: "Warming ginger infusion" },
      { name: "Milk Tea", price: "600", description: "Classic milk tea" },
      { name: "Milk Coffee", price: "600", description: "Creamy coffee" },
      { name: "Tea Pot", price: "1,100", description: "3 cups" },
      { name: "Coffee Pot", price: "1,200", description: "3 cups" },
      { name: "Iced Coffee", price: "1,200", description: "Refreshing cold brew" },
      { name: "Milk Tea Pot", price: "1,500", description: "3 cups" },
      { name: "Milk Coffee Pot", price: "1,500", description: "3 cups" },
      { name: "Soda (Cola/Fanta/Sprite/EGB)", price: "300", description: "Chilled soft drinks" },
      { name: "Cola Zero", price: "300", description: "Sugar free" },
      { name: "Red Bull", price: "1,300", description: "Energy drink" },
      { name: "Banana Juice", price: "600", description: "Fresh squeezed" },
      { name: "Pineapple Juice", price: "800", description: "Tropical fresh" },
      { name: "Watermelon Juice", price: "800", description: "Refreshing" },
      { name: "Papaya Juice", price: "800", description: "Smooth and sweet" },
      { name: "Passion Fruit Juice", price: "800", description: "Tangy and fresh" },
      { name: "Lime Juice", price: "800", description: "Zesty and fresh" },
      { name: "Mango Juice", price: "1,000", description: "King of fruits" },
      { name: "Lime Soda", price: "1,000", description: "Fizzy lime refresher" },
      { name: "Avocado Juice", price: "1,100", description: "Creamy and rich" },
      { name: "Mix Juice", price: "1,300", description: "Tropical blend" },
      { name: "Banana Lassi", price: "1,300", description: "Creamy yogurt drink" },
      { name: "Papaya Lassi", price: "1,300", description: "Smooth yogurt blend" },
      { name: "Mango Lassi", price: "1,400", description: "Classic favorite" },
      { name: "Pineapple Lassi", price: "1,400", description: "Tropical yogurt" },
      { name: "Avocado Lassi", price: "1,400", description: "Rich and creamy" },
      { name: "Mix Lassi", price: "1,600", description: "Fruit blend lassi" }
    ],
    desserts: [
      { name: "Vanilla Ice Cream", price: "800", description: "Classic flavor" },
      { name: "Fresh Fruit Ice Cream", price: "1,000", description: "Seasonal fruits" },
      { name: "Chocolate Ice Cream", price: "1,000", description: "Rich chocolate" },
      { name: "Fruit Plate Small", price: "1,000", description: "Fresh seasonal fruits" },
      { name: "Mango Ice Cream", price: "1,100", description: "Tropical mango" },
      { name: "Banana Delight with Ice Cream", price: "1,250", description: "Sweet banana special" },
      { name: "Pineapple Delight with Ice Cream", price: "1,300", description: "Tropical treat" },
      { name: "Fruit Plate Large", price: "1,500", description: "Assorted tropical fruits" },
      { name: "Mixed Ice Cream", price: "1,700", description: "Three flavors combined" }
    ]
  };

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">
          Delicious food to fuel your adventures
        </p>

        <div className="menu-tabs">
          <button 
            className={`tab ${activeCategory === 'breakfast' ? 'active' : ''}`}
            onClick={() => setActiveCategory('breakfast')}
          >
            🌅 Breakfast
          </button>
          <button 
            className={`tab ${activeCategory === 'starters' ? 'active' : ''}`}
            onClick={() => setActiveCategory('starters')}
          >
            🥗 Starters & Salads
          </button>
          <button 
            className={`tab ${activeCategory === 'mains' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mains')}
          >
            🍛 Rice & Curry
          </button>
          <button 
            className={`tab ${activeCategory === 'kottu' ? 'active' : ''}`}
            onClick={() => setActiveCategory('kottu')}
          >
            🍜 Kottu
          </button>
          <button 
            className={`tab ${activeCategory === 'rotti' ? 'active' : ''}`}
            onClick={() => setActiveCategory('rotti')}
          >
            🌮 Rotti
          </button>
          <button 
            className={`tab ${activeCategory === 'noodles' ? 'active' : ''}`}
            onClick={() => setActiveCategory('noodles')}
          >
            🍝 Noodles
          </button>
          <button 
            className={`tab ${activeCategory === 'burgers' ? 'active' : ''}`}
            onClick={() => setActiveCategory('burgers')}
          >
            🍔 Burgers
          </button>
          <button 
            className={`tab ${activeCategory === 'sandwiches' ? 'active' : ''}`}
            onClick={() => setActiveCategory('sandwiches')}
          >
            🥪 Sandwiches
          </button>
          <button 
            className={`tab ${activeCategory === 'shawarma' ? 'active' : ''}`}
            onClick={() => setActiveCategory('shawarma')}
          >
            🌯 Shawarma
          </button>
          <button 
            className={`tab ${activeCategory === 'devilled' ? 'active' : ''}`}
            onClick={() => setActiveCategory('devilled')}
          >
            🌶️ Devilled
          </button>
          <button 
            className={`tab ${activeCategory === 'drinks' ? 'active' : ''}`}
            onClick={() => setActiveCategory('drinks')}
          >
            🥤 Drinks
          </button>
          <button 
            className={`tab ${activeCategory === 'desserts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('desserts')}
          >
            🍰 Desserts
          </button>
        </div>

        <div className="menu-grid">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="price">LKR {item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="menu-note">
          <p>💡 All breakfast items can be added to packages. Custom dietary requirements? Just ask!</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
