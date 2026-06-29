import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "blue" | "gradient";
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "gradient",
}: CTASectionProps) {
  return (
    <section
      className={`relative py-20 overflow-hidden ${
        variant === "gradient"
          ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
          : "bg-blue-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <Link href={primaryCTA.href}>
              <Button
                size="lg"
                className="bg-sky-400 hover:bg-sky-500 text-blue-950 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {primaryCTA.text}
              </Button>
            </Link>
          )}
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
              >
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
