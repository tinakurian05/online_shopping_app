import React, { useState } from 'react';
import './Categories.css';
import './BackgroundWrapper.css';
import { useCart } from '../context/CartContext';

const categories = [
  {
    name: 'Titan Octane Series',
    subcategories: [
      { name: 'Octane Upgrade', image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/watch/h/3/j/-original-imahc6exgvbkebd9.jpeg?q=90&crop=false' },
      { name: 'Octane Signature', image: 'https://rukminim2.flixcart.com/image/300/300/xif0q/watch/t/w/p/-original-imagp2c6pmsyznm6.jpeg' },
      {name: 'Octane Hyper Lume', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10246447/2023/10/5/5fcd62da-e633-466a-bfc1-d1a0a183b1e31696508144769-Titan-Octane-Hyper-Lume-Men-Blue-Analogue-watch-90113KP02-88-1.jpg' },
      { name: 'Octane Classic Sporty', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc52d7ee1/images/Titan/Catalog/90150NM01_1.jpg?sw=600&sh=600' },
      { name: 'Octane Active', image: 'https://m.media-amazon.com/images/I/81VpBt997FL.jpg' },
      { name: 'Octane Basics', image: 'https://m.media-amazon.com/images/I/61SsWftkzPL._UY1000_.jpg' },
      { name: 'Octane Phoenix', image: 'https://m.media-amazon.com/images/I/71tEJ73fkZL._UF1000,1000_QL80_.jpg' },
      { name: 'Squadron', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw3a400451/images/Titan/Catalog/1613NP01_1.jpg' },
      { name: 'Thunderbolt', image: 'https://5.imimg.com/data5/EB/UY/MY-35870101/thunderbolt-from-squadron-watches-1611nl01.png' },
      { name: 'Scouter', image: 'https://5.imimg.com/data5/RU/CC/MY-35870101/scouter-from-squadron-watch-1613np01-500x500.png' },
      { name: 'Hawker', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3adff7dc/images/Titan/Catalog/1612NP01_1.jpg?sw=800&sh=800' },
      { name: 'Falcon', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw18db5868/images/Titan/Catalog/1614NL01_1.jpg' },
      { name: 'Aerobatics', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcfce97f4/images/Titan/Catalog/1859NL01_1.jpg?sw=800&sh=800' },
      // Add more Octane subcategories here
    ],
  },
  {
    name: 'Titan Regalia Collection',
    subcategories: [
      { name: 'Regalia Opulent', image: 'https://www.krishnawatch.com/cdn/shop/files/MP000000020112300_658Wx734H_202311171332585.webp?v=1740396007&width=1445' },
      { name: 'Regalia Premium', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw1859f0cb/images/Titan/Catalog/1688KM07_1.jpg' },
      { name: 'Regalia Chronograph', image: 'https://m.media-amazon.com/images/I/51Lis93nCoL.jpg' },
      { name: 'Regalia Maritime', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10797796/2023/1/11/2d8b7d92-409d-4121-9904-5807e30d37b51673433903406-Titan-Regalia-Maritime-Men-Sea-Green-Analogue-watch-1829QL01-1.jpg' },
      { name: 'Regalia Stellar', image: 'https://m.media-amazon.com/images/I/61y6rXRML+L._AC_UY1000_.jpg' },
      { name: 'Regalia Baron', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwec92f0bb/images/Titan/Catalog/1743NM01_1.jpg?sw=600&sh=600' },
      { name: 'Regalia Sovereign', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwba8b67b7/images/Titan/Catalog/1752YM01_1.jpg?sw=600&sh=600' },
      { name: 'Regalia Grandmaster II', image: 'https://watchbrand.in/media/catalog/product/n/p/np1828ql03.jpg' },
      { name: 'Regalia Quartet', image: 'https://m.media-amazon.com/images/I/716EfilI-bL._AC_UY1000_.jpg' },
      // Add more Regalia subcategories here
    ],
  },
  {
    name: 'Titan Raga Collection',
    subcategories: [
      { name: 'Raga Viva', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0dc3406/images/Titan/Catalog/2642QM01_1.jpg' },
      { name: 'Raga Showstopper', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7cdcae6c/images/Titan/Catalog/95271WM02_2.jpg?sw=600&sh=600' },
      { name: 'Raga Delight', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc25dda89/images/Titan/Catalog/95198WM01_1.jpg?sw=800&sh=800' },
      { name: 'Raga Chic', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwdbb0be76/images/Titan/Catalog/2688WM01_1.jpg?sw=800&sh=800' },
      { name: 'Raga Moments of Joy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kykRMUqvG_RySmS70hYePo3OU4zy5YkgVWlCZONWs0YYc4oQS7eHJDgj-0WOBFj1UMs&usqp=CAU' },
      { name: 'Raga Love All', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw35638a2a/images/Titan/Catalog/95154QM01_1.jpg?sw=800&sh=800' },
      { name: 'Raga Ceramics', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3105905/images/Titan/Catalog/95146KD02_2.jpg?sw=600&sh=600' },
      { name: 'Raga Facets', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10785360/2024/2/26/41d046ee-fd33-49a2-ad6f-acc8d2f6a46b1708950024141-Titan-Raga-Facets-Women-Rose-Gold-Analogue-watch-95121WM01-9-1.jpg' },
      { name: 'Raga Garden of Eden', image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/watch/9/n/k/-original-imags4bdbzmfryyh.jpeg?q=90&crop=false' },
      { name: 'Raga Zeal', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/4450692/2024/2/22/25682901-4fc6-455b-935e-45fe41eca8bd1708604803851-Titan-Raga-Zeal-Women-Beige-Analogue-watch-NL2576YM01-374170-4.jpg' },
      // Add more Raga subcategories here
    ],
  },
  {
    name: 'Titan Edge Series',
    subcategories: [
      { name: 'Edge Ceramic', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw254e6bd7/images/Titan/Catalog/1696QC03_1.jpg' },
      { name: 'Edge Ceramic Dress with Diamonds', image: 'https://m.media-amazon.com/images/I/61e-WWgNwBL.jpg' },
      { name: 'Edge Fusion', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwff663a28/images/Titan/Catalog/1878KD03_1.jpg?sw=800&sh=800' },
      { name: 'Edge Bicolour', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw28f32a94/images/Titan/Catalog/2653KC12_1.jpg?sw=800&sh=800' },
      { name: 'Edge Squircle', image: 'https://m.media-amazon.com/images/I/61dr9Zs7PNL._AC_SS300_.jpg' },
      { name: 'Squircle Camo', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa271a2e/images/Titan/Catalog/1841QC05_1.jpg' },
      { name: 'Ceramic Camo', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd855da06/images/Titan/Catalog/1696KC04_1.jpg?sw=800&sh=800' },
      { name: 'Edge Mechanical', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw58e96057/images/Titan/Catalog/1811SL01_1.jpg?sw=800&sh=800' },
    ],
  },
  {
    name: 'Titan Neo Series',
    subcategories: [
      { name: 'Neo Splash', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3815ea24/images/Titan/Catalog/1805KM07_4.jpg?sw=600&sh=600' },
      { name: 'Neo Curve', image: 'https://m.media-amazon.com/images/I/71-I1actpgL._UY1000_.jpg' },
      { name: 'Neo Economy', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw16d57974/images/Titan/Catalog/1802QL03_1.jpg' },
      { name: 'Neo Sartorial', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw9ce239e6/images/Titan/Catalog/1805QM02_1.jpg' },
    ],
  },
  {
    name: 'Titan Automatic Series',
    subcategories: [
      { name: 'Nexus', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw672f9926/images/Titan/Catalog/90221QM01_3.jpg?sw=600&sh=600' },
      { name: 'Phoenix', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe19e8a28/images/Titan/Catalog/90223WL01_2.jpg?sw=600&sh=600' },
      { name: 'Yin-Yang', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw35c6ed18/images/Titan/Catalog/90222KM01_3.jpg?sw=600&sh=600' },
      { name: 'Open Heart Automatics', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe53f7cbc/images/Titan/Catalog/90126WL03_1.jpg?sw=800&sh=800' },
      { name: 'Skeletal Automatics', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb28d6ae3/images/Titan/Catalog/90110WM01_2.jpg?sw=600&sh=600' },
      { name: 'Automatics with Leather Straps', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf3c11d9/images/Titan/Catalog/90110WL02_2.jpg?sw=600&sh=600' },
      { name: 'Automatics with stainless steel', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwe132b49a/images/Titan/Catalog/90162QM01_1.jpg' },
      { name: 'Ceramic Fusion', image: 'https://m.media-amazon.com/images/I/61B7qEJpeRL._UY1000_.jpg' },
      { name: 'Automatic Color Upgrade', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw120fc7a4/images/Titan/Catalog/90110QM03_3.jpg?sw=600&sh=600' },
      { name: 'Magnate', image: 'https://m.media-amazon.com/images/I/61bY3dq0PyL._UF1000,1000_QL80_.jpg' },
      { name: 'Mechanical', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf0ad4339/images/Titan/Catalog/90158KM01_3.jpg?sw=600&sh=600' },
      { name: 'Metal Mechanicals', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda7dfd6a/images/Titan/Catalog/90140TM01_1.jpg?sw=800&sh=800' },
    ],
  },
  {
    name: 'Titan Karishma',
    subcategories: [
      { name: 'Karishma Upgrades', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6542776/2023/10/4/8631ec05-dd0f-4f85-87d0-24a72dd982831696419886463-Titan-Karishma-Upgrades-Men-Silver-Analogue-watch-NL1735SL01-1.jpg' },
      { name: 'Karishma Refresher', image: 'https://rukminim1.flixcart.com/image/300/300/xif0q/watch/9/v/e/1-nn1712ym01-titan-men-original-imahcn4aamh8uh7g.jpeg' },
      { name: 'Karishma Gents', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf389c7ea/images/Titan/Catalog/1825SM11_1.jpg?sw=600&sh=600' },
      { name: 'Karishma Zing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSju2ivf3fPnV_nDO6Q0fvO2M5hXedSSuNUZsoV1ebE0BVQkbxtCkQmUdVbXL-QetXh_Q0&usqp=CAU' },
      { name: 'Karishma Gap Filler', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10832044/2023/6/21/ecd56306-cd97-4125-adb3-4926095fbda61687360126952TitanKarishmaGapFillerWomenGoldAnaloguewatchNL2594YL011.jpg' },
      { name: 'Ladies Karishma', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7a88b988/images/Titan/Catalog/2702WL01_1.jpg?sw=600&sh=600' },
      { name: 'Karishma Bandhan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVdAILsQt8EZQztvHruH0o8MVhGIJwER09LUpJULDCBQXbzipHoWKvswnvEvjx6848y4&usqp=CAU' },
    ],
  },
  {
    name: 'Titan Smartwatch Series',
    subcategories: [
      { name: 'Titan Evoke', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw311e22a7/images/Titan/Catalog/90172AL01_3.jpg?sw=600&sh=600' },
      { name: 'Titan Crest', image: 'https://www.jiomart.com/images/product/original/494421702/titan-crest-smartwatch-black-digital-o494421702-p609582045-0-202407261210.jpeg?im=Resize=(420,420)' },
      { name: 'Titan Smart 2', image: 'https://m.media-amazon.com/images/I/61ZA85fi2ML._UY1000_.jpg' },
      { name: 'Titan Smart Pro', image: 'https://m.media-amazon.com/images/I/51EqcQnv7BL.jpg' },
      { name: 'Titan Evolution', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw768c47a6/images/Titan/Catalog/90204AP03_1.jpg?sw=800&sh=800' },
      { name: 'Titan Celestor', image: 'https://m.media-amazon.com/images/I/61ofV82kMKL._UF1000,1000_QL80_.jpg' },
      { name: 'Titan Zeal', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg' },
      { name: 'Titan Mirage', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa459bb41/images/Titan/Catalog/90184AM01_1.jpg?sw=800&sh=800' },
      { name: 'Titan Smart 3', image: 'https://m.media-amazon.com/images/I/71EvFZURNZL.jpg' },
      { name: 'Titan Traveller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7UCTSKYS9bqtNLf_P16Fpxvoq-OvEPvxI5Ch4APqTbzgHJlXQGrJEtefOVGuOb3hNuc&usqp=CAU' },
      { name: 'Titan Heritage', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwccf4d845/images/Titan/Catalog/90207QM01_1.jpg' },
      { name: 'Titan Talk S', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/0/s/d/-original-imaghz6ttht6kejs.jpeg?q=90&crop=false' },
      { name: 'Titan Valerie', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf073de5/images/Titan/Catalog/95292WM02_1.jpg' },
    ],
  },
  {
    name: 'Nebula Watches by Titan',
    subcategories: [
      { name: 'Ashvi', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5f71726c/images/Titan/Catalog/5578DM05_6.jpg?sw=600&sh=600' },
      { name: 'Quartz Chronograph', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw949b47e2/images/Titan/Catalog/90146SL01_2.jpg?sw=600&sh=600' },
      { name: 'Lustre', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw443b084f/images/Titan/Catalog/5064DL02_1.jpg?sw=800&sh=800' },
      { name: 'FW22', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6CBmvoVACZZhHz3OJTeCkBliBv0HgA0DgzCqhjvqhL2ADDVMW6QWJkcWFON9lFkNDmw&usqp=CAU' },
      { name: 'Deccan Treasures', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcb42ef91/images/Titan/Catalog/5065DL01_1.jpg?sw=800&sh=800' },
      { name: 'Calligraphy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul5dyZCFI8_wJ5WVROQSDGD0eiAm_JjDgCB0FkZCciZ8f42cPu4_2jHr8nb8tyfefFJ8&usqp=CAU' },
      { name: 'MUSEUM', image: 'https://watchfactory.in/cdn/shop/files/ns95248wm01_1.jpg?v=1749480106&width=1080' },
      { name: 'Filigree', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7f7c2758/images/Titan/Catalog/5037DL01_1.jpg?sw=800&sh=800' },
      { name: 'Ajanta and Ellora', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwab4ba960/images/Titan/Catalog/5532DL04_1.jpg' },
      { name: 'Rajputana', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw90d26723/images/Titan/Catalog/5024DL04_1.jpg?sw=800&sh=800' },
      { name: 'Nakashi', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw88712a45/images/Titan/Catalog/5567DM04_5.jpg?sw=600&sh=600' },
      { name: 'Kalagya', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9c52e428/images/Titan/Catalog/5578DM03_2.jpg?sw=360&sh=360' },
      { name: 'Abhiyant', image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw1efdd5fb/images/Titan/Catalog/5078DL02_1.jpg' },
    ],
  },
  {
    name: 'Titan Couple Watches',
    subcategories: [
      { name: 'Titan Bandhan Watches', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1d26da48/images/Titan/Catalog/15802490QM01P_2.jpg?sw=600&sh=600' },
    ],
  },
];



const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const { addToCart } = useCart(); // ✅ Use the hook

  const toggleCategory = (categoryName) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  return (
    <div className="categories-container">
      <h1 className="categories-title">Explore Titan Collections</h1>
      {categories.map((group) => (
        <div key={group.name} className="category-group">
          <button className="category-button" onClick={() => toggleCategory(group.name)}>
            {group.name}
          </button>

          {activeCategory === group.name && (
            <div className="subcategory-grid">
              {group.subcategories.map((sub) => (
                <div key={sub.name} className="subcategory-card">
                  <img src={sub.image} alt={sub.name} className="subcategory-image" />
                  <h4>{sub.name}</h4>
                  <button
                    className="explore-button"
                    onClick={() =>
                      addToCart({
                        id: sub.name, // ensure unique ID
                        name: sub.name,
                        image: sub.image,
                        brand: 'Titan',
                        price: 4999, // example price
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;