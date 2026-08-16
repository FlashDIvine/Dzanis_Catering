import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { Award, CalendarCheck, Star, Clock } from "lucide-react";

export function TrustStats() {
  const stats = [
    {
      icon: <Award className="w-7 h-7 text-primary" />,
      value: `${company.stats.experience} Tahun`,
      label: "Pengalaman",
    },
    {
      icon: <CalendarCheck className="w-7 h-7 text-primary" />,
      value: company.stats.events,
      label: "Acara per Tahun",
    },
    {
      icon: <Star className="w-7 h-7 text-primary" />,
      value: `${company.stats.rating}★`,
      label: "Rating Google",
    },
    {
      icon: <Clock className="w-7 h-7 text-primary" />,
      value: company.stats.onTime,
      label: "Tepat Waktu",
    },
  ];

  return (
    <Container className="pt-0 relative z-20 -mt-10 bg-transparent">
      <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-primary/10 shadow-xl shadow-primary/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-primary/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-primary-pale flex items-center justify-center text-primary shadow-sm">
                {stat.icon}
              </div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-primary-dark">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-text-light uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
