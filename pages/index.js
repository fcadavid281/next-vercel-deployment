import { MainLayout } from '@/Components/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link
          style={{ color: 'gray', textDecorationStyle: 'dashed' }}
          href='/about'>
          About
        </Link>
        <br />
      </h1>
      <p className={'description'} >
        Get started by editing {''}
        <code className={'code'}>
          Hello, I am your friend Fabian, do you speak English or Spanish
        </code>
      </p>
    </MainLayout >
  )
}
