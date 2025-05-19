"use client";
import { useState, useEffect } from "react";
import { User2Icon, Settings2, Menu, FileText, X } from "lucide-react";
import Link from "next/link";
import { Session } from "@/middleware";
import Cookies from "js-cookie";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logged, setLogged] = useState<Session>({ session: "dd", uid: 0 });

  useEffect(() => {
    const getCookies = async () => {
      const cookie = Cookies.get("creds");
      if (cookie != undefined) {
        setLogged(JSON.parse(cookie ?? ""));
      }
    };
    getCookies();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex fixed z-30 w-full backdrop-blur h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-md">
          <FileText className="h-6 w-6 text-sky-400" />
        </div>
        <Link href={"/"} className="font-bold text-xl">
          myResume
        </Link>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X className="mr-5 h-6 w-6" />
        ) : (
          <Menu className="mr-5 h-6 w-6" />
        )}
        <div className="sr-only">Toggle menu</div>
      </button>
      <nav className="hidden md:flex gap-6">
        <Link href="/myResume" className="text-md hover:border-b-2 mr-5">
          <Settings2 />
        </Link>
        <Link
          href={
            logged.uid != undefined && logged.uid != 0
              ? `/resume/${logged.uid}`
              : "/authentication"
          }
          className="text-md hover:border-b-2 mr-5"
        >
          <User2Icon />
        </Link>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-br from-purple-900 to-black md:hidden">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href={
                logged.uid != undefined && logged.uid != 0
                  ? `/resume/${logged.uid}`
                  : "/authentication"
              }
              className="relative flex left-1/12 py-2 text-lg hover:border-b-2 border-sky-500 rounded-sm mr-5"
            >
              <User2Icon className="mr-4" />
              myResume
            </Link>
            <Link
              href={"/myResume"}
              className="relative flex left-1/12 py-2 text-lg hover:border-b-2 border-sky-500 rounded-sm  mr-5"
            >
              <Settings2 className="mr-4" />
              Edit myResume
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
