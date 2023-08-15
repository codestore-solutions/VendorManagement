export const loginRedirection = (role: number): string => {
    switch (role) {
        case 1:
            return 'admin';
        case 2:
            return 'business-admin';
        case 3:
            return 'vendor';
        default:
            return '404';
    }
};