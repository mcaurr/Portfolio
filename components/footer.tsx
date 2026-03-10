export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 font-medium">
            Manpreet Kaur
          </span>
        </p>
      </div>
    </footer>
  );
}
