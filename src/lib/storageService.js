const STORAGE_KEY = 'crewmates';

export const storageService = {
  getAllCrewmates: () => {
    const crewmates = localStorage.getItem(STORAGE_KEY);
    return crewmates ? JSON.parse(crewmates) : [];
  },

  createCrewmate: (crewmate) => {
    const crewmates = storageService.getAllCrewmates();
    const newCrewmate = {
      ...crewmate,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString()
    };
    crewmates.push(newCrewmate);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(crewmates));
    return newCrewmate;
  },

  updateCrewmate: (id, updatedCrewmate) => {
    const crewmates = storageService.getAllCrewmates();
    const index = crewmates.findIndex(c => c.id === id);
    if (index !== -1) {
      crewmates[index] = { ...crewmates[index], ...updatedCrewmate };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(crewmates));
      return crewmates[index];
    }
    return null;
  },

  deleteCrewmate: (id) => {
    const crewmates = storageService.getAllCrewmates();
    const filteredCrewmates = crewmates.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCrewmates));
  },

  getCrewmateById: (id) => {
    const crewmates = storageService.getAllCrewmates();
    return crewmates.find(c => c.id === id);
  }
};