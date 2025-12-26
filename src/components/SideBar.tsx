import React, { useState } from 'react';
import {
    Home,
    Calendar,
    Users,
    FileText,
    Zap,
    BarChart2,
    Settings,
    Rocket,
    Search,
    Plus,
    ArrowLeftToLine,
    ClipboardList,
    ChevronDown,
    GripVertical
} from 'lucide-react';

type SidebarVariant = 'desktop' | 'overlay';

interface SidebarProps {
    variant?: SidebarVariant;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ variant = 'desktop', onClose }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);
    const [isManagementOpen, setIsManagementOpen] = useState(true);
    const [isSupportOpen, setIsSupportOpen] = useState(true);

    const containerClasses =
        variant === 'desktop'
            ? 'w-72 h-screen bg-[#f1f1f1] flex flex-col fixed left-0 top-0 z-30 overflow-y-auto no-scrollbar'
            : 'w-72 max-w-full h-full bg-[#f1f1f1] flex flex-col overflow-y-auto no-scrollbar shadow-xl border-r border-gray-300';

    return (
        <div className={containerClasses}>


            <div className="m-4 bg-white border border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <img
                        src="/logo.png"
                        alt="User"
                        className="w-10 h-10  object-cover "
                    />
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm  text-gray-900 truncate">Courtney Henry</h4>
                        <p className="text-xs text-[#989a99] truncate">The Walt Disney Company</p>
                    </div>
                    {variant === 'overlay' && onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex items-center justify-center rounded-full p-1 hover:bg-gray-100"
                            aria-label="Close sidebar"
                        >
                            <ArrowLeftToLine className="w-4 h-4 text-gray-400" />
                        </button>
                    )}
                </div>
            </div>


            <div className="px-4  py-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-9 pr-4 py-2 bg-[#e7e6e4] border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none placeholder-gray-400"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-medium">⌘F</span>
                </div>
            </div>


            <div className="flex-1 px-3 space-y-6">


                <div className='border-b border-gray-300 pb-2'>
                    <h3 className="px-2 mb-2 text-sm text-[#302e2c]  font-medium tracking-wider">Essentials</h3>
                    <nav className="space-y-0.5">
                        <NavItem icon={Home} label="Home" />
                        <NavItem icon={ClipboardList} label="Tasks" active />
                        <NavItem icon={Calendar} label="Calendar" />
                        <NavItem icon={Users} label="Team" />
                        <NavItem icon={FileText} label="Docs" />
                        <NavItem icon={Zap} label="Automations" />
                        <NavItem icon={BarChart2} label="Reporting" />
                    </nav>
                </div>


                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <button
                            className="flex items-center gap-2 text-sm font-medium text-[#5f6368] hover:text-gray-900"
                            onClick={() => setIsProjectsOpen((prev) => !prev)}
                        >
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-0' : '-rotate-90'
                                    }`}
                            />
                            <span>Projects</span>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500">
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <Plus className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <GripVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <nav
                        className={`space-y-1 overflow-hidden transition-all duration-200 ${isProjectsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ProjectItem
                            bgColor="bg-[#85d017]"
                            iconSrc="/logo1.svg"
                            label="Atlas CRM Revamp"
                        />
                        <ProjectItem
                            bgColor="bg-orange-500"
                            iconSrc="/logo2.svg"
                            label="Nimbus Dashboard"
                        />
                        <ProjectItem
                            bgColor="bg-[#3b7efc]"
                            iconSrc="/logo3.svg"
                            label="Orion API Gateway"
                        />
                        <ProjectItem
                            bgColor="bg-rose-500"
                            iconSrc="/logo4.svg"
                            label="Helio Task System"
                        />
                    </nav>
                </div>


                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <button
                            className="flex items-center gap-2 text-sm font-medium text-[#5f6368] hover:text-gray-900"
                            onClick={() => setIsManagementOpen((prev) => !prev)}
                        >
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${isManagementOpen ? 'rotate-0' : '-rotate-90'
                                    }`}
                            />
                            <span>Management</span>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500">
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <Plus className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <GripVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <nav
                        className={`space-y-1 overflow-hidden transition-all duration-200 ${isManagementOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ProjectItem
                            bgColor="bg-orange-500"
                            iconSrc="/logo1.svg"
                            label="Resource Planning"
                        />
                        <ProjectItem
                            bgColor="bg-[#85d017]"
                            iconSrc="/logo2.svg"
                            label="Team Permissions"
                        />
                        <ProjectItem
                            bgColor="bg-rose-500"
                            iconSrc="/logo3.svg"
                            label="Approval Flows"
                        />
                    </nav>
                </div>

                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <button
                            className="flex items-center gap-2 text-sm font-medium text-[#5f6368] hover:text-gray-900"
                            onClick={() => setIsSupportOpen((prev) => !prev)}
                        >
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${isSupportOpen ? 'rotate-0' : '-rotate-90'
                                    }`}
                            />
                            <span>Support</span>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500">
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <Plus className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <GripVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <nav
                        className={`space-y-1 overflow-hidden transition-all duration-200 ${isSupportOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <NavItem icon={Settings} label="Settings" />
                        <NavItem icon={Rocket} label="Releases" />
                    </nav>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon: Icon, label, active = false, count }: { icon: any, label: string, active?: boolean, count?: string }) => (
    <a
        href="#"
        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-noraml transition-colors ${active
            ? 'bg-white border border-gray-300 text-gray-900'
            : 'text-[#919694] hover:bg-gray-50 hover:text-gray-900'
            }`}
    >
        <div className="flex items-center gap-3">
            <Icon className={`w-4 h-4 ${active ? 'text-[#919694]' : 'text-[#919694]'}`} />
            <span>{label}</span>
        </div>
    </a>
);

const ProjectItem = ({
    bgColor,
    iconSrc,
    label
}: {
    bgColor: string;
    iconSrc: string;
    label: string;
}) => (
    <a
        href="#"
        className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-[#5f6368] hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
        <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${bgColor}`}
        >
            <img src={iconSrc} alt="" className="w-4 h-4" />
        </span>
        <span className="text-[#727574] font-normal truncate">{label}</span>
    </a>
);

export default Sidebar;


