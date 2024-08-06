import Header from "@/components/header";

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Header name="Pucing" age='34' job='tua'>Usia</Header>
            {children}
        </div>
    );
  }
