import { InitiativeCard } from "@/components/ui/card";
import type { Initiative } from "@/lib/data";

type Props = {
  initiative: Initiative;
  index: number;
};

export default function InitiativePreview({ initiative }: Props) {
  return (
    <InitiativeCard
      title={initiative.title}
      subtitle={initiative.subtitle}
      description={initiative.description}
      image={initiative.image}
      stat={initiative.stat}
      statLabel={initiative.statLabel}
      href={`/initiatives#${initiative.id}`}
    />
  );
}
