import { motion } from "framer-motion";

const bentoItems = [
  {
    number: "200+",
    label: "Happy Clients",
    description: "Families and businesses trust us",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    number: "5.0",
    label: "Star Rating",
    description: "Consistently top-rated on Google & Yelp",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    span: "col-span-1 row-span-2",
    featured: true,
  },
  {
    number: "500+",
    label: "Jobs Completed",
    description: "Residential & commercial projects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    number: "100%",
    label: "Satisfaction",
    description: "We guarantee your happiness",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    span: "col-span-1 row-span-1",
  },
  {
    number: "10+",
    label: "Years Experience",
    description: "A decade of trusted cleaning excellence",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    span: "col-span-2 row-span-1 md:col-span-1",
  },
];

const BentoStats = () => {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">By The Numbers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Results That Speak</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-4 md:gap-6">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${item.span} ${
                item.featured
                  ? "bg-gradient-to-br from-flame/20 via-flame/10 to-navy-light border-flame/30"
                  : "gradient-card border-foreground/5 hover:border-flame/20"
              } rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.featured ? "bg-flame/20" : "bg-flame/10"} flex items-center justify-center text-flame mb-auto group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <div className={`text-3xl md:text-4xl font-bold ${item.featured ? "text-flame" : "text-foreground"} mb-1`}>
                  {item.number}
                </div>
                <div className="text-foreground font-semibold text-sm">{item.label}</div>
                <p className="text-foreground/50 text-xs mt-1 hidden md:block">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoStats;
