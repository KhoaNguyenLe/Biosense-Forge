// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-white mt-10">
      <div className="container mx-auto py-6 text-center text-sm text-black-500">
        © {new Date().getFullYear()} Biosense Forge — Biomedical Insights Platform
      </div>
    </footer>
  );
}
