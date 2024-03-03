import {jobType} from "@/types/types";
import {create} from "zustand";

interface JobStoreState {
	filteredJobs: jobType[];
	setFilteredJobs: (jobs: jobType[]) => void;
}

const useJobStore = create<JobStoreState>((set) => ({
	filteredJobs: [],
	setFilteredJobs: (jobs) => {
		return set({
			filteredJobs: jobs
		})
	}
}));

export default useJobStore;
