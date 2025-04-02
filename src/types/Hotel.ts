// TYpe of Hotel
export type HotelDataType = {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isVerified: boolean;
};

// Hotels Data
export const hotels: HotelDataType[] = [
  {
    id: 1,
    name: "Little Jaisal Haveli",
    location: "Jaipur",
    price: 2400,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img1.png",
    isVerified: true,
  },
  {
    id: 2,
    name: "Hotel Rajasthan Palace",
    location: "Jaipur",
    price: 5610,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img2.png",
    isVerified: true,
  },
  {
    id: 3,
    name: "Sheel Mahal- Near Hawa Mahal",
    location: "Jaipur",
    price: 1200,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img3.png",
    isVerified: true,
  },
  {
    id: 4,
    name: "Hukamgarh - A Luxury Boutique",
    location: "Jaipur",
    price: 3800,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img4.png",
    isVerified: true,
  },
  {
    id: 5,
    name: "Super Hotel O Moti Doongri",
    location: "Jaipur",
    price: 800,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img5.png",
    isVerified: false,
  },
  {
    id: 6,
    name: "Grand Uniara A Heritage Hotel",
    location: "Jaipur",
    price: 8950,
    rating: 4.2,
    reviews: 1600,
    image: "/image/img6.png",
    isVerified: true,
  },
];
