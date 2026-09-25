import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { IconLinkedIn } from "../Icons";
import { team } from "@/data/team";

function avatarUrl(seed: string) {
  const name = encodeURIComponent(seed);
  return `https://ui-avatars.com/api/?name=${name}&background=1a1a1d&color=e2483f&size=400&bold=true&font-size=0.36`;
}

export default function TeamSection() {
  return (
    <section className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the practice"
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-crimson hover:text-crimson"
              >
                <IconLinkedIn className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
