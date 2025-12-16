import { useState } from 'react';
import './menu.css';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  orderLink?: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sandwiches');

  const handleOrder = (item: MenuItem) => {
    if (item.orderLink) {
      window.open(item.orderLink, '_blank', 'noopener,noreferrer');
    }
  };

  const menuCategories = [
    { id: 'sandwiches', name: 'Sandwiches & Wraps' },
    { id: 'grilled', name: 'Grilled Pressed' },
    { id: 'salads', name: 'Salads' },
    { id: 'entrees', name: 'Hot Entrees' },
    { id: 'soups', name: 'Soups' },
    { id: 'sides', name: 'Sides' },
  ];

  const menuItemsData: MenuItems = {
    sandwiches: [
      { name: 'Albacore Tuna', description: 'Fresh spinach and tomato, served on artisan bread.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/albacore-tuna-K2SMAXHX6BNY8' },
      { name: 'Blue Cheese Buffalo Chicken', description: 'Pickled onions, lettuce, and tomato on ciabatta.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/blue-cheese-buffalo-chicken-BA87PY234TP70' },
      { name: 'Chicken Caesar Wrap', description: 'Croutons, lettuce, parmesan, and creamy caesar dressing.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/chicken-caesar-wrap-NAW8V42NEA8TE' },
      { name: 'Cobb Club Wrap', description: 'Creamy avocado, bacon, turkey, and fresh vegetables.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/cobb-club-wrap-9HRCJ1134DCCJ' },
      { name: 'Grilled Chicken & Fresh Mozzarella', description: 'Roasted peppers, wild arugula, and herb aioli.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/grilled-chicken-fresh-mozzarella-2VQG6B45VBZQW' },
      { name: 'House Roast Beef', description: 'Creamy fontina, pickled onion, and horseradish sauce.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/house-roast-beef-4A9FZ1HNZ0QZA' },
      { name: 'Smoked Chicken & Goat Cheese', description: 'Applewood smoked chicken with goat cheese.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/smoked-chicken-goat-cheese-SNXN6419HCNV6' },
      { name: 'Southern Chicken', description: 'Crispy chicken breast, beef bacon, pickles, and house sauce.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/southern-chicken-QV5AN3RTFHNYG' },
      { name: 'Burger', description: 'Onion, tomatoes, lettuce, and special sauce on brioche.', price: '$10.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/burger-BFX0NN7S891PC' },
      { name: 'Chipotle Smoked Turkey Avocado', description: 'Layered with avocado, beef bacon, and chipotle mayo.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/chipotle-smoked-turkey-avocado-S8T2VR2K8ZTPE' },
      { name: 'Grandma Meatballs', description: 'Meatballs, shredded mozzarella, and marinara sauce.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/grandma-meatballs-CKCVZRX2F8J5T' },
      { name: 'Shrimp Quesadilla', description: 'Shrimp sautéed with peppers and melted cheese.', price: '$13.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/shrimp-quesadilla-G1NFTRHPSFTPP' },
      { name: 'Spicy Asian Chicken', description: 'Pickled vegetables, sriracha mayo, and fresh herbs.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/spicy-asian-chicken-8AD21MH5BD48W' },
      { name: 'Spicy Asian Shrimp', description: 'Chile rubbed grilled shrimp with Asian slaw.', price: '$13.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/spicy-asian-shrimp-VMH8KFSY1DC4T' }
    ],
    grilled: [
      { name: 'Chipotle Pecan Chicken BLT', description: 'Brown sugar beef bacon, pecans, and chipotle glaze.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/chipotle-pecan-chicken-blt-59V25XC7XAM3E' },
      { name: 'Chicken Quesadilla', description: 'Grilled flour tortilla filled with chicken and cheese.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/chicken-quesadilla-DVTAW5XVMPFPY' },
      { name: 'Harissa Tomato Grilled Cheese', description: 'Aged cheddar and diced plum tomatoes with harissa.', price: '$9.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/harissa-tomato-grilled-cheese-16CSAE9R8ZWJ2' },
      { name: 'Mediterranean Tuna Melt', description: 'Tuna with sharp cheddar, olives, and sun-dried tomatoes.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/mediterranean-tuna-melt-ZJVNXKAZPGNYT' },
      { name: 'Roasted Turkey & Fresh Mozzarella', description: 'Basil pine nuts pesto, roasted peppers, fresh mozzarella.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/roasted-turkey-fresh-mozzarella-D1VECAR0ZRTT4' },
      { name: 'Spicy Feta Chicken', description: 'Sun-dried tomato pesto, feta cheese, and spinach.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/spicy-feta-chicken-1VBP5C4VRCPMR' },
      { name: 'Spicy Squash & Cheese', description: 'Roasted butternut squash with melted gruyere.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/spicy-squash-cheese-ZNVP6S9GBT6V6' },
      { name: 'The Cuban', description: 'Roasted turkey, cured ham, swiss, pickles, and mustard.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/the-cuban-RVVTB7R78FMN2' },
      { name: 'Turkey Ham Melt', description: 'Aged cheddar, garlic aioli, on sourdough.', price: '$10.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/turkey-ham-melt-ZRYFJA3Y7XQNE' }
    ],
    salads: [
      { name: 'Ancho Roasted Salmon', description: 'Bean sprouts, edamame, carrots, and ginger dressing.', price: '$13.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/ancho-roasted-salmon-PEC4H847EKXS6' },
      { name: 'Cajun Shrimp Salad', description: 'Grilled shrimp, grilled fresh corn, black beans, and avocado.', price: '$12.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/cajun-shrimp-salad-Z8BV0770WFJDE' },
      { name: 'Cobb Salad', description: 'Grilled chicken, avocado, beef bacon, egg, and blue cheese.', price: '$12.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/cobb-salad-CYG7A1Y4BJA6A' },
      { name: 'Grilled Chicken Caesar', description: 'Crisp romaine hearts, shaved parmesan, and croutons.', price: '$11.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/grilled-chicken-caesar-NRHJBXCCT2WAM' },
      { name: 'Grilled Chicken with Cranberries', description: 'Caramelized walnuts, blue cheese, dried cranberries.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/grilled-chicken-with-cranberries-FXWYEJT3VMWGE' },
      { name: 'Hearty Farro & Kale', description: 'Kale and nutty farro tossed with lemon vinaigrette.', price: '$11.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/hearty-farro-kale-5EPX8FXW2X0EM' },
      { name: 'Traditional Greek', description: 'Plum tomatoes, cucumber, olives, feta, and red onion.', price: '$9.95', orderLink: 'https://piquant-cafe.cloveronline.com/menu/traditional-greek-46FF2S2PV3F66' }
    ],
    entrees: [
      { name: 'Coconut Chicken Tenders', description: 'Chicken breast strips with coconut breading, served with fries.', price: '$15.90', orderLink: 'https://piquant-cafe.cloveronline.com/menu/coconut-chicken-tenders-VM0JENS3MYM5A' }
    ],
    soups: [
      { name: 'Classic Chicken Noodle', description: 'Hearty chicken broth with tender chicken and egg noodles.', price: '$8.00', orderLink: 'https://piquant-cafe.cloveronline.com/menu/classic-chicken-noodle-soup-CFG2DAHFS2QD6' },
      { name: 'Pumpkin Corn Bisque', description: 'Creamy blend of pumpkin and sweet corn.', price: '$8.00', orderLink: 'https://piquant-cafe.cloveronline.com/menu/pumpkin-corn-bisque-T3337C1NZX0D2' },
      { name: 'Roasted Artichoke & Butternut Squash Soup', description: 'Slow-roasted artichokes and butternut squash in cream broth.', price: '$8.00', orderLink: 'https://piquant-cafe.cloveronline.com/menu/roasted-artichoke-butternut-squash-soup-3G0BCNC9M6Z0P' }
    ],
    sides: [
      { name: 'French Fries', description: 'Crispy golden fries.', price: '$4.50', orderLink: 'https://piquant-cafe.cloveronline.com/menu/french-fries-9FE7GBRWN4W3T' }
    ]
  };

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Quality ingredients, expertly prepared</p>
        </div>
      </div>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          {/* Category Navigation */}
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

          {/* Menu Items */}
          <div className="menu-content">
            <h2 className="menu-category-title">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            
            <div className="menu-grid">
              {menuItemsData[activeCategory].map((item, index) => (
                <div className="menu-card" key={index}>
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3 className="menu-card-name">{item.name}</h3>
                      <span className="menu-card-price">{item.price}</span>
                    </div>
                    <p className="menu-card-description">{item.description}</p>
                  </div>
                  <div className="menu-card-footer">
                    <button 
                      className="menu-card-order"
                      onClick={() => handleOrder(item)}
                      aria-label={`Order ${item.name}`}
                    >
                      Order
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                      </svg>
                    </button>
                  </div>
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
