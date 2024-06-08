import { useContactUsMutation } from '@/lib/redux/api/contact/contactApi';

export const useContactUs = () => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    const [ContactUs] = useContactUsMutation();

    return {
        addContactUshanlder: async (data: any) => {
            try {
                const response = await ContactUs(data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    };
};
