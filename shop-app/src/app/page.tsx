import AboutSectionPage from "@/components/AboutSection/page";
import FooterForm from "@/components/footer/page";
import BookingList from "@/components/Booking/page";
import MainContentPage from "@/components/Content/page";

export default function Home() {
    return (
        <div className="h-full w-full">
            <MainContentPage/>
            <BookingList/>
            <AboutSectionPage/>
            <FooterForm/>
        </div>
    );
}
