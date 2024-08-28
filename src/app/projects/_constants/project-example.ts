import { Project } from "../_models/project";

export const projectExample: Project = {
  title: "Example project",
  createdAt: new Date(0).toLocaleString(),
  soundBoardsState: [
    {
      isActive: false,
      sounds: [
        { note: "D2", duration: 96 },
        { note: "F2", duration: 96 },
        { note: "A2", duration: 96 },
        { note: "A2", duration: 96 },
      ],
      isMuted: false,
      name: "bass",
    },
    {
      isActive: true,
      sounds: [
        { note: "", duration: 96 },
        { note: "", duration: 96 },
        { note: "", duration: 96 },
        { note: "", duration: 64 },
        { note: "C3", duration: 16 },
        { note: "D3", duration: 16 },
        { note: "F3", duration: 64 },
        { note: "F3", duration: 16 },
        { note: "G3", duration: 16 },
        { note: "A3", duration: 64 },
        { note: "A3", duration: 16 },
        { note: "C4", duration: 16 },
        { note: "G3", duration: 64 },
        { note: "F3", duration: 16 },
        { note: "E3", duration: 16 },
        { note: "D3", duration: 64 },
        { note: "C3", duration: 16 },
        { note: "D3", duration: 16 },
        { note: "F3", duration: 64 },
        { note: "F3", duration: 16 },
        { note: "G3", duration: 16 },
        { note: "A3", duration: 64 },
        { note: "A3", duration: 16 },
        { note: "C4", duration: 16 },
        { note: "D4", duration: 64 },
        { note: "C4", duration: 16 },
        { note: "E4", duration: 16 },
        { note: "D4", duration: 64 },
        { note: "D4", duration: 16 },
        { note: "E4", duration: 16 },
        { note: "F4", duration: 32 },
        { note: "E4", duration: 32 },
        { note: "D4", duration: 32 },
        { note: "C4", duration: 32 },
        { note: "A3", duration: 32 },
        { note: "F3", duration: 32 },
        { note: "G3", duration: 48 },
        { note: "A3", duration: 8 },
        { note: "G3", duration: 8 },
        { note: "F3", duration: 16 },
        { note: "A3", duration: 16 },
        { note: "G3", duration: 64 },
        { note: "F3", duration: 16 },
        { note: "E3", duration: 16 },
        { note: "D3", duration: 96 },
        { note: "", duration: 96 },
        { note: "", duration: 96 },
        { note: "", duration: 96 },
      ],
      isMuted: false,
      name: "melody",
    },
  ],
  bpm: 150,
};
