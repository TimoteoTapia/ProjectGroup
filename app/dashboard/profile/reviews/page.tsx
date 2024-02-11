import { fetchUserByEmail } from "@/app/lib/data";
import ReviewsComponent from "@/app/ui/profile/ReviewsComponent";
import { auth } from "@/auth";



export default async function ProfileReviews() {
    const session = await auth();
    const userEmail = session?.user?.email as string;
    const userData = await fetchUserByEmail(userEmail);
    const userId = userData?.id as string;
    return (
        <>
        <div>
            <div>
                <ReviewsComponent id={userId} />
            </div>
        </div>
        </>
    );
}