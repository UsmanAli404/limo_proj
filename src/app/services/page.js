'use client';

import services from "@/data/services";

const Service = ({ id, heading, image, text }) => {
  return (
    <div id={id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <img className="w-full h-56 object-cover" src={image} alt={`service-${heading}`} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-neutral-800">{heading}</h2>
        <p className="text-zinc-600 mt-3 text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
 const servicesList = [
  {
    id: "birthday-limo",
    heading: "Birthday Limo Service",
    image: "/services/BL.webp",
    text: `Celebrate your birthday in unforgettable fashion with our premier Birthday Limo Service in Long Island. Whether you're planning a surprise party, a night out in the city, or a luxurious cruise through town with friends, we provide a stylish and safe experience. Our professional chauffeurs ensure on-time pickup, a smooth ride, and a party atmosphere with luxury amenities. Make your birthday celebration extra special with a limo that turns heads and creates lasting memories.`,
  },
  {
    id: "wedding-limo",
    heading: "Wedding Limo Service",
    image: "/services/WL.webp",
    text: `Your wedding day deserves the elegance and sophistication of a luxury limousine. Our Long Island Wedding Limo Service offers beautifully maintained vehicles, courteous and professional chauffeurs, and a stress-free transportation experience. Whether it’s for the bride, groom, or entire bridal party, we ensure you arrive on time and in style. From the ceremony to the reception, our wedding limos add a touch of class and comfort to your most cherished moments.`,
  },
  {
    id: "hourly-limo",
    heading: "Hourly Limo Service",
    image: "/services/HL.webp",
    text: `Need a limo by the hour for errands, meetings, or a spontaneous night out? Our Hourly Limo Service offers flexible, on-demand luxury transportation across Long Island and NYC. Whether it’s for business or leisure, enjoy a professionally chauffeured vehicle without worrying about traffic, parking, or schedules. Pay only for the time you use while enjoying premium comfort, privacy, and elegance every minute of your journey.`,
  },
  {
    id: "prom-limo",
    heading: "Prom Limo Service",
    image: "/services/PL.webp",
    text: `Make prom night truly magical with our Long Island Prom Limo Service. We provide stylish stretch limousines and luxury sedans equipped with modern lighting and sound systems to give students an unforgettable entrance. Parents can rest assured knowing our chauffeurs are experienced, background-checked, and committed to safety. Let your teens enjoy a glamorous and secure ride as they celebrate one of their biggest milestones.`,
  },
  {
    id: "event-limo",
    heading: "Special Event Limo Service",
    image: "/services/SL.webp",
    text: `Whether you’re heading to a concert, sporting event, gala, or private party, our Special Event Limo Service is designed to impress. Avoid the hassle of traffic, parking, and coordination by letting our professional chauffeurs take care of your transportation. We serve all types of events across Long Island and NYC, delivering a luxurious ride experience tailored to your schedule and preferences. Make your next event stylish, seamless, and stress-free.`,
  },
  {
    id: "corporate-travel",
    heading: "Corporate Travel",
    image: "/services/CL.webp",
    text: `Professionalism meets convenience with our Corporate Travel Limo Service. We provide punctual, discreet, and comfortable transportation for executives, employees, and clients across Long Island and the Tri-State area. Whether it’s airport transfers, business meetings, conferences, or corporate events, our fleet is equipped for productivity and comfort. Impress clients and reduce stress with our reliable business-class transportation.`,
  },
  {
    id: "airport-transport",
    heading: "Airport Transportation",
    image: "/services/AL.webp",
    text: `Our Long Island Airport Limo Service offers timely and luxurious transportation to and from JFK, LaGuardia, Newark, and MacArthur airports. Avoid the stress of traffic, parking, and delays with a professional chauffeur who tracks your flight and adjusts accordingly. Whether you're traveling for business or pleasure, start and end your trip in comfort with our top-rated airport limo services. We prioritize punctuality, safety, and smooth service.`,
  },
  {
    id: "winery-tour",
    heading: "Winery Tours",
    image: "/services/WIL.webp",
    text: `Explore Long Island’s famous wine country in style with our personalized Winery Tour Limo Service. Enjoy tastings at award-winning vineyards in the North Fork or Hamptons without worrying about driving. Our chauffeurs provide a relaxed and elegant travel experience while you indulge in scenic views and fine wines. Whether it’s a romantic getaway, girls' day out, or group event, our winery tours offer a luxurious way to sip and explore.`,
  }
];


  return (
    <div className="container-default mt-28 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-4">Our Limo Services</h1>
      <p className="text-zinc-600 md:w-2/3 text-lg">
        Serving Long Island and surrounding areas, we offer luxury car and limo services tailored to every special occasion — from birthdays to corporate events.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
