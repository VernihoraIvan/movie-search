import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { ModeToggleProps } from "@/utilities/interfaces";

export const ModeToggle = ({ menuOpen }: ModeToggleProps) => {
  const { setTheme, theme } = useTheme();
  const isLight = theme === "light";
  return (
    <div className={clsx("xxs:h-5", menuOpen && "hidden")}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={clsx(
            "cursor-pointer",
            isLight && "bg-bckgrLight",
            !isLight && "bg-bckgrDark aaaaaa"
          )}
          align="end"
        >
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
