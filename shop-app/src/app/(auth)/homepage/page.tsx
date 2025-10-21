import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
    return (
        <div className="h-full w-full mt-10">
            <div className="sayhello-page flex pb-12 border-b border-gray-200">
                <div className="welcome-page w-[65%] relative pr-8">
                    <div className="relative w-[85%] overflow-hidden rounded-lg ml-auto">
                        <Image
                            src="/image/homepage/bg-homepage.jpg"
                            alt="Hình ảnh chính"
                            height={500}
                            width={5000}
                            className="w-full h-auto block"
                            style={{ display: 'block' }}
                        />
                        <div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white rounded-b-lg">
                            <span className="text-red-500 font-bold text-sm">The Hit List</span>
                            <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-2">
                                Everywhere You&apos;ll Want to Eat in Hong Kong: Ronin, The Chairman, Lau Haa, and More
                            </h2>
                            <p className="text-sm md:text-base opacity-90">
                                Hong Kong has long relished its reputation as a city for gourmands and, after a tumultuous period of social unrest...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="newsfeed-page w-[25%] pl-8">
                    <h3 className="font-semibold mb-2 text-4xl">Discover restaurants to love in Hong Kong.</h3>
                    <p className="text-xl mb-4">
                        Be the first to know with Resy’s insider guides, deep dives on old standbys, and vital intel on all the latest and greatest new openings.
                    </p>

                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">The Hit List</a></li>
                        <li><a href="#" className="hover:underline">Events & Experiences</a></li>
                        <li><a href="#" className="hover:underline">Resy Tips</a></li>
                        <li><a href="#" className="hover:underline">Global Dining Access</a></li>
                        <li><a href="#" className="hover:underline">U.S. Card Offers from Amex</a></li>
                        <li><a href="#" className="hover:underline">Read more</a></li>
                    </ul>

                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-medium mb-3">About Resy</h4>
                        <div className="flex space-x-4 text-gray-500">
                            <a href="#" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.847.07 3.252.148 4.771 1.691 4.919 4.919.058 1.263.069 1.643.069 4.847v.004c0 3.204-.012 3.584-.069 4.847-.149 3.228-1.668 4.771-4.919 4.919-1.263.058-1.643.069-4.847.069h-.004c-3.204 0-3.584-.012-4.847-.069-3.252-.148-4.771-1.691-4.919-4.919-.057-1.263-.069-1.643-.069-4.847v-.004c0-3.204.012-3.584.069-4.847.149-3.228 1.668-4.771 4.919-4.919 1.263-.058 1.643-.069 4.847-.069h.004zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.688-.073 4.948v.004c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.948.072h.004c3.259 0 3.668-.014 4.947-.072 4.359-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.688.073-4.948v-.004c0-3.259-.014-3.667-.072-4.947-.2-4.359-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073h-.004zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.283 0-4.162-1.879-4.162-4.162s1.879-4.162 4.162-4.162 4.162 1.879 4.162 4.162-1.879 4.162-4.162 4.162zm6.406-11.845c-.748 0-1.441-.568-1.441-1.283s.693-1.283 1.441-1.283 1.441.568 1.441 1.283-.693 1.283-1.441 1.283z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter/X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.247 8.47 7.247 8.47-3.308 1.02H9.27l-7.247-8.47L9.27 3.27H18.244z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.064V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.972.923-1.972 1.877v2.25h3.356l-.53 3.47h-2.826v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking-list w-full px-60 my-15">
                <h3 className="font-semibold my-2 text-4xl pb-4">Booking now</h3>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                                            <Image
                                                src="/image/homepage/restaurant.png"
                                                alt="Lippo Chiuchow Restaurant"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardContent className="p-4 flex-grow flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Lippo Chiuchow Restaurant</h4>
                                                <div className="flex items-center gap-1 mb-2">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="font-medium">5.0</span>
                                                    <span className="text-gray-500">· Chinese · $$</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                    </svg>
                                                    <span>Hong Kong</span>
                                                </div>
                                            </div>
                                            <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                                                Notify
                                            </button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="app-promo-section w-full bg-[#FF4D00] flex justify-center items-center h-[45vh] relative mb-10">
                <div className="w-[60vw] flex items-center gap-8 h-full">
                    <div className="text-content text-white flex-1 pr-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Hẹn trước bàn ở cơ sở bạn yêu thích chỉ vài phút.
                        </h2>
                    </div>

                    <div className="phone-images flex-1 relative h-full flex items-end justify-start">
                        <Image
                            src="/image/homepage/mobi-app.png"
                            alt="Mobi-app"
                            width={600}
                            height={800}
                            className="h-[90%] max-h-[100%] w-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}