import { useState } from 'react';
import Sidebar from './components/SideBar';
import ListsTab from './components/ListCard';
import Timeline from './components/TimeLineCard';
import ErrorBoundary from './components/common/ErrorBoundary';
import { StatusBreakdownChart, WeeklyProgressChart } from './components/DashBoardCarts';
import {
  Search,
  LayoutGrid,
  List,
  ChevronDown,
  ArrowDownWideNarrow,
  ClipboardList,
  Menu
} from 'lucide-react';
import StatsCards from './components/StatsCard';
import BoardTab from './components/BoardCard';
import FilesTab from './components/FilesCard';
import { AnimatePresence, motion } from "motion/react";

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f1f1] text-primary">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            {/* Backdrop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              type="button"
              className="absolute inset-0 h-full w-full bg-black/40"
              aria-label="Close sidebar"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-50 h-full"
            >
              <Sidebar
                variant="overlay"
                onClose={() => setIsSidebarOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar variant="desktop" />
        </div>

        <main className="bg-white flex-1 p-4 my-4 border border-gray-300 rounded-2xl overflow-y-auto w-full lg:ml-72">
          <ErrorBoundary>
            <header className="mb-8">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="mb-1 text-sm text-gray-500">Tasks</div>
                    <h1 className="text-2xl sm:text-3xl text-gray-900">Tasks</h1>
                  </div>

                  {/* Mobile menu button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 lg:hidden"
                    aria-label="Open navigation"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <div className="relative w-full sm:w-72 md:w-64 lg:w-72 cursor-pointer">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-900" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-12 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-gray-400">⌘F</span>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    <span><span className="text-gray-400">Status:</span> All</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    <ArrowDownWideNarrow className="h-4 w-4" />
                    <span className="text-gray-400">Sort</span>
                  </button>

                  <div className="flex rounded-lg border border-gray-300 bg-white p-1">
                    <button
                      className="rounded bg-gray-100 p-1.5 text-gray-900 cursor-pointer"
                      aria-label="Grid view"
                      title="Grid view"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 text-gray-500 hover:text-gray-900 cursor-pointer"
                      aria-label="List view"
                      title="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300">
                <nav className="flex gap-8">
                  {['Overview', 'Lists', 'Board', 'Timeline', 'Files'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-sm cursor-pointer transition-colors relative ${activeTab === tab
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <span className="absolute -bottom-px left-0 w-full h-px bg-gray-900 rounded-t-full" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </header>

            <div className="space-y-6 animate-in fade-in duration-500">
              {activeTab === 'Overview' && (
                <>
                  {/* Task Overview Section */}
                  <section className="bg-[#fafaf8]  rounded-2xl p-2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 w-7 h-7 bg-white rounded-full text-gray-900">
                        <ClipboardList className="w-4 h-4 text-gray-400" />
                      </div>
                      <h2 className="text-md font-medium text-gray-900 uppercase tracking-wider">
                        Task Overview
                        <span className="text-gray-400 font-normal normal-case ml-1">(250+)</span>
                      </h2>
                    </div>

                    <div className="bg-white  rounded-2xl p-4">
                      <StatsCards />
                    </div>
                  </section>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3">
                      <StatusBreakdownChart />
                    </div>
                    <div className="lg:col-span-2">
                      <WeeklyProgressChart />
                    </div>
                  </div>

                  <Timeline />
                </>
              )}

              {activeTab === 'Lists' && <ListsTab />}
              {activeTab === 'Board' && <BoardTab />}
              {activeTab === 'Timeline' && <Timeline />}
              {activeTab === 'Files' && <FilesTab />}
            </div>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default App;


