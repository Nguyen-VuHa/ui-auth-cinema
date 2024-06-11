import ReduxProvider from "~/redux/provider";
import "./globals.scss";

export const metadata = {
    title: "Cinema Booking",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi" suppressHydrationWarning={true}>
            <head>
                <link rel="icon" href="/icon.png" />
            </head>
            <body>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
