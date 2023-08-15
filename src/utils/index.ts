import { verificationType } from "@/assets/dto";

export function getColorForVerificationState(state: verificationType): string {
    switch (state) {
        case 'Verified':
            return '#50CD89';
        case 'Rejected':
            return '#F1416C';
        case 'Pending':
            return '#FFB526';
        default:
            return 'black';
    }
}