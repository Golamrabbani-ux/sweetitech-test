import shortId from 'shortid';
const products = [
  {
    id:shortId.generate(),
    name: 'Memory4less Providing Ram',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"ram",
    price: 100,
  },
  {
    id:shortId.generate(),
    name: 'Intel ram',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"ram",
    price: 102,
  },
  {
    id:shortId.generate(),
    name: 'Gigabyte GA-A320M-S2H',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"motherboard",
    price: 1000,
  },
  {
    id:shortId.generate(),
    name: 'Asus Prime A320M-K',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"motherboard",
    price: 1020,
  },
  {
    id:shortId.generate(),
    name: 'MSI G1050T4TC Computer graphics Card',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"graphicscard",
    price: 1110,
  },
  {
    id:shortId.generate(),
    name: 'Asus Prime A320M-K',
    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png',
    type:"graphicscard",
    price: 1220,
  }

]

export default products;