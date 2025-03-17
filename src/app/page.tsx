"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export default function Home() {

const {theme, setTheme} = useTheme();
console.log(theme)
  return (
      <Button
        onClick={() => {
          console.log("Clicked");
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className=" bg-[#B8860B] dark:bg-orange-800"
      >
        Light theme
      </Button>
  );
}
