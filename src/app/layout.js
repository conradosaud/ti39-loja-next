import "@/app/globals.css"

import Menu from "@/components/Menu"
import Rodape from "@/components/Rodape"

export const metadata = {
  title: 'Conradito Store',
  description: 'Compre tudo que você precisa de A à Y',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Menu />
                {children}
                <Rodape />
            </body>
        </html>
    )
}
