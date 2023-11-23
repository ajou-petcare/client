interface LoginInfo {
	username: string;
	pets: PetInfo[];
}

interface PetInfo {
	petname: string;
}

export type { LoginInfo };
