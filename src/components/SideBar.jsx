import Link from "next/link";
import {
  Home,
  Users,
  FolderKanban,
  MessageSquare,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";

export function Sidebar({ open }) {
  return (
    <aside
      className={`${
        open ? "w-56" : "w-0 -ml-56"
      } bg-white border-r transition-all duration-300 flex flex-col h-full`}
    >
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">CFO Compass</h1>
        <div className="flex items-center mt-2">
          <span className="text-sm">EN</span>
          <div className="ml-2 w-6 h-4 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20app-KGODaA5MniBr27v3DjwlFzItwIPReI.png')] bg-cover bg-center rounded-sm"></div>
        </div>
      </div>

      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything"
            className="w-full py-2 pl-8 pr-4 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span className="absolute left-2.5 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </span>
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        <Link
          href="/"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground"
        >
          <Home className="w-5 h-5 mr-3" />
          Home
        </Link>
        <Link
          href="/experts"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <Users className="w-5 h-5 mr-3" />
          Experts
        </Link>
        <Link
          href="/projects"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FolderKanban className="w-5 h-5 mr-3" />
          Projects
        </Link>
        <Link
          href="/messages"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <MessageSquare className="w-5 h-5 mr-3" />
          Messages
        </Link>
        <Link
          href="/reports"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FileText className="w-5 h-5 mr-3" />
          Reports
        </Link>
      </nav>

      <div className="p-2 border-t">
        <Link
          href="/settings"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
        <Link
          href="/help"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
        >
          <HelpCircle className="w-5 h-5 mr-3" />
          Help
        </Link>
      </div>
    </aside>
  );
}
