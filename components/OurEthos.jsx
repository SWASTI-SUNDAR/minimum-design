const OurEthos = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:pr-8 lg:pl-8 lg:m-8">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-black">
              Our
              <br />
              <span className="font-bold text-6xl lg:text-7xl text-black">
                Ethos
              </span>
            </h2>
          </div>

          {/* Right Column - Content in Two Sub-columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pr-10">
            {/* First Sub-column */}
            <div className="space-y-6">
              {/* Intro Paragraph */}
              <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                At Minimum Design Studio, our philosophy is built around
                relevance, value, and relationships. We believe that great
                design is not just about aesthetics — it&apos;s about
                understanding context, creating meaning, and fostering
                connections.
              </p>

              {/* 1. Relevant Innovation */}
              <div className="space-y-2">
                <h3 className="text-xs lg:text-sm font-semibold text-black">
                  1. Relevant Innovation
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                  We design with purpose. Every idea, every decision, and every
                  pixel is grounded in what truly matters to your users and your
                  business. Relevance is the bridge between creativity and
                  strategy — it ensures that our solutions feel timely,
                  authentic, and aligned with real needs.
                </p>
              </div>
            </div>

            {/* Second Sub-column */}
            <div className="space-y-6">
              {/* 2. Meaningful Value-adds */}
              <div className="space-y-2">
                <h3 className="text-xs lg:text-sm font-semibold text-black">
                  2. Meaningful Value-adds
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                  Our goal is not to add more; it&apos;s to add meaning. We
                  focus on creating experiences that deliver real value.
                  Everything we design will contribute to profitability, brand
                  recognition, customer loyalty, operational efficiency, and
                  delight — where design directly supports business outcomes.
                </p>
              </div>

              {/* 3. Sustainable Relationships */}
              <div className="space-y-2">
                <h3 className="text-xs lg:text-sm font-semibold text-black">
                  3. Sustainable Relationships
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                  We see our clients as partners. Sustainable relationships are
                  built on trust, transparency, and shared success. By investing
                  deeply in understanding your journey, we create design
                  ecosystems that evolve with you, ensuring continuity,
                  scalability, and lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEthos;
