"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

// 직접 내부 구현으로 ThemeToggle 컴포넌트 문제 해결
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="touch-target"
    >
      <Sun className="h-[18px] w-[18px] sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        {theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      </span>
    </Button>
  );
}

const navItems = [
  { href: "#home", label: "홈" },
  { href: "#about", label: "소개" },
  { href: "#skills", label: "스킬" },
  { href: "#projects", label: "프로젝트" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b shadow-sm">
      <div className="container flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Link 
            href="/"
            className="text-lg sm:text-xl font-bold text-shadow-sm"
          >
            포트폴리오
          </Link>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary py-1"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* 모바일 네비게이션 */}
        <div className="flex md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-1.5 touch-target">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[70vw] sm:w-[350px]">
              <SheetTitle>메뉴</SheetTitle>
              <div className="mt-8 mb-4 px-2">
                <Link 
                  href="/"
                  className="text-xl font-bold"
                >
                  포트폴리오
                </Link>
              </div>
              <nav className="flex flex-col gap-1.5 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 