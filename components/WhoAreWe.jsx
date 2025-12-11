const WhoAreWe = () => {
  return (
    <section id="who-are-we" className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:pr-8 lg:pl-8 lg:m-8">
            <h5 className="text-5xl lg:text-6xl font-extralight leading-tight text-black">
              Who Are
              <br />
              <span className="font-bold text-6xl lg:text-7xl text-black">
                We?
              </span>
            </h5>
          </div>

          {/* Right Column - Content in Two Sub-columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pr-10">
            {/* First Sub-column */}
            <div className="space-y-6">
              {/* First Paragraph */}
              <p className="text-xs lg:text-sm leading-relaxed text-gray-700 font-light">
                Minimum Design Studio, established in 2020 in Calcutta, India,
                was founded with the vision of addressing the
                micro-psychological nuances of customer experience often
                overlooked in traditional solutions. As our name and trademark
                suggest, we embrace minimalism—removing everything non-essential
                until only the most relevant, functional, and impactful solution
                remains.
              </p>

              {/* Second Paragraph */}
              <p className="text-xs lg:text-sm leading-relaxed text-gray-700 font-light">
                Since 2012, we have been shaping curated customer experiences
                with more than twenty years of collective expertise in CX
                consultancy, business strategy, branding, experience audits, and
                digital journeys across APAC, EMEA, and the Americas. We bring
                global depth with local sensitivity to every engagement.
              </p>
            </div>

            {/* Second Sub-column */}
            <div className="space-y-6">
              {/* Third Paragraph */}
              <p className="text-xs lg:text-sm leading-relaxed text-gray-700 font-light">
                We hold a strong specialisation in Africa, designing solutions
                tailored to the unique challenges of LEDCs for nearly a decade
                now. By focusing on scalable and relevant CX as a driver of
                growth, we help our clients maintain a poised and sensible
                stance with their customers.
              </p>

              {/* Fourth Paragraph */}
              <p className="text-xs lg:text-sm leading-relaxed text-gray-700 font-light">
                Through customer-driven engagements, we empower economies of the
                Global South to compete on the world stage, with relevance and
                resilience at the core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
