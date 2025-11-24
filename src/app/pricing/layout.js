// /src/app/pricing/layout.js

export default function Layout({ children }) {
  return (
    <div>
      {/* Example: Header */}
      {/* <header className=" p-4 text-white">
        <h1>Pricing Page Layout</h1>
      </header> */}

      {/* Page-specific content */}
      <main className="h-full w-full">
        {children}  {/* This renders the Pricing page content */}
      </main>

      {/* Example: Footer */}
      {/* <footer className=" p-4 text-white mt-8">
        <p>© 2024 Your Company</p>
      </footer> */}
    </div>
  );
}