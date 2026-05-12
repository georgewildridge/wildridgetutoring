import Image from "next/image";

const subjects = [
  "Writing",
  "English",
  "Math",
  "Physics",
  "Chemistry",
  "Test Prep (SAT/ACT/SSAT)",
  "Prep School Admissions",
];

export default function Home() {
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
              Private tutor in Brooklyn with four years of experience working
              with students from middle school through college.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted">
              <span>University of Chicago, BA</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>Brooklyn, NY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Divider ---- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ---- About ---- */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-6">
          About
        </h2>
        <div className="space-y-4 text-ink/80 leading-relaxed">
          <p>
            I&apos;ve been tutoring privately for four years. I attended
            Choate Rosemary Hall, entered the University of Chicago as an
            applied math major, and graduated with a degree in Creative
            Writing. I work across English, math, sciences, and test prep.
          </p>
          <p>
            In my experience, students rarely struggle because they can&apos;t
            understand what&apos;s in front of them. More often, there are small
            foundational gaps underneath that have gone unnoticed and built up
            over time. The student can&apos;t tell why things aren&apos;t
            clicking, and their confidence suffers.
          </p>
          <p>
            My job is to find those gaps and fix them. Once we do, students
            start to trust their own ability again, and they need me less and
            less.
          </p>
        </div>
      </section>

      {/* ---- Divider ---- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ---- Subjects ---- */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-6">
          Subjects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="bg-warm-white border border-border rounded-sm px-4 py-3 text-sm text-ink/80"
            >
              {subject}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Middle school, high school, and college. In-person in Brooklyn or
          online.
        </p>
      </section>

      {/* ---- Divider ---- */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ---- Contact ---- */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-6">
          Get in touch
        </h2>
        <p className="text-ink/80 leading-relaxed mb-8">
          Reach out to set up a first session or ask any questions.
        </p>
        <form
          action="https://formsubmit.co/gwildridgeb@gmail.com"
          method="POST"
          className="space-y-4 max-w-md"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New tutoring inquiry from wildridgetutoring.com" />
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
