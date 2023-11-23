interface HospData {
	name: string;
	distance: number;
	location: string;
	tel: string;
}

type HospPageModel = HospData[];

export type { HospData, HospPageModel };
