import { useState } from 'react';
import './menu.css';

// Import default images for categories
import coffeeImage from '../../assets/coffee-image.jpg';
import foodImage from '../../assets/food-image.jpg';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string; // Optional image path
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  // Function to handle ordering
  const handleOrder = (itemName: string, itemPrice: string) => {
    alert(`You've ordered: ${itemName} for ${itemPrice}`);
    // In a real app, this would connect to an ordering system
  };

  // Default images for category types
  const getCategoryImage = (category: string) => {
    const drinkCategories = ['coffee', 'specialty', 'cold'];
    
    if (drinkCategories.includes(category)) {
      return coffeeImage;
    } else {
      return foodImage;
    }
  };

  const menuCategories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'specialty', name: 'Specialty Drinks' },
    { id: 'cold', name: 'Cold Drinks' },
    { id: 'food', name: 'Food' },
  ];

  // Add default images to menu items if not specified
  const addDefaultImages = (items: MenuItem[], categoryId: string) => {
    return items.map(item => ({
      ...item,
      image: item.image || getCategoryImage(categoryId)
    }));
  };

  const menuItemsData: MenuItems = {
    coffee: [
      { name: 'Americano', description: 'Rich espresso diluted with hot water for a smooth flavor.', price: '$4.25' },
      { name: 'Espresso (Single)', description: 'Our signature espresso blend with notes of chocolate and caramel.', price: '$3.95' },
      { name: 'Espresso (Double)', description: 'Double shot of our signature espresso.', price: '$4.25' },
      { name: 'Espresso Macchiato', description: 'Espresso marked with a dollop of frothy milk.', price: '$4.25' },
      { name: 'Alto Coffee', description: 'Our premium large-sized coffee.', price: '$4.95' },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and milk foam.', price: '$4.95' },
      { name: 'Cortado', description: 'Espresso cut with a small amount of warm milk.', price: '$4.95' },
      { name: 'Flat White', description: 'Espresso with steamed milk and minimal foam.', price: '$4.95' },
      { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam.', price: '$4.95' },
      { name: 'Drip Coffee', description: 'Traditional filter coffee.', price: '$2.95' },
      { name: 'Tea', description: 'Selection of loose leaf teas.', price: '$2.95' },
      { name: 'Hot Chocolate', description: 'Rich chocolate with steamed milk, topped with whipped cream.', price: '$4.95' }
    ],
    specialty: [
      { name: 'Flavored Latte', description: 'Choose from Caramel, Vanilla, Hazelnut, or Lavender.', price: '$5.50' },
      { name: 'Chai Latte', description: 'Spiced chai tea with steamed milk.', price: '$6.50' },
      { name: 'Dirty Chai Latte', description: 'Chai latte with a shot of espresso for an extra kick.', price: '$7.25' },
      { name: 'Mocha Latte', description: 'Espresso with chocolate and steamed milk.', price: '$5.95' },
      { name: 'Nutella Latte', description: 'Espresso with creamy Nutella and steamed milk.', price: '$6.50' },
      { name: 'Pistachio Latte', description: 'Espresso with pistachio flavor and steamed milk.', price: '$6.95' },
      { name: 'Biscoff Latte', description: 'Espresso with Biscoff cookie flavor and steamed milk.', price: '$6.50' },
      { name: 'Matcha Latte', description: 'Ceremonial grade matcha with steamed milk.', price: '$6.25' },
      { name: 'Biscoff Chai Latte', description: 'Chai latte infused with Biscoff cookie flavor.', price: '$7.50' }
    ],
    cold: [
      { name: 'Peachy Crush Smoothie', description: 'Peach, banana, pineapple, coconut.', price: '$7.95' },
      { name: 'Tropitwist Smoothie', description: 'Passion fruit, mango, apple, banana.', price: '$7.95' },
      { name: 'Berry Madness Shake', description: 'Strawberry, blueberry, currant.', price: '$7.95' },
      { name: 'Mango Lassi', description: 'Fresh mango, yogurt.', price: '$7.95' },
      { name: 'Nutty Banana Shake', description: 'Banana, natural peanut butter.', price: '$7.95' },
      { name: 'Fresh Lemon Mint', description: 'Freshly squeezed lemonade with mint.', price: '$5.95' },
      { name: 'Fizz Strawberry Moon', description: 'Sparkling lemonade with strawberry.', price: '$5.95' },
      { name: 'Tropical Mix Smoothie', description: 'Strawberry, orange, pineapple.', price: '$7.95' },
      { name: 'Iced Coffee', description: 'Our signature coffee served over ice.', price: '$4.50' },
      { name: 'Cold Brew', description: 'Smooth, low-acidity coffee brewed cold for 12 hours.', price: '$4.95' }
    ],
    food: [
      { name: 'Buffalo Chicken Sandwich', description: 'Maytag blue cheese, pickled onions, lettuce and tomato, ciabatta.', price: '$12.50' },
      { name: 'Southern Chicken Sandwich', description: 'House shallots spread, pickles, lettuce and tomato, brioche.', price: '$12.50' },
      { name: 'Smoked Brisket BBQ', description: 'Fried shallots, cheddar cheese, pickles, brioche.', price: '$15.50' },
      { name: 'Chicken Shish Kebab Wrap', description: 'Grilled chicken kebab with fresh vegetables.', price: '$10.95' },
      { name: 'Adana Kebab Wrap', description: 'Spiced minced meat kebab with vegetables.', price: '$10.95' },
      { name: 'Adana Bowl', description: 'Served with rice, chopped salad.', price: '$12.50' },
      { name: 'Chicken Shish Bowl', description: 'Served with rice, chopped salad.', price: '$12.50' },
      { name: 'French Fries', description: 'Crispy golden fries.', price: '$3.50' },
      { name: 'Cajun French Fries', description: 'Crispy fries with cajun seasoning.', price: '$3.50' },
      { name: 'Mozzarella Sticks', description: 'Crispy outside, melty inside. Served with marinara.', price: '$4.95' }
    ]
  };

  // Process menu items to ensure all have images
  const menuItems: MenuItems = Object.entries(menuItemsData).reduce((acc, [category, items]) => {
    acc[category] = addDefaultImages(items, category);
    return acc;
  }, {} as MenuItems);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Quality ingredients, expertly prepared</p>
        </div>
      </div>

      <section className="menu-section">
        <div className="container">
          <div className="menu-nav">
            {menuCategories.map(category => (
              <button
                key={category.id}
                className={`menu-nav-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-content">
            <h2 className="menu-category-title">{menuCategories.find(cat => cat.id === activeCategory)?.name}</h2>
            
            <div className="menu-items">
              {menuItems[activeCategory].map((item, index) => (
                <div className="menu-item" key={index}>
                  <div className="menu-item-image">
                    <img src={item.image || coffeeImage} alt={item.name} />
                  </div>
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                  <button 
                    className="order-now-btn menu-order-btn btn-animate"
                    onClick={() => handleOrder(item.name, item.price)}
                  >
                    <span className="btn-text">Order Now</span>
                    <span className="btn-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="menu-info">
        <div className="container">
          <div className="menu-info-grid">
            <div className="menu-info-card">
              <h3>Dietary Preferences</h3>
              <p>We're happy to accommodate dietary restrictions and preferences. Many of our items can be made vegetarian or vegan upon request. Please inform your server of any allergies or restrictions.</p>
            </div>
            <div className="menu-info-card">
              <h3>Locally Sourced</h3>
              <p>We work with local farmers and suppliers to bring you the freshest, highest quality ingredients. Our coffee beans are ethically sourced and roasted in small batches for optimal flavor.</p>
            </div>
            <div className="menu-info-card">
              <h3>Made Fresh Daily</h3>
              <p>All our food is prepared fresh daily. We pride ourselves on quality ingredients and homemade recipes that have been perfected over the years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="specials-section">
        <div className="container">
          <h2 className="section-title">Weekly Specials</h2>
          <div className="specials-card">
            <div className="specials-content">
              <h3>Current Special: Pumpkin Spice Season</h3>
              <p className="special-description">Our signature fall drink with real pumpkin, espresso, steamed milk, and warm spices. Available for a limited time!</p>
              <div className="special-price">$5.95</div>
              <button 
                className="order-now-btn specials-order-btn btn-animate"
                onClick={() => handleOrder("Pumpkin Spice Latte", "$5.95")}
              >
                <span className="btn-text">Order Now</span>
                <span className="btn-icon special-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
