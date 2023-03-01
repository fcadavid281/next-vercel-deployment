import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/Components/layouts/MainLayout'
import { DarkLayout } from '@/Components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function aboutPage() {
    return (
        <>
           
           <h1 className='title'> About Page </h1>
           <br />
                <h1>Ir a <Link href='/'>Home</Link></h1>
                <p className="description">
                    Hi, today is beautiful,
                    My wife is beautiful
                    <br/>
                    Every day I need to study, English

                    <code className="code">
                    Get started by editing {''}
                    </code>
                </p>
           
           
        </>
    )
}

aboutPage.getLayout=function getLayout(page){
return (
        <MainLayout>
            <DarkLayout>
               {page}
            </DarkLayout>
        </MainLayout>
)
}

