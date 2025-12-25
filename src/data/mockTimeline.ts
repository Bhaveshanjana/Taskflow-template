export interface TimelineUser {
    avatarUrl: string;
}

export interface TimelineTaskData {
    id: string;
    span: number;
    title: string;
    duration: string;
    start: number;
    userImages: string[];
}

export const TIMELINE_USERS: TimelineUser[] = [
    {
        avatarUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    },
    {
        avatarUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    },
    {
        avatarUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
    },
    {
        avatarUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64",
    },
];

export const TIMELINE_TASK: TimelineTaskData[] = [
    {
        id: "Timeline-1",
        span: 4,
        title: "Research",
        duration: "About 4 hours",
        start: 1,
        userImages: [
            TIMELINE_USERS[0].avatarUrl,
            TIMELINE_USERS[1].avatarUrl,
            TIMELINE_USERS[2].avatarUrl,
        ],
    },
    {
        id: "Timeline-2",
        span: 3,
        title: "WireFrame",
        duration: "About 3 hours",
        start: 2,
        userImages: [TIMELINE_USERS[3].avatarUrl],
    },
    {
        id: "Timeline-3",
        span: 4,
        title: "UI Design",
        duration: "About 6 hours",
        start: 3,
        userImages: [
            TIMELINE_USERS[0].avatarUrl,
            TIMELINE_USERS[2].avatarUrl,
            TIMELINE_USERS[1].avatarUrl,
        ],
    },
];
