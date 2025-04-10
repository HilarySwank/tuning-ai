
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function BewerbungAI() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    beruf: "",
    erfahrung: "",
    stil: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Zahlungssimulation via PayPal-Link
    window.open("https://www.paypal.me/onurchiller/39", "_blank");

    // Simuliere automatische Verarbeitung und E-Mail-Versand
    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Zahlung erfolgreich!</h2>
        <p className="mb-2">Danke, {form.name}! Deine Bewerbung wird in Kürze erstellt und per E-Mail an <b>{form.email}</b> gesendet.</p>
        <p>Du erhältst sie innerhalb von 24 Stunden. 🚀</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 Deine Bewerbung mit KI erstellen</h1>
      <Card>
        <CardContent className="space-y-4 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              required
              name="name"
              placeholder="Dein Name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Deine E-Mail-Adresse"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              required
              name="beruf"
              placeholder="Wunschberuf (z. B. Verkäufer/in)"
              value={form.beruf}
              onChange={handleChange}
            />
            <Textarea
              required
              name="erfahrung"
              placeholder="Erfahrung & Ausbildung (z. B. 3 Jahre im Einzelhandel...)"
              value={form.erfahrung}
              onChange={handleChange}
            />
            <Input
              name="stil"
              placeholder="Stil (z. B. modern, klassisch, schlicht)"
              value={form.stil}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">Jetzt Bewerbung erstellen – 39 €</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
