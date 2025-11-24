export default function Layout({ children }) {
    return (
      <div>
        {/* Page-specific content */}
        <main className="h-full w-full">
          {children}  {/* This renders the Pricing page content */}
        </main>
      </div>
    );
  }
