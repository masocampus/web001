import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 sm:py-8 bg-muted/40">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 md:px-8">
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} 포트폴리오. 모든 권리 보유.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:email@example.com"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            이메일
          </Link>
        </div>
      </div>
    </footer>
  );
} 