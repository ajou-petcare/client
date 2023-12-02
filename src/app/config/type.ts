interface LoginInfo {
	id: number;
	username: string;
	pets: PetInfo[];
}

interface PetInfo {
	petname: string;
}

export type { LoginInfo };
