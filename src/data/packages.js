export const dayPacks = [
  {
    name: "Secret Day Chill Pack",
    price: "2,000",
    basePrice: 2000
  },
  {
    name: "Secret Surf Starter Day",
    price: "7,500",
    basePrice: 7500
  },
  {
    name: "Secret Friends Fun Day",
    price: "8,500",
    basePrice: 8500
  }
];

export const comboPacks = [
  {
    name: "2N3D Backpacker Pack",
    price: "20,000 - 22,000",
    basePrice: 20000
  },
  {
    name: "3N4D Surf & Social Pack",
    price: "32,000 - 34,000",
    basePrice: 32000
  },
  {
    name: "4N5D Ocean Adventure Pack",
    price: "45,000 - 47,500",
    basePrice: 45000
  }
];

export const groupPacks = [
  {
    name: "Secret Group Weekender",
    price: "Contact for Group Rates",
    basePrice: 0
  },
  {
    name: "Secret Jumbo Group",
    price: "Contact for Group Rates",
    basePrice: 0
  }
];

export const allPackages = [...dayPacks, ...comboPacks, ...groupPacks];
