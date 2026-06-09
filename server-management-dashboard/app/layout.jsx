import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeInitializer } from '@/components/theme-initializer'

export const metadata = {
  title: 'Server Management',
  description: 'Internal server management dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeInitializer />
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto bg-background">
                <div className="w-full max-w-8xl mx-auto px-12 py-7">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
