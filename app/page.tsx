export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Calculate Business Impact of<br />
          <span className="text-[#58a6ff]">Cloud Service Outages</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Instantly estimate revenue loss and SLA breach costs when your cloud provider goes down. Built for DevOps teams, CTOs, and business continuity managers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Calculating — $39/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ["Revenue Loss", "Per-minute estimates"],
            ["SLA Costs", "Breach calculations"],
            ["Scenarios", "Save & compare"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
              <div className="text-[#58a6ff] font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited outage scenarios",
              "Revenue loss calculator",
              "SLA breach cost estimator",
              "Multi-service dependency mapping",
              "Export reports as PDF/CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does the revenue loss calculation work?",
              "You input your average monthly revenue, service dependencies, and outage duration. The calculator applies industry-standard formulas to estimate per-minute revenue impact and total loss."
            ],
            [
              "Can I model multiple cloud services at once?",
              "Yes. You can map dependencies across AWS, GCP, Azure, and other providers, then simulate cascading failures to see the combined business impact."
            ],
            [
              "Is my business data stored securely?",
              "All scenario data is encrypted at rest and in transit. You can delete your data at any time from your account dashboard."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Service Outage Impact Calculator. All rights reserved.
      </footer>
    </main>
  );
}
