"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Tilt card wrapper ────────────────────────────────────────────────────────

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function TiltCard({ children, className = "", href }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const THRESHOLD = 8;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -THRESHOLD, y: x * THRESHOLD });
  }

  const inner = (
    <div
      className={`rounded-xl overflow-hidden bg-white border border-void/[0.07] hover:border-void/[0.14] transition-colors duration-200 cursor-pointer ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, border-color 0.2s",
      }}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}

// ─── Initiative card ─────────────────────────────────────────────────────────

interface InitiativeCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stat?: string;
  statLabel?: string;
  href?: string;
}

export function InitiativeCard({
  title,
  subtitle,
  description,
  image,
  stat,
  statLabel,
  href,
}: InitiativeCardProps) {
  return (
    <TiltCard href={href}>
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-xs text-saffron font-semibold font-sans uppercase tracking-wide">
          {subtitle}
        </p>
        <h3 className="font-display text-lg font-semibold text-void leading-tight">
          {title}
        </h3>
        <p className="text-void/50 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        {stat && (
          <div className="flex items-baseline gap-2 mt-3 pt-3 border-t border-void/[0.07]">
            <span className="font-display text-xl font-semibold text-saffron leading-none">
              {stat}
            </span>
            {statLabel && (
              <span className="text-xs text-void/40 font-sans uppercase tracking-wider">
                {statLabel}
              </span>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}

// ─── Blog / story card ────────────────────────────────────────────────────────

interface BlogCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

export function BlogCard({ title, category, date, image, href }: BlogCardProps) {
  return (
    <TiltCard href={href}>
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 33vw"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-saffron uppercase tracking-wide font-sans">
          {category}
        </span>
        <h3 className="font-display text-base font-semibold text-void mt-1.5 line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-void/40 text-xs mt-3">{date}</p>
      </div>
    </TiltCard>
  );
}

// ─── Fact / stat card ─────────────────────────────────────────────────────────

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-saffron leading-none">
        {value}
      </p>
      <p className="text-xs font-semibold text-void uppercase tracking-wide mt-2.5">
        {label}
      </p>
      {description && (
        <p className="text-void/40 text-xs mt-1 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
