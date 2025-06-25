import imgBenzSClass from "../../public/cars/car-benz-s-class.webp";
import imgBenzVClass from "../../public/cars/car-benz-v-class.webp";
import imgAudiA8 from "../../public/cars/car-audi-a8.webp";
import imgEscalade from "../../public/cars/car-cadillac-escalade.webp";
import imgRoyce from "../../public/cars/car-rolls-royce-ghost.webp";

const cars = [
  {
    id: 1,
    name: "Premium Sedan",
    detail:
      "Experience first-class comfort in our Mercedes-Benz S-Class, the ultimate luxury sedan for executive travel, airport transfers, and special occasions in NYC and Long Island. With sleek design, premium leather interiors, and cutting-edge safety features, this vehicle redefines sophistication for black car service clients.",
    image: imgBenzSClass,
    seats: 3,
    luggage: 3,
    type: ["luxury"],
  },
  {
    id: 2,
    name: "Sprinter Vans",
    detail:
      "Our Mercedes-Benz Sprinter Van offers spacious group transportation with luxury amenities, perfect for corporate events, airport shuttles, and weddings. Accommodating up to 12 passengers, it blends comfort, style, and utility—ideal for group limo service in Manhattan, Long Island, and the Bronx.",
    image: imgBenzVClass,
    seats: 12,
    luggage: 10,
    type: ["crossover"],
  },
  {
    id: 3,
    name: "Luxury Premium Sedan",
    detail:
      "The Audi A8 L is a top-tier premium sedan designed for VIPs and business travelers seeking elegance and innovation. With advanced driver assistance systems, plush seating, and quiet ride quality, it’s the smart choice for black car service, luxury hourly rentals, and high-end chauffeur service.",
    image: imgAudiA8,
    seats: 3,
    luggage: 3,
    type: ["business"],
  },
  {
    id: 4,
    name: "Cadillac Escalade",
    detail:
      "Turn heads with our Cadillac Escalade—an iconic SUV perfect for VIP transportation, celebrity arrivals, and luxury family travel. Its bold design, roomy cabin, and tech-forward features make it ideal for airport limo service, prom nights, and NYC sightseeing in pure style.",
    image: imgEscalade,
    seats: 4,
    luggage: 4,
    type: ["luxury", "business"],
  },
  {
    id: 5,
    name: "Rolls Royce",
    detail:
      "Indulge in the pinnacle of luxury with the Rolls-Royce Ghost—our most prestigious sedan for weddings, elite transfers, and special celebrations. Featuring handcrafted interiors, whisper-quiet performance, and unmatched elegance, it's the preferred choice for VIP clients seeking chauffeured excellence across New York.",
    image: imgRoyce,
    seats: 2,
    luggage: 2,
    type: ["luxury", "crossover"],
  },
];

export default cars;