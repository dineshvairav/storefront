export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  material: 'brass' | 'aluminum' | 'stainless steel' | 'cast iron' | 'other' | 'mixed';
  image: string;
  aiHint: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Stainless Steel Pot",
    description: "A durable 10-quart stainless steel pot, perfect for stews and soups. Features a heavy-duty lid and cool-touch handles.",
    price: "$79.99",
    material: "stainless steel",
    image: "https://placehold.co/600x400.png",
    aiHint: "steel pot",
  },
  {
    id: "2",
    name: "Artisan Cast Iron Skillet",
    description: "Pre-seasoned 12-inch cast iron skillet for the perfect sear. Heats evenly and retains warmth for a long time.",
    price: "$45.50",
    material: "cast iron",
    image: "https://placehold.co/600x400.png",
    aiHint: "iron skillet",
  },
  {
    id: "3",
    name: "Elegant Brass Serving Tray",
    description: "A beautifully handcrafted brass tray with intricate etchings. Ideal for serving drinks or as a decorative centerpiece.",
    price: "$120.00",
    material: "brass",
    image: "https://placehold.co/600x400.png",
    aiHint: "brass tray",
  },
  {
    id: "4",
    name: "High-Power Blender",
    description: "1500W blender with multiple speed settings and a large 64oz container. Crushes ice and fruits with ease.",
    price: "$149.99",
    material: "other",
    image: "https://placehold.co/600x400.png",
    aiHint: "kitchen blender",
  },
  {
    id: "5",
    name: "Lightweight Aluminum Pan",
    description: "A non-stick aluminum frying pan that heats up quickly and is easy to handle. Perfect for everyday cooking.",
    price: "$29.99",
    material: "aluminum",
    image: "https://placehold.co/600x400.png",
    aiHint: "aluminum pan",
  },
  {
    id: "6",
    name: "Stainless Steel Cutlery Set",
    description: "24-piece premium stainless steel cutlery set with a mirror finish. Service for 6 people.",
    price: "$89.99",
    material: "stainless steel",
    image: "https://placehold.co/600x400.png",
    aiHint: "cutlery set",
  },
  {
    id: "7",
    name: "Cast Iron Dutch Oven",
    description: "5.5-quart enamel-coated cast iron dutch oven. Perfect for braising, baking, and slow cooking. Available in multiple colors.",
    price: "$99.00",
    material: "cast iron",
    image: "https://placehold.co/600x400.png",
    aiHint: "dutch oven",
  },
  {
    id: "8",
    name: "Brass Candle Holder Set",
    description: "Set of three elegant brass candle holders of varying heights. Adds a warm, sophisticated glow to any room.",
    price: "$65.00",
    material: "brass",
    image: "https://placehold.co/600x400.png",
    aiHint: "candle holders",
  },
   {
    id: "9",
    name: "Professional Toaster",
    description: "4-slice toaster with wide slots and precise browning control. Stainless steel body for a modern look.",
    price: "$59.99",
    material: "stainless steel",
    image: "https://placehold.co/600x400.png",
    aiHint: "toaster kitchen",
  },
  {
    id: "10",
    name: "Aluminum Baking Sheet Set",
    description: "Set of two commercial-grade aluminum baking sheets. Great for cookies, roasting vegetables, and more.",
    price: "$25.00",
    material: "aluminum",
    image: "https://placehold.co/600x400.png",
    aiHint: "baking sheets",
  },
  {
    id: "11",
    name: "Stainless Steel Mixing Bowls",
    description: "Set of three nesting stainless steel mixing bowls with non-slip bases and measurement markings.",
    price: "$39.99",
    material: "stainless steel",
    image: "https://placehold.co/600x400.png",
    aiHint: "mixing bowls",
  },
  {
    id: "12",
    name: "Electric Kettle",
    description: "1.7L fast-boil electric kettle with auto shut-off and boil-dry protection. Cordless design with a stainless steel finish.",
    price: "$49.95",
    material: "stainless steel",
    image: "https://placehold.co/600x400.png",
    aiHint: "electric kettle",
  },
];
