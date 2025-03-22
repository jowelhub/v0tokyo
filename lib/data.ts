import type { LocationData } from "./types"

export const locations: LocationData[] = [
  {
    id: "shibuya-crossing",
    title: "Shibuya Crossing",
    description: "The world's busiest pedestrian crossing, surrounded by giant video screens and neon signs.",
    lat: 35.6595,
    lng: 139.7004,
    category: "activity",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    details: [
      {
        title: "Best Time to Visit",
        content:
          "Visit during rush hour (around 5-7pm) for the full experience of thousands of people crossing at once.",
      },
      {
        title: "Photo Spot",
        content: "The Starbucks on the second floor of the Q-Front building offers a great view of the crossing.",
      },
    ],
  },
  {
    id: "senso-ji",
    title: "Senso-ji Temple",
    description:
      "Tokyo's oldest Buddhist temple, featuring the iconic Kaminarimon Gate and a bustling shopping street leading to the main temple grounds.",
    lat: 35.7147,
    lng: 139.7966,
    category: "shrine",
    images: ["/placeholder.svg?height=600&width=800"],
    details: [
      {
        title: "History",
        content: "Founded in 628 AD, Senso-ji is dedicated to Kannon, the Buddhist goddess of mercy.",
      },
      {
        title: "Nakamise Shopping Street",
        content: "The approach to the temple is lined with shops selling traditional crafts, snacks, and souvenirs.",
      },
    ],
  },
  {
    id: "shinjuku-gyoen",
    title: "Shinjuku Gyoen",
    description:
      "One of Tokyo's largest and most popular parks, featuring beautiful gardens in Japanese, English, and French styles.",
    lat: 35.6852,
    lng: 139.71,
    category: "nature",
    images: ["/placeholder.svg?height=600&width=800"],
    details: [
      {
        title: "Cherry Blossom Season",
        content: "One of the best spots in Tokyo for cherry blossom viewing (hanami) in late March to early April.",
      },
      {
        title: "Opening Hours",
        content: "Open from 9:00 AM to 4:30 PM, closed on Mondays. Small entrance fee required.",
      },
    ],
  },
  {
    id: "tokyo-skytree",
    title: "Tokyo Skytree",
    description: "The tallest tower in Japan offering panoramic views of Tokyo from its observation decks.",
    lat: 35.7101,
    lng: 139.8107,
    category: "activity",
    images: ["/placeholder.svg?height=600&width=800"],
    details: [
      {
        title: "Observation Decks",
        content: "Features two observation decks at 350m and 450m above ground level.",
      },
      {
        title: "Shopping and Dining",
        content: "The base of the tower houses a large shopping mall with restaurants and specialty shops.",
      },
    ],
  },
  {
    id: "meiji-shrine",
    title: "Meiji Shrine",
    description:
      "A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set in a peaceful forest in the heart of Tokyo.",
    lat: 35.6763,
    lng: 139.6993,
    category: "shrine",
    images: ["/placeholder.svg?height=600&width=800"],
    details: [
      {
        title: "Forest Walk",
        content:
          "The shrine is surrounded by a 170-acre forest with approximately 120,000 trees of 365 different species.",
      },
      {
        title: "Traditional Ceremonies",
        content: "A popular spot for traditional Japanese weddings, which visitors may be lucky enough to witness.",
      },
    ],
  },
]
