import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { Award, CalendarCheck, Star, Clock } from "lucide-react";

export function TrustStats() {
  const stats = [
    {
      icon: <Award className="w-7 h-7 text-[#7B2D6E]" />,
      value: `${company.stats.experience} Tahun`,
      label: "Pengalaman",
    },
    {
      icon: <CalendarCheck className="w-7 h-7 text-[#7B2D6E]" />,
      value: company.stats.events,
      label: "Acara per Tahun",
    },
    {
      icon: <Star className="w-7 h-7 text-[#7B2D6E]" />,
      value: `${company.stats.rating}★`,
      label: "Rating Google",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#7B2D6E]" />,
      value: company.stats.onTime,
      label: "Tepat Waktu",
    },
  ];

  return (
    <Container className="pt-0 relative z-20 -mt-10 bg-transparent">
      <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-[#7B2D6E]/10 shadow-xl shadow-[#7B2D6E]/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-[#7B2D6E]/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#F7EFF6] flex items-center justify-center text-[#7B2D6E] shadow-sm">
                {stat.icon}
              </div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#5A1F50]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-[#9B7A96] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
