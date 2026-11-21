
export const metadata = {
  title: 'Sharon Zeng Portfolio - profile of a front-end web developer',
  description: 'Sharon Zeng - An experienced JavaScript web developer open to job opportunities. Expert at React, redux, javascript, jquery.',
}

export default function RootLayout({
    children,
  }) {
    return (
        <html lang="en">
          <body>
            <div id="root">{children}</div>
          </body>
        </html>
    )
}