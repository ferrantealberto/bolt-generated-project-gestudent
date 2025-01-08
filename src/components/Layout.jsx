export default function Layout({ children }) {
  return (
    <div className="app-container">
      <header>
        <h1>Educational Testing Platform</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
