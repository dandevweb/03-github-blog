export function SearchForm() {
  return (
    <form >
      <input
        className="w-full h-12 px-4 mb-4 text-sm border rounded-lg text-theme-text placeholder:text-theme-label border-theme-border bg-theme-input focus:outline-none focus:border-theme-blue"
        type="text"
        placeholder="Buscar conteúdo"
      />
    </form>
  )
}