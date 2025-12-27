## Employee Task Management Dashboard

An **analytics dashboard for employee task management**, built to help admins and managers track tasks, projects, priorities, and employee workload in one unified interface.

The dashboard provides high-level insights through charts and overview panels, along with detailed task views such as lists, boards, files, and timelines — all powered by mock data for frontend-focused development.

### Overview

This project recreates a production-style admin dashboard experience.  
Admins can quickly understand:

- How many tasks are **pending, in progress, completed, or under review**
- Which tasks are assigned to **which employee and project**
- Task **priority levels** and **due dates**
- Overall progress through **visual analytics and charts**

The UI is optimized for both **desktop and mobile**, with smooth transitions and interactions.

#### Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** lucide-react
- **Bundler / Dev Server:** Vite

#### Features

- Admin task overview with analytics
- Multiple task views (Board, List, Timeline, Files)
- Employee and project-based task tracking
- Fully responsive layout (mobile → large screens)
- Smooth UI animations and transitions

#### Project Structure

```
src/
├─ main.tsx # Application entry point
├─ App.tsx # Main layout, sidebar, tabs, and views
│
├─ components/ # UI components
│ ├─ Sidebar.tsx
│ ├─ StatsCards.tsx
│ ├─ BoardTab.tsx
│ ├─ ListsTab.tsx
│ ├─ FilesTab.tsx
│ ├─ Timeline.tsx
│ ├─ DashboardCharts.tsx
│ └─ common/ # ErrorBoundary, loaders, shared UI
│
├─ data/ # Mock data used throughout the app
│ ├─ taskStats.ts
│ ├─ tasks.ts
│ ├─ projects.ts
│ ├─ employees.ts
│ ├─ boardColumns.ts
│ └─ timelineData.ts
│
├─ services/
│ └─ taskService.ts # Simulated service layer (mock API)
│
├─ types/
│ └─ index.ts # Shared TypeScript types
│
└─ styles/
└─ index.css # Global styles (Tailwind setup)
```

#### Mock Data & Service Layer

- This project uses **locally mocked data** to simulate a real backend, including realistic loading states and error scenarios.

#### Mock Data (`src/data/`)

- Task statistics (total, completed, in progress, due)
- Individual tasks with:
  - Title
  - Assigned employee
  - Project
  - Priority
  - Status
  - Due date
- Kanban board columns and task mapping
- Timeline events
- Files and list view data

#### Simulated Service (`src/services/taskService.ts`)

- Acts like a real API layer
- Introduces artificial latency
- Allows easy replacement with a real backend later

> No external APIs or keys are required — all data is frontend-only and deterministic.

### Run Locally

#### Install & Start

```bash
npm install
npm run dev
```

#### Build for Production

```bash
npm run build
npm run preview
```

#### Inspiration

The design and overall dashboard concept were inspired by
[Karan Kendre](https://github.com/kendrekaran).
This project was fully recreated and implemented independently to practice and demonstrate modern frontend architecture, responsiveness, and data visualization.
