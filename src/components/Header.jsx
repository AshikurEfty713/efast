import { ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex justify-end items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-pink-500 ring-offset-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">Hello Sami</p>
            </div>
            <ChevronDown size={16} />
          </div>
          <div className="dropdown-content menu">
            <ul>
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}