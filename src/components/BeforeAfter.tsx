import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const beforeAfterPairs = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    label: "Bathroom Deep Clean",
  },
  {
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    label: "Kitchen Transformation",
  },
  {
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
    label: "Living Room Refresh",
  },
];

const BeforeAfter = () => {
  const [activePair, setActivePair] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    // Cycle: show "before" for 2.5s, then "after" for 2.5s, then next pair
    const interval = setInterval(() => {
      setShowAfter((prev) => {
        if (prev) {
          // Was showing after, move to next pair's before
          setActivePair((p) => (p + 1) % beforeAfterPairs.length);
          return false;
        }
        return true;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const pair = beforeAfterPairs[activePair];

  return (
    <section className="bg-navy-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">See The Difference</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Before & After</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Real results from real clients. Watch the transformation happen before your eyes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image display */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activePair}-${showAfter ? "after" : "before"}`}
                src={showAfter ? pair.after : pair.before}
                alt={showAfter ? "After cleaning" : "Before cleaning"}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Label badge */}
            <div className="absolute top-4 left-4 z-10">
              <motion.div
                key={showAfter ? "after-badge" : "before-badge"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-md ${
                  showAfter
                    ? "bg-green-500/90 text-primary-foreground"
                    : "bg-foreground/20 text-foreground"
                }`}
              >
                {showAfter ? "AFTER ✓" : "BEFORE"}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10">
              <motion.div
                className={showAfter ? "h-full bg-green-500" : "h-full bg-flame"}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
                key={`${activePair}-${showAfter}`}
              />
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePair}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{pair.label}</h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Watch as our professional team transforms this space from cluttered and dirty to sparkling clean. Every surface is sanitized, every detail attended to.
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pair selector */}
            <div className="flex gap-3">
              {beforeAfterPairs.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActivePair(i);
                    setShowAfter(false);
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                    i === activePair
                      ? "bg-flame/15 border-flame/40 text-flame"
                      : "bg-foreground/5 border-foreground/10 text-foreground/50 hover:text-foreground/80 hover:border-foreground/20"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Auto-cycle indicator */}
            <div className="flex items-center gap-2 text-foreground/40 text-xs">
              <div className="w-2 h-2 rounded-full bg-flame animate-pulse" />
              Auto-cycling through transformations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
