// Location: src/components/Header.tsx
import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:bg-white/10 rounded-lg">
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white/95 backdrop-blur">
            <nav className="flex flex-col gap-6 mt-8">
              <a href="/features" className="text-lg font-medium hover:text-purple-600">
                Features
              </a>
              <a href="/use-cases" className="text-lg font-medium hover:text-purple-600">
                Use Cases
              </a>
              <a href="/pricing" className="text-lg font-medium hover:text-purple-600">
                Pricing
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <a href="/" className="hover:opacity-90 transition-opacity" aria-label="Zebracat Home">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:bg-white/10">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-purple-50 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                          AI-Powered Video Creation
                        </div>
                        <p className="text-sm leading-tight text-purple-800">
                          Transform text into engaging videos in seconds with our advanced AI technology.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/features/text-to-video" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">Text to Video</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Convert any text into professional videos automatically.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/features/ai-voices" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">AI Voices</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Natural-sounding voiceovers in 170+ languages.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/features/ai-editing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">AI Video Editing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Automated editing with professional results.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:bg-white/10">
                Use Cases
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/use-cases/marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">Marketing Videos</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Create engaging marketing content at scale.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/use-cases/social" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">Social Media</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Generate viral content for social platforms.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/use-cases/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">Blog to Video</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Transform blog posts into engaging videos.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/use-cases/education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                        <div className="text-sm font-medium leading-none text-blue-900">Educational Content</div>
                        <p className="line-clamp-2 text-sm leading-snug text-purple-700">
                          Create engaging educational videos easily.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/pricing" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 animate-spin" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 animate-pulse" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
