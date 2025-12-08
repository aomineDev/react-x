export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 flex justify-center -translate-y-[calc(-15%-10px)] -z-10 pointer-events-none"
      >
        <div
          style={{
            width: '900px',
            height: '900px',
            background:
              'radial-gradient(circle at center, rgba(0,150,255,0.6) 0%, rgba(30,143,255,0.5) 40%, rgba(15,23,42,0.2) 70%)',
            filter: 'blur(140px)',
          }}
        />
      </div>

      {children}
    </section>
  )
}
