import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function aboutPage() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ir a   <a style={{ color: 'blueviolet' }} href='/'>Home</a>
                </h1>
                <p >
                    Incididunt dolore incididunt aliqua id duis. Est incididunt incididunt dolor adipisicing commodo ex reprehenderit commodo do. Et exercitation reprehenderit voluptate eu quis culpa elit.

                    Qui consectetur laboris aliqua proident dolore do officia deserunt in. Nostrud aliqua voluptate laborum exercitation ipsum veniam aliqua. Quis Lorem pariatur reprehenderit elit officia do in tempor id adipisicing Lorem ad deserunt dolor. Lorem velit dolore laborum eu adipisicing laboris anim Lorem aliquip. Elit elit elit deserunt amet labore aliqua cillum fugiat non tempor esse.

                    Lorem voluptate sit labore proident cillum enim ullamco duis commodo laborum consequat consectetur eiusmod proident. Dolore aute enim magna labore consequat eiusmod nisi minim deserunt deserunt nulla et. Enim aute sint exercitation anim irure laboris. Incididunt eu do dolore nisi aliqua eiusmod duis magna quis. Id do duis nulla tempor cupidatat. Dolore ad aute fugiat nostrud velit tempor id aliquip aute magna pariatur velit. Deserunt proident cupidatat ad esse ea commodo aute ea.

                    Culpa aute id reprehenderit sunt velit ex commodo reprehenderit sunt quis sint commodo laboris. Cupidatat aliqua amet nostrud incididunt elit exercitation. Fugiat mollit cillum est aliquip pariatur sunt minim eiusmod eiusmod magna sunt culpa. Commodo incididunt nisi commodo consequat laboris eu incididunt anim occaecat officia reprehenderit non ex Lorem. Commodo anim esse amet mollit pariatur Lorem aliquip. In qui aute ipsum proident. Ullamco aute tempor do Lorem velit labore occaecat consectetur minim consequat sunt laboris enim exercitation.

                    Ipsum Lorem deserunt pariatur excepteur ipsum officia cillum pariatur Lorem magna dolor. Duis ipsum sit exercitation officia laboris ullamco velit amet incididunt quis ipsum aute fugiat esse. Aliqua irure et dolor duis ipsum laborum id est magna voluptate sint ullamco veniam ut. Fugiat qui non consectetur dolore amet cupidatat deserunt. Veniam dolore laboris magna minim in voluptate et id.

                    Labore sunt aliquip occaecat ipsum est nulla ad labore mollit. Tempor Lorem est proident irure excepteur. Sint veniam reprehenderit dolor nulla aliqua amet nostrud qui ullamco ea qui.

                </p>
                <p className={styles.desctipcion} >
                    Get started by editing {''}
                    <code className={styles.code}></code>
                </p>
            </main>
        </>
    )
}
