import Image from "next/image";

const WhatOurShopSells = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:pr-8 lg:pl-8 lg:m-8">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-black">
              What our shop
              <br />
              <span className="font-bold text-6xl lg:text-7xl text-black">
                Sells?
              </span>
            </h2>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 lg:pr-10">
            {/* Consultancy */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 198.png"
                  alt="Consultancy"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">Consultancy</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                We ensure a smooth customer experience optimisation and
                experience strategy. We support the decision-making by
                understanding context, carrying out auditory, and assessing
                technology, market, and competitive landscapes. Through a
                spectrum of qualitative research and quantitative data, we are
                able to set the foundational blocks and then on design it.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                We bring together long-term to global experience, partnering
                with organizations (NGOs, Charities, etc), private (and
                Finance). The outcome is a framework that provides a way for
                staff and project owners, as well as a team working toward
                differentiation, relevance, and relevance to their market.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  A solid foundation for long-term success – built on insight,
                  proven strategies, actionable recommendations, and measurable
                  impact that reduce risk and accelerate growth.
                </p>
              </div>
            </div>

            {/* Design */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 197.png"
                  alt="Design"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">Design</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                This is where strategy takes shape and begins to breathe. Our
                design process connects creativity with commercial fact, and
                trust. Every click, scroll, and pause becomes part of a larger
                story — one that connects your brand promise with customer
                expectations, enriches your core identity, and lives
                effortlessly, minimising friction and bringing meaning to every
                transaction.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Our craft builds searching, tap, and checkout — blending
                research with empathy, your core with storytelling. From journey
                maps and wireframes to prototypes, and all about systemic
                user-experience that feel intuitive and polished and ready for
                the next customer.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  Digital experiences that don&apos;t just function well but
                  feel right — intuitive, human, and quietly powerful in
                  building trust, loyalty, and growth.
                </p>
              </div>
            </div>

            {/* Execution */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 199.png"
                  alt="Execution"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">Execution</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                We translate strategy and insight into designs that resonate —
                seamlessly, precisely, and coherent that enhances every
                touchpoint. Our execution connects the process cohesive to real
                policy integration, user experience, user integration and the
                that understands, as part of an improvement-driven approach that
                we perform, in harmony. Whether it&apos;s web, mobile, or
                platform app solutions, our teams focus on clear visual
                hierarchy, consistent interactions, cohesive design language,
                and system continuance.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Each execution is guided by meticulous QAs, comprehensive
                testing workflows and collaboration while maintaining design
                consistency and operational efficiency.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  Experiences that not only look elegant but perform with
                  precision — driving adoption, engagement, and lasting brand
                  trust.
                </p>
              </div>
            </div>

            {/* Enablement */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 200.png"
                  alt="Enablement"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">Enablement</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                We believe great design should not end with delivery — it should
                evolve, adapt, and empower. Through Gues-thos design systems,
                detailed documentation, and ongoing capability — empowering 4
                within teams, tools, and culture. This transforms design from a
                temporary side-set — becoming part of the organisational
                foundation.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Our enablement approach include design systems, governance
                models, and hands-on frameworks that can and will evolve and
                flourish and adapt among your business. We work closely with
                leadership and delivery teams to define ongoing processes that
                ensure excellence in operational excellence, and aligned with
                the brand goals.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  Organisations that can build experience faster — equipped with
                  the confidence, tools, and culture to create, manage, and
                  evolve exceptional customer experiences.
                </p>
              </div>
            </div>

            {/* Audit & Governance */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 201.png"
                  alt="Audit & Governance"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">
                Audit & Governance
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Excellence is continuous, and standards — even design principles
                require consistency. Through our Design Audit and Governance
                practice, we help organisations establish standards, maintain
                quality, and ensure everything aligns with business goals and
                customer experience — where experiences connect — and where they
                fall short, offering data-informed insights, quality training,
                and roadmaps for sustained improvement and user-centric focused
                improvement. We then transform those insights into standards,
                define objectives of improvement improvements that great teams
                should understand design integrity.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  Excellence in disciplined practice, often gracefully alongside
                  business growth and innovation.
                </p>
              </div>
            </div>

            {/* Branding */}
            <div className="space-y-4">
              <div className="w-12 h-12">
                <Image
                  src="/images/image 202.png"
                  alt="Branding"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">Branding</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                A strong brand is far more than a logo — it is a living identity
                that inspires trust, recognition, and belonging. We craft brand
                systems that express not just what an organisation does, but who
                they are and why they exist. Every visual and verbal element —
                from logo and typography to colour, imagery, and tone — works
                together to build coherent, compelling experience across every
                touchpoint.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Our approach extends beyond design thinking to long- term brand
                governance. We help organisations build the confidence to
                evolve, launch new services, enter new markets — platforms,
                audits, and systems that protect the brand&apos;s integrity,
                even as they embrace new partnerships. This ensures that every
                interaction, from initial document to a billboard carries the
                same voice and simplicity.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-black">Pay-offs:</p>
                <p className="text-xs text-gray-700">
                  A cohesive, credible, and enduring brand presence that builds
                  equity, fosters loyalty, and positions your business for
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurShopSells;
