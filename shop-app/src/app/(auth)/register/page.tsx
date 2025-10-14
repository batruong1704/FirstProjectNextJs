import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
const formSchema = z.object({
    username: z.string().min(2).max(50),
})

import RegisterForm from "@/app/(auth)/register/register-form";

export default function RegisterPage() {
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold mb-10'>Đăng ký</h2>
            <RegisterForm />
        </div>
    )
}
