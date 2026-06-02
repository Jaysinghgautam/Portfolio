export default function Footer() {
  return (
    <footer className="relative z-10 text-center py-8 border-t border-[rgba(99,179,237,0.08)] text-slate-600 text-sm">
      Built with passion by{" "}
      <span className="bg-gradient-to-r from-[#63b3ed] to-[#9f7aea] bg-clip-text text-transparent font-semibold">
        Jaysingh Gautam
      </span>{" "}
      &middot; {new Date().getFullYear()} &middot; Open to opportunities
    </footer>
  );
}
