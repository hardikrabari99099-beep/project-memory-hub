import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BarChart3, Check, ShieldCheck, Wallet, Zap, Trophy, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FundedEdge — Get Funded Up To ₹50 Lakh to Trade" },
      { name: "description", content: "Pass our trading challenge, trade our capital and keep up to 90% of the profits. India's trader funding program." },
      { property: "og:title", content: "FundedEdge — Trade Our Capital" },
      { property: "og:description", content: "Pass the challenge, get funded, keep up to 90% of profits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const plans = [
  { size: "₹2 Lakh", fee: "₹2,499", target: "8%", dd: "8%" },
  { size: "₹5 Lakh", fee: "₹4,999", target: "8%", dd: "8%", popular: true },
  { size: "₹10 Lakh", fee: "₹8,999", target: "8%", dd: "10%" },
  { size: "₹25 Lakh", fee: "₹17,999", target: "10%", dd: "10%" },
];

const steps = [
  { icon: Zap, title: "Take the Challenge", text: "Pick an account size and hit the profit target while respecting the risk rules." },
  { icon: ShieldCheck, title: "Get Verified", text: "Show consistency in the verification phase. No time limits, trade at your pace." },
  { icon: Wallet, title: "Get Funded & Paid", text: "Trade our capital and withdraw up to 90% of profits every 14 days." },
];

const faqs = [
  ["What is a funded trading account?", "You trade with our capital after passing an evaluation. You keep most of the profits, we take the risk."],
  ["Which markets can I trade?", "Indian indices, stocks, F&O, forex and commodities on our supported platforms."],
  ["How fast are payouts?", "Payout requests are processed within 24–48 hours, bi-weekly."],
  ["Is the challenge fee refundable?", "Yes, the fee is refunded with your first profit split once funded."],
];

function Index() {
  const [active, setActive] = useState(1);
  return (
    <div className="theme-funded min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-extrabold">
            <BarChart3 className="h-6 w-6 text-primary" /> FundedEdge
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#plans" className="hover:text-foreground">Plans</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <Button asChild size="sm"><a href="#plans">Get Funded</a></Button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
        <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
          India's trader-first funding program
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Trade our capital. <span className="text-primary">Keep up to 90%</span> of the profits.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Prove your skill in our challenge and get funded with accounts up to ₹50 Lakh. No personal capital at risk.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild><a href="#plans">Start Challenge</a></Button>
          <Button size="lg" variant="outline" asChild><a href="#how">How it works</a></Button>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[[Users, "12,000+", "Traders"], [Trophy, "₹8 Cr+", "Paid out"], [Clock, "24h", "Payouts"], [ShieldCheck, "90%", "Profit split"]].map(([Icon, v, l]) => {
            const I = Icon as typeof Users;
            return (
              <div key={l as string} className="rounded-xl border border-border bg-card p-4">
                <I className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 text-2xl font-extrabold">{v as string}</div>
                <div className="text-xs text-muted-foreground">{l as string}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-extrabold">Choose your account</h2>
        <p className="mt-2 text-center text-muted-foreground">One-time fee, refundable on your first payout.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <button
              key={p.size}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl border p-6 text-left transition ${active === i ? "border-primary bg-card shadow-lg" : "border-border bg-card/60 hover:border-primary/50"}`}
            >
              {p.popular && <span className="absolute -top-3 right-4 rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">Popular</span>}
              <div className="text-sm text-muted-foreground">Account size</div>
              <div className="text-3xl font-extrabold">{p.size}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {[`Profit target ${p.target}`, `Max drawdown ${p.dd}`, "Up to 90% split", "No time limit"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary">{p.fee}</div>
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button size="lg">Buy {plans[active].size} Challenge</Button>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 pb-20">
        <h2 className="text-center text-3xl font-extrabold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 FundedEdge. Simulated trading evaluation. Trading involves risk.
      </footer>
    </div>
  );
}
