"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Tab = "tutoring" | "counseling";

type SubjectGroup = {
  name: string;
  subjects: string[];
};

const subjectGroups: SubjectGroup[] = [
  {
    name: "Writing & English",
    subjects: ["Writing", "Literature", "Grammar", "AP Literature", "AP Language", "Philosophy"],
  },
  {
    name: "Mathematics",
    subjects: ["Algebra 1", "Algebra 2", "Geometry", "Precalculus", "Computer Science"],
  },
  {
    name: "History & Social Science",
    subjects: ["Political Science", "Economics", "U.S. History", "European History", "World History", "Government"],
  },
  {
    name: "Sciences",
    subjects: ["Physics", "Chemistry"],
  },
  {
    name: "Test Preparation",
    subjects: ["SAT", "ACT", "SSAT", "ISEE", "SHSAT"],
  },
  {
    name: "College & Prep School Essays",
    subjects: ["Personal Statement", "Supplemental Essays", "Secondary School Applications"],
  },
  {
    name: "Executive Function & Study Skills",
    subjects: [],
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState<Tab>("tutoring");

  useEffect(() => {
    if (window.location.hash === "#counseling") setTab("counseling");
  }, []);

  function selectTab(next: Tab) {
    setTab(next);
    const hash = next === "counseling" ? "#counseling" : "";
    history.replaceState(null, "", window.location.pathname + hash);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/gwildridgeb@gmail.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  const tabClass = (t: Tab) =>
    `pb-2 text-base md:text-lg transition-colors border-b-2 ${
      tab === t
        ? "border-sage text-ink font-medium"
        : "border-transparent text-muted hover:text-ink"
    }`;

  return (
    <main className="min-h-screen">
      {/* ---- Hero ---- */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <div className="w-48 h-60 md:w-56 md:h-72 relative rounded-sm overflow-hidden shrink-0 mb-8 md:mb-0">
            <Image
              src="/images/headshot.jpg"
              alt="George Wildridge"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>

          {/* Intro */}
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-ink leading-tight mb-4">
              George Wildridge
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-6">
              Private tutor and college admissions advisor in New York, with
              four years of experience working with students from middle
              school through college.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted">
              <span>University of Chicago, BA</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>New York</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Divider ---- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ---- Tabs ---- */}
      <section className="max-w-3xl mx-auto px-6 pt-10 md:pt-14">
        <div role="tablist" aria-label="Services" className="flex gap-8">
          <button
            role="tab"
            aria-selected={tab === "tutoring"}
            onClick={() => selectTab("tutoring")}
            className={tabClass("tutoring")}
          >
            Tutoring
          </button>
          <button
            role="tab"
            aria-selected={tab === "counseling"}
            onClick={() => selectTab("counseling")}
            className={tabClass("counseling")}
          >
            College &amp; Secondary School Counseling
          </button>
        </div>
      </section>

      {/* ---- Tutoring panel ---- */}
      {tab === "tutoring" && (
        <section
          role="tabpanel"
          className="max-w-3xl mx-auto px-6 py-10 md:py-14"
        >
          <div className="space-y-4 text-ink/80 leading-relaxed">
            <p>
              I attended Choate Rosemary Hall, entered the University of
              Chicago as an applied mathematics major, and graduated with a
              degree in Creative Writing. Along the way I took extensive upper-level
              coursework in English, political science, philosophy, history,
              economics, and computer science. I am comfortable
              working across the full range of a student&apos;s subjects.
            </p>
            <p>
              In my experience, students rarely struggle because they cannot
              understand what is in front of them. More often there are small
              foundational gaps underneath that have gone unnoticed and built
              up over time. The student cannot tell why things are not
              clicking, and their confidence suffers.
            </p>
            <p>
              My job is to find those gaps and fix them. I am interested in
              why a student gets stuck, not only in what they got wrong. Once
              we find it, students start to trust their own ability again,
              and they need me less and less.
            </p>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mt-12 mb-6">
            Subjects
          </h2>
          <div className="divide-y divide-border">
            {subjectGroups.map((group) => (
              <div key={group.name} className="py-3 text-sm">
                <span className="text-ink/90 font-medium">{group.name}</span>
                {group.subjects.length > 0 && (
                  <>
                    <span className="text-border mx-2">|</span>
                    <span className="text-muted">
                      {group.subjects.join(" \u00b7 ")}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---- Counseling panel ---- */}
      {tab === "counseling" && (
        <section
          role="tabpanel"
          id="counseling"
          className="max-w-3xl mx-auto px-6 py-10 md:py-14"
        >
          <div className="space-y-4 text-ink/80 leading-relaxed">
            <p>
              I believe college placement is a holistic and familial effort
              rather than a targeted or individual one. I prefer to keep a
              light touch with students when possible, and I do not like to
              expose them to the ickiness of strategy until it is necessary.
              Before I accept a family, I begin by meeting the parents on
              their own, and I expect to maintain a relationship with them as
              much as with the student. That relationship often serves a
              family for years, as younger children come of age to apply.
            </p>
            <p>
              The student&apos;s wellbeing comes first. My job is to get to
              know a student, understand their personal needs and wants, and
              ensure families are aware of opportunities suited to them. No
              student is the same, and I do not recommend generic achievements
              or marquee internships for the sake of a résumé at the expense
              of the student. That can mean finding a visible outlet for an
              invisible passion, helping a student through an internship
              application they would otherwise be intimidated by, or
              encouraging them to put themselves out there in spite of their
              own fear. The best applications show long-term growth and real
              commitment. It is a lot to ask of a fourteen-year-old to know
              what they are passionate about, but we can encourage them to
              try, and we can reduce the barriers to their trying. Students
              change, and that is a good story too. It is the trying, and
              sometimes the failing, that matters.
            </p>
            <p>
              I begin as early as freshman year, advising on course selection
              and extracurricular commitments, and I carry students through
              the full application: the school list, early decision and early
              action strategy, the essays, interviews, and the activities
              list. I also advise families on secondary school admissions,
              from as early as sixth grade.
            </p>
            <p>
              Strategy is a key component. But the essay is the heart of the
              application, and it is the part most often handed off to be
              someone else&apos;s work. That is the biggest missed opportunity
              in the process. There is an art to writing a college essay and
              an art to extracting it from a student, and it often comes from
              places you would not expect.
            </p>
          </div>
        </section>
      )}

      {/* ---- Divider ---- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ---- Contact ---- */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-6">
          Get in touch
        </h2>
        {submitted ? (
          <p className="text-sage text-sm">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        ) : (
          <>
          <p className="text-ink/80 leading-relaxed mb-8">
            Reach out to set up a first conversation.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New inquiry from wildridgetutoring.com" />
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-border bg-warm-white rounded-sm px-3 py-2 text-ink text-sm outline-none focus:border-sage transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-border bg-warm-white rounded-sm px-3 py-2 text-ink text-sm outline-none focus:border-sage transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full border border-border bg-warm-white rounded-sm px-3 py-2 text-ink text-sm outline-none focus:border-sage transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-sage text-cream px-6 py-2.5 rounded-sm text-sm hover:bg-sage/85 transition-colors"
            >
              Send
            </button>
          </form>
          </>
        )}

        <div className="mt-8 space-y-2 text-sm text-muted">
          <p>
            Or reach me directly at{" "}
            <a
              href="mailto:gwildridgeb@gmail.com"
              className="text-sage hover:text-sage/70 transition-colors"
            >
              gwildridgeb@gmail.com
            </a>
            {" / "}
            <a
              href="tel:+14157582094"
              className="text-sage hover:text-sage/70 transition-colors"
            >
              (415) 758-2094
            </a>
          </p>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="max-w-3xl mx-auto px-6 pb-12">
        <div className="h-px bg-border mb-6" />
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} George Wildridge
        </p>
      </footer>
    </main>
  );
}
