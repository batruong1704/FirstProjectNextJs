import {ToggleTheme} from "@/components/toggle-theme";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <div className='flex justify-between px-5 py-2'>
            <ul className='flex'>
                <li className='mr-2'><Button><Link href={'/login'}>Đăng nhập</Link></Button></li>
                <li><Button><Link href={'/register'}>Đăng ký</Link></Button></li>
            </ul>
            <ToggleTheme />
        </div>
    )
}
