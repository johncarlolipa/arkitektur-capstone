import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between">
        <div>
          <Link rel="" type="" href="/">
            <h1>Arkitektur</h1>
          </Link>
        </div>
        <div className="flex list-none space-x-4">
          <Link rel="" type="" href="/">
            <li>Home</li>
          </Link>
          <Link rel="" type="" href="/blogs">
            <li>Blog</li>
          </Link>
          <Link rel="" type="" href="/contact">
            <li>Contact</li>
          </Link>
        </div>
        <div className="space-x-4">
          <button type="">Sign In</button>
          <button type="">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
