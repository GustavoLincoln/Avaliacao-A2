export default function LayoutHome({ children }: { children: React.ReactNode }) {
    return (
      <section>
        {/* Inclua as interfaces compartilhada aqui, como um cabeçalho ou barra lateral */}
        <nav></nav>
        {children}
      </section>
    )
  }