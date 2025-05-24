"use client";

import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  ExternalLink,
  X,
  Filter,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { getUsers } from "@/utils/types";
import axios from "axios";
import Image from "next/image";
import { Navbar } from "../components/navBar";

export default function PeopleDirectory() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<getUsers[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getUsers`,
        );
        setUsers(res.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users?.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.About[0]?.about || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (user.contact[0]?.location || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "designers")
      return (
        matchesSearch &&
        (user.About[0]?.about || "").toLowerCase().includes("design")
      );
    if (activeFilter === "developers")
      return (
        matchesSearch &&
        (user.About[0]?.about || "").toLowerCase().includes("develop")
      );
    return matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0F0F13] text-white">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 relative ">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-white">Talent</span>
              <span className="text-[#F9CB28]">.</span>
              <span className="text-[#0EA5E9]">Directory</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-light">
              Discover exceptional professionals and connect with the brightest
              minds
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto ">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-12 py-4 border-0 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] 
                           bg-[#1A1A20] text-white placeholder-gray-400 shadow-lg"
                  placeholder="Search by name, location, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-white" />
                  </button>
                )}
              </div>

              <div className="relative md:w-auto">
                <button
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                  className="w-full md:w-auto px-6 py-4 rounded-xl bg-[#1A1A20] text-white flex items-center justify-center gap-2 hover:bg-[#252530] transition-all duration-200"
                >
                  <Filter className="h-5 w-5" />
                  <span>
                    {activeFilter.charAt(0).toUpperCase() +
                      activeFilter.slice(1)}
                  </span>
                </button>

                <AnimatePresence>
                  {isFilterMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10}}
                      className="absolute right-0 mt-2 w-48 z-[90] rounded-xl bg-[#1A1A20] shadow-lg  overflow-hidden"
                    >
                      {["all", "designers", "developers"].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setActiveFilter(filter);
                            setIsFilterMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                            activeFilter === filter
                              ? "bg-[#252530] text-white"
                              : "text-gray-300 hover:bg-[#252530]"
                          }`}
                        >
                          {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative -mt-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A20] rounded-2xl overflow-hidden border border-[#2A2A35] h-[400px]"
                >
                  <div className="h-40 bg-[#252530] animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-center -mt-16 mb-4">
                      <div className="h-24 w-24 rounded-xl bg-[#252530] animate-pulse" />
                    </div>
                    <div className="h-6 bg-[#252530] rounded-lg animate-pulse w-3/4 mx-auto" />
                    <div className="h-4 bg-[#252530] rounded-lg animate-pulse w-1/2 mx-auto" />
                    <div className="h-16 bg-[#252530] rounded-lg animate-pulse w-full" />
                    <div className="flex justify-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-[#252530] animate-pulse" />
                      <div className="h-10 w-10 rounded-lg bg-[#252530] animate-pulse" />
                      <div className="h-10 w-10 rounded-lg bg-[#252530] animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredUsers && filteredUsers.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredUsers.map((person) => (
                <motion.div key={person.uid} variants={item} className="h-full">
                  <div className="group h-full bg-[#1A1A20] rounded-2xl overflow-hidden border border-[#2A2A35] hover:border-[#0EA5E9]/30 transition-all duration-300 shadow-lg hover:shadow-[#0EA5E9]/10">
                    <div className="h-40 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/80 to-[#F9CB28]/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center mix-blend-overlay opacity-30" />
                    </div>

                    <div className="relative px-6 pb-6">
                      <div className="flex justify-center">
                        <div className="absolute -top-16 shadow-lg overflow-hidden rounded-xl border-4 border-[#1A1A20] group-hover:border-[#0EA5E9]/20 transition-all duration-300">
                          <div className="relative h-32 w-32 bg-[#252530]">
                            <Image
                              src={
                                person.About[0]?.image ||
                                "https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"
                              }
                              alt={person.username}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-20 text-center">
                        <Link
                          href={`/resume/${person.username}`}
                          className="inline-block"
                        >
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0EA5E9] transition-colors duration-300">
                            {person.username}
                          </h2>
                        </Link>

                        <div className="flex justify-center items-center text-sm text-gray-400 mb-4">
                          <MapPin className="w-4 h-4 mr-1 text-[#F9CB28]" />
                          <span>
                            {person.contact[0]?.location || "Unknown location"}
                          </span>
                        </div>

                        <p className="text-sm text-gray-400 line-clamp-3 mb-6 font-light">
                          {person.About[0]?.about || "No description provided."}
                        </p>

                        <div className="flex justify-center space-x-3 mt-4">
                          <Link
                            href={person.contact[0].linkedin}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#252530] text-white hover:bg-[#0EA5E9] transition-all duration-200"
                            aria-label="LinkedIn profile"
                          >
                            <Linkedin />
                          </Link>
                          <Link
                            href={person.contact[0].github}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#252530] text-white hover:bg-[#6366F1] transition-all duration-200"
                            aria-label="GitHub profile"
                          >
                            <Github />
                          </Link>
                          <Link
                            href={`/resume/${person.username}`}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#252530] text-white hover:bg-[#F9CB28] transition-all duration-200"
                            aria-label="View profile"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-[#1A1A20] rounded-2xl border border-[#2A2A35]">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#252530] mb-6">
                <Search className="h-10 w-10 text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                No results found
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8 font-light">
                We couldn&apos;t find any people matching your search criteria.
                Try adjusting your search terms.
              </p>
              {searchQuery && (
                <button
                  className="px-6 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilter("all");
                  }}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
