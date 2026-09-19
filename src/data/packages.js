export const dayPacks = [
  {
    name: "Secret Day Chill Pack",
    badge: "Budget Friendly",
    target: "Backpackers + Friends",
    price: "2,000",
    basePrice: 2000,
    includes: [
      "Restaurant: Breakfast",
      "Beach chill support + Secret map",
      "BYOB night access",
      "Night stay with dorm bed"
    ],
    notIncluded: ["Transport", "Surfing", "Photos"],
    discounts: "1 Week: 10% | 1 Month: 20%"
  },
  {
    name: "Secret Surf Starter Day",
    badge: "Best Seller",
    target: "Surfers + Friend Groups",
    price: "7,500",
    basePrice: 7500,
    includes: [
      "Surf lesson (group) + board included",
      "Restaurant: Breakfast + Bite Plate for Night",
      "BYOB night access",
      "Night Stay with Dorm Bed",
      "One Printed Group photo + 1 Raw photo each"
    ],
    discounts: "1 Week: 10% | 1 Month: 20%"
  },
  {
    name: "Secret Friends Fun Day",
    badge: "Content + Activity",
    target: "Friend groups who want memories",
    price: "8,500",
    basePrice: 8500,
    includes: [
      "1 activity choice: Boat/Kayak/Turtle/Whale/Surf",
      "Restaurant: Breakfast + Bite Plate for Night",
      "BYOB night access",
      "Mini photo set (quick content)",
      "Night Stay with Dorm Bed"
    ],
    discounts: "1 Week: 10% | 1 Month: 20%"
  }
];

export const comboPacks = [
  {
    name: "2N3D Backpacker Pack",
    duration: "2 Nights 3 Days",
    target: "Backpackers, Small Groups",
    price: "20,000 - 22,000",
    basePrice: 20000,
    includes: [
      "2 nights dorm",
      "BYOB access (both nights)",
      "1 surf lesson (group)",
      "1 guided local experience: Turtle/Crocodile watching"
    ],
    pricing: "No Breakfast: 20,000 | With Breakfast: 22,000"
  },
  {
    name: "3N4D Surf & Social Pack",
    duration: "3 Nights 4 Days",
    badge: "Secret Family Vibe",
    target: "Surfers + Friend Groups",
    price: "32,000 - 34,000",
    basePrice: 32000,
    includes: [
      "3 nights dorm",
      "BYOB access (3 nights)",
      "2 surf sessions (lesson + practice)",
      "Open Mic night (free entry)",
      "1 activity: Boat ride OR Crocodile watch",
      "Photography"
    ],
    pricing: "No Breakfast: 32,000 | With Breakfast: 34,000"
  },
  {
    name: "4N5D Ocean Adventure Pack",
    duration: "4 Nights 5 Days",
    badge: "Premium",
    target: "I want to do everything travelers",
    price: "45,000 - 47,500",
    basePrice: 45000,
    includes: [
      "4 nights dorm",
      "BYOB access (4 nights)",
      "2 surf sessions (lesson + practice)",
      "2 ocean experiences: Whale watching/Diving/Fishing/Boat",
      "1 wildlife trip: Turtle or Crocodile watching"
    ],
    pricing: "No Breakfast: 45,000 | With Breakfast: 47,500"
  }
];

export const groupPacks = [
  {
    name: "Secret Group Weekender",
    duration: "2N3D",
    capacity: "4 to 10 pax",
    price: "Contact for Group Rates",
    basePrice: 0,
    includes: [
      "2 nights dorm (block booking)",
      "BYOB access",
      "1 group surf lesson",
      "1 group experience: Boat OR Kayak",
      "Tuk/van transport for 1 trip loop"
    ],
    note: "Breakfast option available"
  },
  {
    name: "Secret Jumbo Group",
    duration: "3N4D",
    badge: "Everything Handled",
    capacity: "6 to 10 pax",
    price: "Contact for Group Rates",
    basePrice: 0,
    includes: [
      "3 nights dorm (block booking)",
      "BYOB access (3 nights)",
      "2 surf sessions",
      "2 activities: Fishing+Boat OR Diving+Kayak",
      "Open Mic reserved area",
      "Transport included (tuk/van)"
    ]
  }
];

export const allPackages = [...dayPacks, ...comboPacks, ...groupPacks];
