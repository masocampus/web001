import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Code, 
  FileText, 
  Github, 
  Globe, 
  Linkedin, 
  Mail, 
  PenTool, 
  Server
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* 헤더 영역 (Hero Section) */}
      <section id="home" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient z-0"></div>
        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-3xl mx-auto">
            <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-background">
              <AvatarFallback className="text-lg sm:text-xl">MC</AvatarFallback>
            </Avatar>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-bold tracking-tight text-shadow-sm">
                안녕하세요, 웹 개발자 <br />
                <span className="text-blue-500">Masocampus</span>입니다
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                10년 경력의 프론트엔드 개발자로, 사용자 경험을 중심으로 한 웹 애플리케이션을 설계하고 개발합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center w-full">
              <Button asChild size="lg" className="touch-target w-full sm:w-auto">
                <a href="#contact">연락하기</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="touch-target w-full sm:w-auto">
                <a href="#projects">프로젝트 보기</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h2 className="font-bold tracking-tight text-center md:text-left">
                저에 대해 소개합니다
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                10년 이상의 웹 개발 경험을 바탕으로 UI/UX를 고려한 사용자 친화적인 웹사이트 개발에 열정을 가지고 있습니다. 
                사용자 중심의 디자인과 깨끗한 코드로 신뢰할 수 있는 웹 애플리케이션을 만드는 것이 저의 목표입니다.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                최신 웹 기술 트렌드를 지속적으로 학습하며, 문제 해결 능력과 협업 능력을 갖추고 있습니다. 
                React, Next.js, TypeScript를 주로 사용하며, 백엔드와의 통합 작업에도 능숙합니다.
              </p>
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <Button variant="outline" size="sm" className="gap-2 touch-target" asChild>
                  <a href="#contact">
                    <FileText className="h-4 w-4" />
                    이력서 보기
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg h-64 md:h-auto bg-muted shadow-md">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 스킬 섹션 */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold tracking-tight mb-3 sm:mb-4">기술 스택</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              주로 사용하는 기술 스택과 전문 분야입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-card/50 backdrop-blur shadow-sm">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">프론트엔드 개발</h3>
                </div>
                <Separator />
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">HTML5/CSS3</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>고급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>고급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">React/Next.js</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>고급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Tailwind CSS</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur shadow-sm">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">백엔드 개발</h3>
                </div>
                <Separator />
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Node.js</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Express.js</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">RESTful API</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">SQL/NoSQL 데이터베이스</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>초급</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur shadow-sm sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">디자인 & 기타</h3>
                </div>
                <Separator />
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">UI/UX 디자인</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">반응형 디자인</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>고급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Figma</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Git/GitHub</span>
                    <span className="flex-1 border-b border-dashed border-muted"></span>
                    <span>중급</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold tracking-tight mb-3 sm:mb-4">프로젝트</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              지금까지 진행한 주요 프로젝트를 소개합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="project-card overflow-hidden shadow-sm">
                <div className="relative aspect-video bg-muted"></div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-2">프로젝트 제목 {project}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                    프로젝트 간단 설명이 들어갑니다. 이 프로젝트는 어떤 기술과 목적으로 
                    만들어졌는지 설명합니다.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs bg-secondary px-2 py-1 rounded-full">React</span>
                    <span className="text-[10px] sm:text-xs bg-secondary px-2 py-1 rounded-full">TypeScript</span>
                    <span className="text-[10px] sm:text-xs bg-secondary px-2 py-1 rounded-full">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm touch-target" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        코드 보기
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm touch-target" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        데모 보기
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold tracking-tight mb-3 sm:mb-4">연락처</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              프로젝트 협업이나 궁금한 점이 있으시면 언제든지 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="gap-2 touch-target" asChild>
                <a href="mailto:email@example.com">
                  <Mail className="h-4 w-4" />
                  이메일 보내기
                </a>
              </Button>
              <Button variant="outline" className="gap-2 touch-target" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="gap-2 touch-target" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
