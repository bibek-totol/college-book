"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname(); 
   const { data: session } = useSession();
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const [updatedName, setUpdatedName] = useState("");
const [updatedEmail, setUpdatedEmail] = useState("");

const [user, setUser] = useState({
  name: session?.user?.name || "",
  email: session?.user?.email || "",
});


   useEffect(() => {
     if (session) {
        setUpdatedName(session.user?.name || "");
        setUpdatedEmail(session.user?.email || "");

         setUser({
      name: session.user?.name || "",
      email: session.user?.email || "",
    });

     }
   }, [session]);


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Colleges", path: "/colleges" },
    { name: "Admission", path: "/admission" },
    { name: "My College", path: "/mycollege" },
  ];

  


const handleSaveProfile = async () => {
  try {
    const res = await fetch("/api/update-user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName, email: updatedEmail }),
    });

    if (res.ok) {
      toast.success("Profile updated successfully!");
      setIsEditModalOpen(false);
       setUser({ name: updatedName, email: updatedEmail });
    } else {
      toast.error("Failed to update profile.");
    }
  } catch (error) {
    console.error(error);
  }
};



  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 gradient-primary rounded-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduBook
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg cursor-pointer"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            

            {
                session ?(
                  <>
                  {session.user?.image ? (
  <img
    src={session.user.image}
    alt="User Avatar"
    className="w-8 h-8 rounded-full object-cover border border-blue-400 cursor-pointer"
  />
) : (
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold focus:outline-none">
      {session.user?.name?.charAt(0).toUpperCase()}
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end" className="w-56 p-2 ">
    <div className="px-3 py-2">
      <p className="text-sm font-medium">{session.user?.name}</p>
      <p className="text-xs text-muted-foreground">{session.user?.email}</p>
    </div>

    <DropdownMenuSeparator />

    <DropdownMenuItem
      onClick={() => setIsEditModalOpen(true)}
      className="cursor-pointer p-3 bg-gradient-to-r from-primary to-accent mx-auto w-full max-w-3/4 text-white"
    >
      <span className="text-sm font-medium mx-auto">Edit Profile</span>
      
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>

)}



                  <span className="text-sm font-medium">{user?.name}</span>
                  <Button variant="ghost" size="sm" className="gap-2 cursor-pointer" onClick={() => signOut()}>
                  <User className="h-6 w-6" />
                   Logout
                 
                 </Button>
                  </>
                ):(
                  <Link href="/auth">
                  <Button size="sm" className="btn-gradient cursor-pointer">
                   <User className="h-6 w-6" />
                    Sign Up or Login
                  
                  </Button>
                  </Link>
                )
            }
            
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="gap-2 justify-start cursor-pointer"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 justify-start">
                  <User className="h-4 w-4" />
                  Login
                </Button>
                <Button size="sm" className="btn-gradient">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>




    {isEditModalOpen && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-9999">
    <div className="bg-background p-6 rounded-lg shadow-lg w-[90%] max-w-md">
      <h2 className="text-lg font-semibold mb-4 text-center">Edit Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
          Cancel
        </Button>
        <Button className="bg-gradient-to-r from-primary to-accent text-white cursor-pointer
        " onClick={handleSaveProfile}>Save</Button>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default Navbar;
