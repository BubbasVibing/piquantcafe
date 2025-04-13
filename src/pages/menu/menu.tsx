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
        {/* Decorative elements */}
        <div className="menu-hero-decorations">
          <div className="menu-hero-icon icon-beans">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16Z" />
            </svg>
          </div>
          <div className="menu-hero-icon icon-cup">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
            </svg>
          </div>
          <div className="menu-hero-icon icon-steam">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          </div>
          <div className="menu-hero-icon icon-plant">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M20,8C18.22,8 16.64,8.86 15.69,10.15C15.88,9.59 16,8.97 16,8.33C16,5.38 13.5,3 10.5,3C8.08,3 6,4.67 5.37,6.91C6.42,5.16 8.34,4 10.5,4C12.93,4 15,5.91 15.34,8.35C14.26,6.9 12.48,6 10.5,6C8.03,6 5.96,7.67 5.22,10H4.25C4.9,6.97 7.47,4.73 10.5,4.73C13.53,4.73 16.1,6.97 16.75,10H18.75C18.75,8.18 19.68,6.59 21.07,5.67C21.07,4.67 20.13,3.75 18.75,3.75C17.6,3.75 16.57,4.39 16.57,5.79C16.57,6.79 17.32,7.86 18.45,7.94C17.11,7.64 16,6.29 16,4.68C16,3 17.8,1.75 19.5,1.75C21.21,1.75 23,3 23,5.5C23,9.5 20,12 20,12V12M11.11,12.35C11.11,15.85 8.93,17.5 6.33,17.5C3.72,17.5 1.5,15.85 1.5,12.35C1.5,8.85 3.67,9.35 6.28,9.35C8.88,9.35 11.11,8.85 11.11,12.35M9.61,11.85C9.61,10.3 8.9,10.85 6.3,10.85C3.69,10.85 3,10.3 3,11.85C3,13.4 3.7,16 6.3,16C8.9,16 9.61,13.4 9.61,11.85Z" />
            </svg>
          </div>
          <div className="menu-hero-icon icon-heart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
          <div className="menu-hero-icon icon-croissant">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" />
            </svg>
          </div>
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
    </div>
  );
};

export default Menu;
